<style>
	* {
		font-family: segoescript;
	}

	div {
		display: flex;
		/*aspect-ratio: 1 / 1;*/
		padding: 1.2vw;
		height: 30vw;
		width: 30vw;

        max-height: 475px;
        max-width: 450px;

		flex-direction: column;
		align-items: center;
		background-color: #fdef96;
        justify-content: space-between;
	}

	h4 {
		font-size: 2vw;
	}

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
</style>

<div>
	<img src="./images/{image_source}" alt="delicious soup"/>
	<h4>Item #1</h4>
	<p>This is a short description</p>
	<button>Order Now</button>
</div>

<script>
	export let image_source;
</script>
