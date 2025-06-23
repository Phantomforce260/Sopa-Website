<title>Soups - Solo Sopas</title>

<style>
    section {
        height: 100vh;
        overflow-y: scroll;
        background-image: url(/images/vfx/background_home.png);
        background-size: cover;
    }

    div {
        background: white;
        overflow: hidden;
        position: relative;
        padding-bottom: 5%;
    }

    img { position: absolute; }

    h3 {
        color: black;
        font-size: 1.6vw;
        font-family: playwrite-moderne;
        font-weight: normal;
        text-align: center;
        position: relative;
        z-index: 10;
    }

    #phone { padding: 5% 0 2.5%; }
    #note { padding: 2.5% 0 5%; }

    span > img {
        position: absolute;
        height: auto;
        opacity: 0.5;
    }

    #blue-circle-1 {
        z-index: 3;
        bottom: 50%;
        left: 80%;
        width: 30vw;
    }

    #blue-circle-2 {
        z-index: 2;
        top: 36%;
        left: 60%;
        width: 50vw;
    }

    #orange-circle-1 {
        z-index: 3;
        top: 45%;
        right: 84%;
        width: 30vw;
    }

    #orange-circle-2 {
        z-index: 2;
        bottom: 36%;
        right: 64%;
        width: 50vw;
    }
</style>

<section>
    <Header />
    <Hero />
    <div>
        <h3 id="phone">Give us a call to place your order: +1 (XXX) XXX-XXXX</h3>
        <h3 id="note">Currently, we only accept pick-ups at 1530 66th Ave, on the rear entrance at Cutler St.</h3>
        <Catalog />
        <span>
            <img id="blue-circle-1" src="./images/vfx/Blue_Circle_1.png" alt="">
            <img id="blue-circle-2" src="./images/vfx/Blue_Circle_2.png" alt="">
            <img id="orange-circle-1" src="./images/vfx/Orange_Circle_1.png" alt="">
            <img id="orange-circle-2" src="./images/vfx/Orange_Circle_2.png" alt="">
        </span>
    </div>
    <Footer />
</section>

<script lang="ts">
    import Header from "../../components/General/Header.svelte";
    import Footer from "../../components/General/Footer.svelte";
    import Hero from "../../components/Menu/Hero.svelte";
    import Catalog from "../../components/Menu/Catalog.svelte";
</script>
