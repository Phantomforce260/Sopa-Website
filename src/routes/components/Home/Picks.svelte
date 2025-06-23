<style>
    section {
        background-color: rgba(0, 0, 0, 0.4);
        padding: 10vw 0 10vw;
    }

    main {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-bottom: 8vw;
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

    span {
        display: block;
        text-align: center;
        margin-top: 8%;
    }

    a {
        color: white;
        background-color: inherit;
        border: solid white 3px;
        padding: 1% 5%;
        font-family: playwrite-moderne;
        font-size: 2.4vw;
        transition: 0.3s ease;
        text-decoration: none;
    }

    a:hover {
        background-color: white;
        color: black;
    }
</style>

<section>
    <main>
        <h1>Homemade, With Love</h1>
    </main>

    <div>
        {#if popularItems.length}
            {#each popularItems as item (item.id)}
                <StickyNote
                    name={getName(item.id)}
                    description={getDescription(item.id)}
                    thumbnail={getThumbnail(item.id)}
                />
            {/each}
        {:else}
            <p>Loading Sticky Notes...</p>
        {/if}
    </div>

    <span><a href="/pages/menu">Order Now</a></span>
</section>

<script>
    import StickyNote from "./StickyNote.svelte";
    import { onMount } from "svelte";

    let allItems = [];
    let popularItems = [];

    function getTopItems(items) {
        const sorted = items.sort((a, b) => b.sold - a.sold);
        return sorted.slice(0, 3);
    }

    function getName(id) {
        const item = allItems.find(item => item.id === id);
        return item ? item.name : null;
    }

    function getDescription(id) {
        const item = allItems.find(item => item.id === id);
        return item ? item.description : null;
    }

    function getThumbnail(id) {
        const item = allItems.find(item => item.id === id);
        return item ? item.image : null;
    }

    onMount(async () => {
        const menu = await fetch('/menu.json');
        const sales = await fetch('/sales.json');

        allItems = await menu.json();
        popularItems = await sales.json();

        popularItems = getTopItems(popularItems);
    });
</script>
