<script>
    let { src, width, height, alt } = $props();
    src = "https://fdnd-agency.directus.app/assets/" + src;
</script>

<picture>
    <source
        srcset={`${src}?width=${width}&height=${height}&format=avif&quality=70`}
        type="image/avif"
    />
    <source
        srcset={`${src}?width=${width}&height=${height}&format=webp&quality=70`}
        type="image/webp"
    />
    <img src={`${src}?width=${width}&height=${height}&quality=60`} {alt} />
</picture>

<!-- 
This is how you use the picture partial
    import Picture from "$lib/components/Picture.svelte";

    <Picture
        src={id of picture in the database}
        width="250"
        height="250"
        alt={Alt text}
    />

-->
