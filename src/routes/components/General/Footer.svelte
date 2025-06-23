<style>
    section {
        background-color: black;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        padding: 60px 6vw;
    }

    h1 {
        font-family: segoescript;
        font-weight: normal;
        line-height: 85%;
        color: white;
        font-size: 3vw;
        padding: 4vh 0;
    }

    h2 {
        font-family: playwrite-moderne;
        color: white;
        font-size: 1.2vw;
    }

    p {
        color: white;
        font-family: playwrite-moderne;
        font-size: 1.2vw;
    }

    .contact span {
        position: relative;
        top: -10%;
    }

    .review span {
        position: relative;
        top: 0%;
    }

    .socials a {
        background-color: #292929;
        padding: 1vw 1vw 0.25vw 1vw;
        border-radius: 8px;
        transition: all ease 0.3s;
    }

    .socials a:hover {
        background-color: #606060;
    }

    .instagram {
        font-size: 4vw;
        color: white;
    }

    .review a {
        color: white;
        font-family: playwrite-moderne;
        font-size: 1.2vw;
    }
</style>

<section>
    <div class="socials">
        <h1>Follow Us!</h1>
        <a class="instagram" href="https://www.instagram.com">
            <i class="bx bxl-instagram"></i>
        </a>
    </div>

    <div class="contact">
        <h1>Call Us!</h1>
        <span>
            <p>+1 (XXX) XXX-XXXX</p>
            <p>solosopas@gmail.com</p>
        </span>
    </div>

    <div class="review">
        <h1>Leave a Review!</h1>
        <span>
            <a>Google Doc Review Form (Coming Soon)</a>
        </span>
    </div>
</section>
