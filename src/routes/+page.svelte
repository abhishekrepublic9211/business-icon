<script>
    import Header from '$lib/components/Header.svelte';
    import About from '$lib/components/About.svelte';
    import Categories from '$lib/components/Categories.svelte';
    import EvaluationProcess from '$lib/components/EvaluationProcess.svelte';
    import Footer from '$lib/components/Footer.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import Awards from '$lib/components/Awards.svelte';
    import EventInfo from '$lib/components/EventInfo.svelte';
    import Schedule from '$lib/components/Schedule.svelte';
</script>

<Header />
<Banner id="home"/>
<EventInfo />
<About id="about" />
<Categories id="categories" />
<EvaluationProcess />
<Awards />
<Schedule id="schedule" />
<Footer />
