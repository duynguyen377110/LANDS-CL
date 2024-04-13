<template>
    <div class="common-loader-component">
        <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'common-loader',
        components: {}
    }
</script>

<style>
    .common-loader-component {
        background-color: var(--bg-opacity);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        left: 0px;
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 100;
    }
    .spinner-border {
        border-width: .7rem!important;
        color: var(--first-color)!important;
        height: 10rem!important;
        width: 10rem!important;
    }
</style>