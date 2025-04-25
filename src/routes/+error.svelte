<title>404 Not Found</title>

<style>
    section {
        height: 100vh;
        overflow-y: scroll;
        background-image: url(./images/vfx/background_home.png);
        background-size: cover;
    }

    h1 {
        font-family: segoescript;
        color: white;
        font-size: 7vw;
        line-height: 85%;
        font-weight: normal;
    }

    p {
        font-family: playwrite-moderne;
        font-size: 3vw;
        color: white;
    }

    main {
        display: flex;
        height: 75svh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<section>
    <Header />
    <main id="main-content">
        <h1>404 Not Found!</h1>
        <p>Looks like you got lost!</p>
    </main>
</section>

<script lang="ts">
    import Header from "./components/General/Header.svelte"
</script>
