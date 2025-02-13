<style>
	* {
		font-family: segoescript;
	}

	div {
		display: flex;
		aspect-ratio: 1 / 1;
		padding: 0.5vw;
		height: 100%;

		flex-direction: column;
		align-items: center;
		background-color: #fdef96;
	}

	h4 {
		font-size: 2vw;
	}

	p {
		font-family: playwrite-moderne;
	}

	button {
		background-color: inherit;
		border: solid black 3px;
		padding: 1%;
		font-family: playwrite-moderne;
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
