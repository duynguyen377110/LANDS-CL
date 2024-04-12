<template>
     <button
        :type="'submit'"
        :class="{'full': full}"
        class="btn-common btn btn-primary">{{title}}</button>
</template>

<script>

    export default {
        name: 'common-button',
        props: {
            title: String,
            full: Boolean
        },
        components: { }
    }
</script>

<style>
    .btn-common {
        background-color: var(--first-color);
        font-size: 1.5rem;
        padding: .5rem 0rem;
    }
    .full {
        width: 100%;
    }
</style>