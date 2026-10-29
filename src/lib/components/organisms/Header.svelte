<script>
    import logo from '$lib/assets/favicon.svg';
</script>

<nav>
    <a href="/"><img src={logo} alt="Logo cool"></a>

    <a href="/home">Home</a>
    <a href="/">Instruments</a>
</nav>

<style>
    nav{
        display: flex;
        justify-content: start;
        align-items: center;
        gap: var(--space-md);
        font-family: var(--font-primary);
        font-size: var(--font-size-body-md);
        font-weight: var(--font-weight-bold);
        background-color: var(--primary-lightest);
        max-height: 20vh;
        width: 100vw;
        margin-bottom: var(--space-md);
        filter:drop-shadow(0 3px 1px var(--neutral-light-grey));

        a{
            text-decoration: none;
            color: var(--primary-darkest);
        }
        a:hover, a:focus{
            text-decoration: underline;
        }

        img{
            max-height: var(--space-3xl);
            padding-right: var(--space-2xl);
            padding-left: var(--space-xs);
            padding-top: var(--space-xs);
        }
    }
</style> 