<style>
    nav{
        display: flex;
        width: 100%;
        background: rgba(0, 0, 0, 0.4);
    }

    a {
        font-family: playwrite-moderne;
        text-decoration: none;
        color: white;
        transition: all ease 0.3s;
    }

    ul {
        display: flex;
        align-items: center;
        height: 100%;
        list-style-type: none;
        font-size: 2.5vw;
    }

    li { margin-inline: 1.25rem; }

    img {
        margin-block: 4rem;
        margin-inline: 1rem;
    }

    li a:hover {
        color: #FFEB3B
    }

    #logo-link { flex-grow: 1; }
</style>

<nav>
    <a id="logo-link" href="/"><img src="/images/vfx/Logo.png" alt="Solo Sopas logo"></a>
    <div class="nav-links">
        <ul>
            <li><a href="/pages/about">About Us</a></li>
            <li><a href="/pages/menu">Menu</a></li>
            <li><a href="/pages/opinions">Opinions</a></li>
        </ul>
    </div>
</nav>
