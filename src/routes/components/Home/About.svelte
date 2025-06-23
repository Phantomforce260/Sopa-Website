<style>

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10vh 0;
        position: relative;
        overflow: hidden;
    }

    h1 {
        font-family: segoescript;
        font-weight: normal;
        line-height: 85%;
        color: black;
        font-size: 6vw;
        padding-bottom: 1vw;
    }

    section { background: white; }

    p {
        font-family: playwrite-moderne;
        font-size: 1.5vw;
        color: black;
        margin: 0 0 8vh 0;
    }

    div { height: 32vh; }

    #map {
        position: absolute;
        z-index: 5;
        top: 26%;
        left: 38%;
        width: 30vw;
        height: auto;
    }

    #map-enlarged {
        position: absolute;
        z-index: 4;
        top: 0%;
        left: 20%;
        width: 65vw;
        height: auto;
    }

    #blue-circle-1 {
        position: absolute;
        z-index: 3;
        bottom: 36%;
        left: 80%;
        width: 30vw;
        height: auto;
    }

    #blue-circle-2 {
        position: absolute;
        z-index: 2;
        top: 36%;
        left: 60%;
        width: 50vw;
        height: auto;
    }

    #orange-circle-1 {
        position: absolute;
        z-index: 3;
        top: 36%;
        right: 84%;
        width: 30vw;
        height: auto;
    }

    #orange-circle-2 {
        position: absolute;
        z-index: 2;
        bottom: 36%;
        right: 64%;
        width: 50vw;
        height: auto;
    }

    #closing { margin: 35vh 0 5vh; }
</style>

<section>
    <main>
        <h1>About Us</h1>
        <p>We're a small business located in Northeast Philadelphia.</p>
        <div>
            <img id="map" src="./images/vfx/philly_map.png" alt="">
            <img id="map-enlarged" src="./images/vfx/philly_map_enlarged.png" alt="">
            <img id="blue-circle-1" src="./images/vfx/Blue_Circle_1.png" alt="">
            <img id="blue-circle-2" src="./images/vfx/Blue_Circle_2.png" alt="">
            <img id="orange-circle-1" src="./images/vfx/Orange_Circle_1.png" alt="">
            <img id="orange-circle-2" src="./images/vfx/Orange_Circle_2.png" alt="">
        </div>
        <p id="closing">Our mission is to deliver high quality, homemade soups for our community.</p>
    </main>
</section>
