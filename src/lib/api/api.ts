import { API_ENDPOINTS } from './endpoints';
import { loading } from '../stores/loading';

const BASE_URL = '/api/proxy'; // All requests will go through this proxy

interface RequestOptions extends RequestInit {
  authenticate?: boolean;
  body?: any;
}

async function apiCall(endpointKey: string, options: RequestOptions = {}) {
  loading.set(true); // Show loading bar

  const url = (API_ENDPOINTS as Record<string, string>)[endpointKey];
  if (!url) {
    console.error(`Endpoint key "${endpointKey}" not found in API_ENDPOINTS.`);
    loading.set(false);
    throw new Error('Invalid API endpoint.');
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers as Record<string, string>, // Cast to ensure string indexability
  };

  // Handle authentication (example: add a token if authenticate is true)
  if (options.authenticate) {
    const token = localStorage.getItem('authToken'); // Or from a more secure store
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    } else {
      console.warn('Authentication requested but no token found.');
      // Optionally, redirect to login or throw an error
    }
  }

  const config: RequestInit = {
    method: options.method || 'GET',
    headers,
    ...options,
  };

  if (options.body && typeof options.body === 'object') {
    config.body = JSON.stringify(options.body);
  }

  try {
    const response = await fetch(BASE_URL, {
      method: 'POST', // All client-side requests to the proxy will be POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
        method: config.method,
        headers: config.headers,
        body: config.body,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong with the API call.');
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  } finally {
    loading.set(false); // Hide loading bar
  }
}

async function getApi(endpointKey: string, options: Omit<RequestOptions, 'method' | 'body'> = {}) {
  return apiCall(endpointKey, { ...options, method: 'GET' });
}

async function postApi(endpointKey: string, body: any, options: Omit<RequestOptions, 'method' | 'body'> = {}) {
  return apiCall(endpointKey, { ...options, method: 'POST', body });
}

async function putApi(endpointKey: string, body: any, options: Omit<RequestOptions, 'method' | 'body'> = {}) {
  return apiCall(endpointKey, { ...options, method: 'PUT', body });
}

async function deleteApi(endpointKey: string, options: Omit<RequestOptions, 'method' | 'body'> = {}) {
  return apiCall(endpointKey, { ...options, method: 'DELETE' });
}

export { getApi, postApi, putApi, deleteApi };
