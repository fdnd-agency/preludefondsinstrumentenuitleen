<script>
    import logo from '$lib/assets/favicon.svg';
</script>

<nav>
    <a href="/home"><img src={logo} alt="Logo cool"></a>

    <a href="/home">Home</a>
    <a href="/">Instruments</a>
</nav>

<style>
    nav{
        display: flex;
        justify-content: start;
        align-items: center;
        gap: var(--space-md);
        background-color: var(--primary-lightest);
        max-height: 20vh;
        margin-bottom: var(--space-md);

        img{
            max-height: 4em;
        }
    }
</style> 