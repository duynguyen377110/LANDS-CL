<template>
    <CommonHeaderComponent />
    <router-view />
    <CommonFooterComponent />
</template>

<script>
    import CommonHeaderComponent from "../components/common/CommonHeader.vue";
    import CommonFooterComponent from "../components/common/CommonFooter.vue";

    export default {
        name: 'dashboard-view',
        components: {
            CommonHeaderComponent,
            CommonFooterComponent
        }
    }
</script>