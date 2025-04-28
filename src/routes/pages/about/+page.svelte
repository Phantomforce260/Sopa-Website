<title>About Us - Solo Sopas</title>

<style>
    section {
        overflow-y: scroll;
        background-color: darkgoldenrod;
        background-size: cover;
    }

    main {
        display: flex;
        height: 70vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-family: segoescript;
        color: white;
        font-size: 8vw;
    }
</style>

<section>
    <Header />
        <main>
            <h1>About Us</h1>
            <p>We're a small business in Philadelphia.</p>
        </main>
    <Footer />
</section>

<script lang="ts">
    import Header from "../../components/General/Header.svelte";
    import Footer from "../../components/General/Footer.svelte"
</script>