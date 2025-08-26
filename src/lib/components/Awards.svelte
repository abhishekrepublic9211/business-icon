<script>
    const sunburstIconPath = "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z";
    const starIconPath = "M12 2.69l2.47 5.01 5.53.8-3.99 3.89.94 5.51L12 18.8l-4.95 2.61.94-5.51-3.99-3.89 5.53-.8L12 2.69z";

    const individualAwards = [
        {
            id: 1,
            title: "Business Leader of the Year",
            description: "Celebrating visionary leaders who have redefined organizational success and inspired industries.",
            iconPath: sunburstIconPath,
            iconColor: "text-yellow-500"
        },
        {
            id: 2,
            title: "Young Entrepreneur of the Year",
            description: "Recognizing dynamic individuals under 40 who are driving innovation and change.",
            iconPath: starIconPath,
            iconColor: "text-yellow-500"
        },
        {
            id: 3,
            title: "Woman Business Icon",
            description: "Honoring women leaders who have broken barriers and set new benchmarks in business excellence.",
            iconPath: starIconPath,
            iconColor: "text-yellow-500"
        },
        {
            id: 4,
            title: "Innovator of the Year",
            description: "For individuals who have introduced disruptive ideas, solutions, or technologies with significant impact.",
            iconPath: starIconPath,
            iconColor: "text-yellow-500"
        }
    ];

    const startupAwards = [
        {
            id: 5,
            title: "Startup of the Year",
            description: "Celebrating visionary leaders who have redefined organizational success and inspired industries.",
            iconPath: starIconPath,
            iconColor: "text-pink-500"
        },
        {
            id: 6,
            title: "Emerging Startup",
            description: "Celebrating visionary leaders who have redefined organizational success and inspired industries.",
            iconPath: sunburstIconPath,
            iconColor: "text-pink-500"
        },
        {
            id: 7,
            title: "Tech Startup Excellence",
            description: "Celebrating visionary leaders who have redefined organizational success and inspired industries.",
            iconPath: sunburstIconPath,
            iconColor: "text-pink-500"
        },
        {
            id: 8,
            title: "Social Impact Startup",
            description: "Celebrating visionary leaders who have redefined organizational success and inspired industries.",
            iconPath: starIconPath,
            iconColor: "text-pink-500"
        }
    ];
</script>

<section class="bg-yellow-50 py-16 px-4 awards-section">
    <div class="container mx-auto">
        <h2 class="text-[32px] font-extrabold text-center mb-12">AWARDS</h2>
        <h3 class="text-2xl font-bold text-center mb-8">FOR INDIVIDUALS</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {#each individualAwards as award}
                <div class="mx-auto flex flex-col gap-3 items-center text-center transform hover:scale-105 transition duration-300">
                    <div class="relative w-55 h-40 flex items-center justify-center rounded-lg" style="background-color: #FFD700;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-16 h-16 text-white {award.iconColor}">
                            <path stroke-linecap="round" stroke-linejoin="round" d="{award.iconPath}" />
                        </svg>
                        <span class="absolute text-white text-2xl font-bold">1</span>
                    </div>
                    <h3 class=" w-55 text-[24px] text-xl font-semibold text-gray-800">{award.title}</h3>
                    <p class="w-60">{award.description}</p>
                </div>
            {/each}
        </div>

        <h3 class="text-2xl font-bold text-gray-800 text-center mb-8">FOR STARTUPS</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {#each startupAwards as award}
                <div class="mx-auto flex flex-col gap-3 items-center text-center transform hover:scale-105 transition duration-300">
                    <div class="relative w-55 h-40 flex items-center justify-center rounded-lg" style="background-color: #FFD700;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-16 h-16 text-white {award.iconColor}">
                            <path stroke-linecap="round" stroke-linejoin="round" d="{award.iconPath}" />
                        </svg>
                        <span class="absolute text-white text-2xl font-bold">1</span>
                    </div>
                    <h3 class=" w-55 text-[24px] text-xl font-semibold text-gray-800">{award.title}</h3>
                    <p class="w-60">{award.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>
