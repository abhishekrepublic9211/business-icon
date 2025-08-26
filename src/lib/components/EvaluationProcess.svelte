<script lang="ts">
    const evaluationSteps = [
        {
            number: 1,
            title: "Nomination & Application Review",
            content: [
                "Individuals, businesses, and startups can nominate themselves or be nominated by others.",
                "All applications are screened to verify completeness, and authenticity of information provided."
            ]
        },
        {
            number: 2,
            title: "Shortlisting",
            content: [
                "An expert panel reviews all eligible nominations.",
                "Entries are assessed against defined parameters such as innovation, impact, growth, leadership, resilience, and contribution to industry and society.",
                "Shortlisted candidates are moved forward to the jury round."
            ]
        },
        {
            number: 3,
            title: "Evaluation",
            content: [
                "A distinguished jury comprising industry leaders, business experts, and domain specialists conducts a detailed evaluation.",
                "The jury applies a weighted scoring system to ensure a balanced and objective assessment across all categories."
            ]
        },
        {
            number: 4,
            title: "Final Selection",
            content: [
                "Based on cumulative scores and jury deliberation, the winners are finalized.",
                "Only the most deserving achievers who demonstrate excellence, innovation, and impact are conferred with the Republic Business Icon Award."
            ]
        }
    ];
</script>

<section class="py-16 px-4 evaluation-process-section">
    <div class="container mx-auto">
        <h2 class="text-4xl font-extrabold text-black-800 text-center mb-12 font-[32px]">EVALUATION PROCESS</h2>
        <p class="text-lg text-left mb-8">
        At the Republic Business Icon Award, we believe that recognition must be earned with merit, credibility, and fairness. Every nomination goes through a rigorous multi-stage evaluation process, designed to ensure transparency and integrity at every step
        </p>

        <div class="relative mx-auto">
            <div class="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block"></div>
            {#each evaluationSteps as item, index}
                <div class="mb-8 flex items-start relative">
                    <div class="flex-shrink-0 z-10">
                        <div class="number-circle">{item.number}</div>
                    </div>
                    <div class="ml-6 flex-grow bg-white p-6 rounded-lg shadow-md">
                        <h3 class="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                        <ul class="list-none space-y-2">
                            {#each item.content as point}
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-2 mt-1">•</span>
                                    <p class="text-black text-base leading-relaxed">{point}</p>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>

        <p class="text-left text-lg italic mt-8 mx-auto leading-relaxed">
            This meticulous process ensures that every winner truly represents the spirit of being a game changer. A leader shaping a better tomorrow.
        </p>
    </div>
</section>

<style>

    h2 {
        font-size: 32px; /* Specific font size */
        color: #000000; /* Black color */
        font-weight: 800; /* Extra bold */
        margin-bottom: 2rem; /* Adjust margin as needed */
    }

    .container p:first-of-type {
        font-size: 18px;
        /* color: #374151; */
        line-height: 1.6;
    }

    .number-circle {
        background-color: #FD393D; 
        color: white;
        border-radius: 9999px; /* Full rounded */
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.5rem;
        flex-shrink: 0;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 2px solid #ffffff; /* White border */
    }

    .relative > div:not(:last-child) {
        margin-bottom: 2rem; /* Space between items */
    }

    .ml-6 {
        margin-left: 1.5rem; /* Adjust spacing from circle to content */
    }

    .bg-white {
        background-color: #ffffff;
    }

    .p-6 {
        padding: 1.5rem;
    }

    .rounded-lg {
        border-radius: 0.5rem;
    }

    .shadow-md {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    h3 {
        font-size: 1.25rem; /* Text-xl */
        font-weight: 700; /* Font-bold */
        /* color: #1f2937; */
        margin-bottom: 0.5rem;
    }

    ul.list-none {
        list-style: none;
        padding: 0;
    }

    ul.list-none li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 0.5rem; /* Space between list items */
    }

    ul.list-none li:last-child {
        margin-bottom: 0;
    }

    .text-red-500 {
        color: #ef4444; /* Red bullet points */
        margin-right: 0.5rem;
        font-size: 1rem; /* Adjust bullet size */
        line-height: 1.5rem; /* Align with text */
    }

    .container p:last-of-type {
        font-size: 18px;
        font-style: italic;
        line-height: 1.6;
    }

    /* Vertical line */
    .absolute.left-6 {
        left: 23px; /* Adjust to center with number circle */
        background-color: #FD393D; 
    }
</style>
