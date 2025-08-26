<script lang="ts">
    import { onMount } from 'svelte';

    let activeLink = 'home'; // Default active link

    function handleClick(event: MouseEvent, linkName: string) {
        event.preventDefault();
        activeLink = linkName;
        const target = event.target as HTMLElement;
        const targetId = target.getAttribute('href')?.substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    onMount(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'categories', 'schedule'];
            let currentActive = 'home';
            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 10 && rect.bottom >= 10) {
                        currentActive = sectionId;
                        break;
                    }
                }
            }
            activeLink = currentActive;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<header class="bg-white py-4 fixed w-full z-[9999]">
    <div class="container w-[50vw] mx-auto px-4 flex justify-between items-center">
       
        <nav class="flex-grow text-center">
            <a href="#home" class="font-medium font-semibold text-xl" class:text-red-500={activeLink === 'home'} on:click={(e) => handleClick(e, 'home')}>Home</a>
        </nav>
        <nav class="flex-grow text-center">
            <a href="#about" class="font-medium font-semibold text-lg" class:text-red-500={activeLink === 'about'} on:click={(e) => handleClick(e, 'about')}>About</a>
        </nav>
        <nav class="flex-grow text-center">
            <a href="#categories" class="font-medium font-semibold text-lg" class:text-red-500={activeLink === 'categories'} on:click={(e) => handleClick(e, 'categories')}>Categories</a>
        </nav>
        <nav class="flex-grow text-center">
            <a href="#schedule" class="font-medium font-semibold text-lg" class:text-red-500={activeLink === 'schedule'} on:click={(e) => handleClick(e, 'schedule')}>Schedule</a>
        </nav>

       
        <a href="/form" class="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 flex items-center">
            Register <span class="ml-2">↗</span>
        </a>
    </div>
</header>
