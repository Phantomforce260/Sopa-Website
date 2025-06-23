<style>
    section {
        display: flex;
        flex-direction: row;
        background-color: #f28f0e;
        margin: 5% 8%;
        position: relative;
        z-index: 10;
    }

    div {
        width: 20vw;
        padding: 2% 4%;
    }

    hr { margin-bottom: 2%; }

    h1 {
        font-family: segoescript;
        color: white;
        font-size: 2vw;
    }

    h2 {
        color: white;
        padding: 2vw 2vh;
        font-family: segoescript;
        font-size: 2vw;
    }

    #thumbnail {
        max-width: 300px;
        max-height: 250px;
        overflow: hidden;
    }

    #price {
        position: absolute;
        background-color: #0ec4f2;
        border-radius: 50%;
        bottom: 65%;
        right: 88%;
    }

    #description, #ingredients {
        font-family: playwrite-moderne;
        color: white;
        font-size: 1vw;
        margin: 2% 0;
    }

</style>

<section>
    <span id="price"><h2>${price}</h2></span>
    <span id="thumbnail"><img src="./images/photos/{image}" alt="Delicious Soup"></span>
    <div>
        <h1>{id} : {name}</h1>
        <hr>
        <p id="description">{description}</p>
        <p id="ingredients"><strong>Contains: </strong>{ingredients.join(', ')}</p>
        {#if !inStock}
            <p style="color: red;">Out of Stock</p>
        {/if}
    </div>
</section>

<script>
    export let id;
    export let image;
    export let name;
    export let description;
    export let ingredients = [];
    export let inStock;
    export let price;
</script>
