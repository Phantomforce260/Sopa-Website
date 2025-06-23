<style>
    * { font-family: segoescript; }

    div {
        display: flex;
        padding: 1.6vw 1.2vw;
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
        text-align: center;
    }

    img {
        width: 22vw;
        height: auto;
    }
</style>

<div>
    <img src="./images/photos/{thumbnail}" alt="delicious soup"/>
    <h4>{name}</h4>
    <p>{description}</p>
</div>

<script>
    export let name;
    export let description;
    export let thumbnail;
</script>
