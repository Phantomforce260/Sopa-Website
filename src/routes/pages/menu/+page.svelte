<title>Soups - Solo Sopas</title>

<style>
    section {
        height: 100vh;
        overflow-y: scroll;
        background-color: orange;
        background-size: cover;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 5%;
    }
</style>

<section>
    <Header />
    <Hero />    
    <div>
        <Catalog />
        <Cart />
    </div>
    <Footer />
</section>

<script lang="ts">
    import Header from "../../components/General/Header.svelte";
    import Footer from "../../components/General/Footer.svelte";
    import Hero from "../../components/Menu/Hero.svelte";
    import Catalog from "../../components/Menu/Catalog.svelte";
    import Cart from "../../components/Menu/Cart.svelte";
</script>
