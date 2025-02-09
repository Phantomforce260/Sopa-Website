<style>
    section {
        background-image: url(./images/background_home.png);
		background-repeat: repeat;
		background-size: cover;
    }

    h1 {
        font-family: segoescript;
        color: white;
		font-size: 7vw;
		line-height: 85%;
		font-weight: normal;
    }

    p {
        font-family: playwrite-moderne;
		font-size: 3vw;
        color: white;
    }

	main {
		display: flex;
		border: solid black 1px;
		height: 100svh;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

<section>
	<Header />
    <main id="main-content">
        <h1>404 Not Found!</h1>
        <p>Looks like you got lost!</p>
    </main>
</section>

<script lang="ts">
	import Header from "./components/Header.svelte"
</script>
