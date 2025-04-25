<style>
    * { font-family: segoescript; }

    div {
        display: flex;
        padding: 1.2vw;
        height: 28vw;
        width: 26vw;

        flex-direction: column;
        align-items: center;
        background-color: #fdef96;
        justify-content: space-between;
    }

    h4 { font-size: 2vw; }

    p {
        font-family: playwrite-moderne;
        font-size: 1.2vw;
    }

    button {
        background-color: inherit;
        border: solid black 3px;
        padding: 1% 3%;
        font-family: playwrite-moderne;
        font-size: 1.2vw;
    }

    img {
        width: 22vw;
        height: auto;
    }
</style>

<div>
    <img src="./images/photos/{image_source}" alt="delicious soup"/>
    <h4>Item #1</h4>
    <p>This is a short description</p>
    <button>Order Now</button>
</div>

<script>
    export let image_source;
</script>
