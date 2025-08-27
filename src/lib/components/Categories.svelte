<script lang="ts">
    export let id: string = '';
    // This component will display a grid of category cards.
    // You can pass an array of categories as a prop if needed.
//    const categories = Array.from({ length: 21 }, (_, i) => ({
//         id: i + 1,
//         title: `Category Title ${i + 1}`,
//         description: "Short description of the category.",
//         iconPath: "M12 6.042A8.967 8.967 0 006 3.75c-1.079 0-2.15.221-3.133.664a10.08 10.08 0 002.296 6.37C4.305 10.783 6 13 6 13s1.7-2.217 3.837-5.966c.148-.25.298-.499.449-.748a10.096 10.096 0 002.138-3.085V6.042zm-8.625 9.088c.846 1.8 2.222 3.179 3.837 3.837s3.179 1.487 5.966 1.764m-4.254-2.613c-.15.25-.3.499-.45-.748-1.74 2.87-3.837 5.966-3.837 5.966s-2.097-3.096-3.837-5.966c-.15-.25-.3-.499-.45-.748-.002-.005-.004-.01-.006-.015a9.043 9.043 0 00-1.859 1.258L12 21.75l7.98-3.837a9.043 9.043 0 00-1.859-1.258c-.002-.005-.004-.01-.006-.015-.15-.25-.3-.499-.45-.748-1.74-2.87-3.837-5.966-3.837-5.966S15.655 10.783 14 13l-1.821 3.232a8.96 8.96 0 002.138-3.085c.15-.25.3-.499.45-.748a10.083 10.083 0 002.296-6.37C18.15 3.971 17.079 3.75 16 3.75A8.967 8.967 0 0012 6.042V3.75c-.322 0-.64-.02-.958-.06Zm-8.497 9.87c-.002.005-.004.01-.006.015-1.74 2.87-3.837 5.966-3.837 5.966S1 18.096 1 18.096"
//     }));

    const categories = [{
        "title":"Auto",
        "description":"These automobiles combine efficiency, safety, and style to meet diverse needs. From modern design to advanced technology, they represent reliability and convenience for everyday journeys.",
        "image":"/category.png",
    },
    {
        "title":"Innovation",
        "description":"These automobiles combine efficiency, safety, and style to meet diverse needs. From modern design to advanced technology, they represent reliability and convenience for everyday journeys.",
        "image":"/category.png",
    },
     {
        "title":"Real Estate",
        "description":"These automobiles combine efficiency, safety, and style to meet diverse needs. From modern design to advanced technology, they represent reliability and convenience for everyday journeys.",
        "image":"/category.png",
    },
     {
        "title":"Health Care",
        "description":"These automobiles combine efficiency, safety, and style to meet diverse needs. From modern design to advanced technology, they represent reliability and convenience for everyday journeys.",
        "image":"/category.png",
    },
      {
        "title":"E-Commerce",
        "description":"These automobiles combine efficiency, safety, and style to meet diverse needs. From modern design to advanced technology, they represent reliability and convenience for everyday journeys.",
        "image":"/category.png",
    },
    {
        "title":"Real Estate",
        "description":"These automobiles combine efficiency, safety, and style to meet diverse needs. From modern design to advanced technology, they represent reliability and convenience for everyday journeys.",
        "image":"/category.png",
    },
    {
        "title":"Real Estate",
        "description":"These automobiles combine efficiency, safety, and style to meet diverse needs. From modern design to advanced technology, they represent reliability and convenience for everyday journeys.",
        "image":"/category.png",
    },
    {
        "title":"Real Estate",
        "description":"These automobiles combine efficiency, safety, and style to meet diverse needs. From modern design to advanced technology, they represent reliability and convenience for everyday journeys.",
        "image":"/category.png",
    },
    {
        "title":"Real Estate",
        "description":"These automobiles combine efficiency, safety, and style to meet diverse needs. From modern design to advanced technology, they represent reliability and convenience for everyday journeys.",
        "image":"/category.png",
    },
    {
        "title":"Real Estate",
        "description":"These automobiles combine efficiency, safety, and style to meet diverse needs. From modern design to advanced technology, they represent reliability and convenience for everyday journeys.",
        "image":"/category.png",
    },
    {
        "title":"Real Estate",
        "description":"These automobiles combine efficiency, safety, and style to meet diverse needs. From modern design to advanced technology, they represent reliability and convenience for everyday journeys.",
        "image":"/category.png",
    },
     {
        "title":"Real Estate",
        "description":"These automobiles combine efficiency, safety, and style to meet diverse needs. From modern design to advanced technology, they represent reliability and convenience for everyday journeys.",
        "image":"/category.png",
    }
    
    
    ]
</script>

<section id={id} class="bg-yellow-50 py-16 px-4 categories-section">
    <div class="container mx-auto">
        <h2 class="text-4xl font-extrabold text-black-800 text-center mb-12 text-[32px]">CATEGORIES</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {#each categories as category}
                <div class="bg-white p-0 rounded-lg shadow-lg text-center p-4">
                    <div class="bg-red-50 p-12 rounded-t-lg mb-4">
                       <img src={category.image} alt={category.title} class="mx-auto h-24 w-24 object-contain" />
                    </div>
                    <h3 class="text-2xl font-bold text-black mb-2">{category.title}</h3>
                    <p class="text-black text-base px-6 mb-6">{category.description}</p>
                    <button class="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 w-full flex items-center justify-center">
                        Register <span class="ml-2">↗</span>
                    </button>
                </div>
            {/each}
        </div>
    </div>
</section>
