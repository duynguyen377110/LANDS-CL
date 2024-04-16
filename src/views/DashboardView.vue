<template>
    <CommonHeaderComponent />
    <router-view />
    <CommonFooterComponent />
    <CommonHeaderTabLeft />
</template>

<script>
    import CommonHeaderComponent from "../components/common/CommonHeader.vue";
    import CommonHeaderTabLeft from "../components/common/CommonHeaderTabLeft.vue";
    import CommonFooterComponent from "../components/common/CommonFooter.vue";

    export default {
        name: 'dashboard-view',
        components: {
            CommonHeaderComponent,
            CommonHeaderTabLeft,
            CommonFooterComponent,
        }
    }
</script>