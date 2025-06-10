<style>
    section {
        display: flex;
        flex-direction: row;
        background-color: red;
    }

    div {
        width: 44vw;
        padding: 2% 4%;
    }

    h1 {
        font-family: segoescript;
        color: white;
        font-size: 2vw;
    }

    hr {
        margin-bottom: 2%;
    }

    #description, #ingredients {
        font-family: playwrite-moderne;
        color: white;
        font-size: 1vw;
        margin: 2% 0;
    }

</style>

<section>
    <img src="./images/photos/{image_source}" alt="Delicious Soup">
    <div>
        <h1>Soup Name</h1>
        <hr>
        <p id="description">This is a very delicious soup. It is made with the finest ingredients</p>
        <p id="ingredients">Contains: Corn, Carrots, Beef, Potatoes, Vegetable Oil</p>
    </div>
</section>

<script>
    export let image_source;
</script>
