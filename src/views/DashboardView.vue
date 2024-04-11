<template>
    <CommonHeaderComponent />
    <router-view />
</template>

<script>
    import CommonHeaderComponent from "../components/common/CommonHeader.vue";

    export default {
        name: 'dashboard-view',
        components: {
            CommonHeaderComponent
        }
    }
</script>