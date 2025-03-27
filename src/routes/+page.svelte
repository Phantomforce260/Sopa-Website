<style>
    section {
		height: 100vh;
		overflow-y: scroll;
    }

    h1 {
    }

    p {
    }
</style>

<section>
	<Hero />
	<Picks />
    <About />
    <Footer />
</section>

<script lang="ts">
	import Hero from "./components/Home/Hero.svelte";
	import Picks from "./components/Home/Picks.svelte";
    import About from "./components/Home/About.svelte"
    import Footer from "./components/General/Footer.svelte"
</script>
