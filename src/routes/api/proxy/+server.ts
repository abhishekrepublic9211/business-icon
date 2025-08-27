import { json } from '@sveltejs/kit';

// This is a placeholder for your actual backend API base URL
// In a real application, this would likely come from environment variables
const BACKEND_API_BASE_URL = 'http://localhost:3000'; // Replace with your actual backend URL

export async function POST({ request }) {
  try {
    const { url, method, headers, body } = await request.json();

    // Construct the full URL for the backend
    const fullBackendUrl = `${BACKEND_API_BASE_URL}${url}`;

    // Forward the request to the backend
    const backendResponse = await fetch(fullBackendUrl, {
      method,
      headers,
      body,
    });

    // Read the response from the backend
    const responseBody = await backendResponse.json();

    // Return the backend's response to the client
    return json(responseBody, {
      status: backendResponse.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Proxy server error:', error);
    return json({ message: 'Proxy server error', error: error instanceof Error ? error.message : 'An unknown error occurred' }, { status: 500 });
  }
}
