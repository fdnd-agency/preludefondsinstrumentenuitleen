<script>
    import checkIcon from '/src/lib/assets/check-circle.svg';
    import notDisturnIcon from '/src/lib/assets/do_not_disturb_on.svg';
    import alertIcon from '/src/lib/assets/alert-triangle.svg';

    let { data } = $props();
    const instruments = $derived(data.instruments);
</script>