<style>
    section {
        background-color: rgba(0, 0, 0, 0.4);
        padding: 10vw 0 10vw;
    }

    main {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 100px 0px;
    }

    h1 {
        font-family: segoescript;
        font-weight: normal;
        line-height: 85%;
        color: white;
        font-size: 6vw;
    }

    div {
        display: flex;
        max-width: 100svw;
        align-items: center;
        justify-content: space-around;
    }
</style>

<section>
    <main>
        <h1>Homemade, With Love</h1>
    </main>

    <div>
        <StickyNote image_source="soup_1.png"/>
        <StickyNote image_source="soup_2.png"/>
        <StickyNote image_source="soup_3.png"/>
    </div>
</section>

<script>
    import StickyNote from "./StickyNote.svelte";
</script>
