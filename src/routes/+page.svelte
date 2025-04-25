<title>Solo Sopas</title>

<style>
    section {
        height: 100vh;
        overflow-y: scroll;
        background-image: url(./images/vfx/background_home.png);
        background-size: cover;
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
