<style>
    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>

<section>
    {#if menu.length}
        {#each menu as item (item.id)}
            <MenuItem
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                ingredients={item.ingredients}
                inStock={item.inStock}
                price={item.price}
            />
        {/each}
    {:else}
        <p>Loading menu...</p>
    {/if}
</section>

<script>
    import MenuItem from "./MenuItem.svelte";
    import { onMount } from "svelte";
    
    let menu = [];
    onMount(async () => {
        const res = await fetch('/menu.json');
        menu = await res.json();
    });
</script>
