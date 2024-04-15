<template>
    <div class="common-warning-component">
        <p class="warning-message">{{$store.state.warning.message}}</p>
    </div>
</template>

<script>
    export default {
        name: 'common-warning',
        components: {},
        mounted() {
            setTimeout(() => {
                this.$store.commit("closeWarning");
            }, 2000);
        }
    }
</script>

<style scoped>
    .common-warning-component {
        background-color: var(--warning-color);
        left: 0px;
        padding: 1rem;
        position: fixed;
        top: 0px;
        width: 100%;
    }
    .warning-message {
        color: var(--text-color);
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: .03px;
        margin-bottom: 0px;
        text-align: center;
    }
</style>