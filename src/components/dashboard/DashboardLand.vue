<template>
    <div class="dashboard-land-component">
        <div class="container">
            <CommonBreadcrumb />
            <div class="row align-items-stretch">
                <div
                    class="col-12 col-md-4 col-lg-3 mb-5"
                    v-for="(land) in lands" :key="land._id">
                    <CommonLandCard :land="land"/>
                </div>
            </div>
        </div>
        
        <CommonPagination
            v-if="$store.state.pagination.page.land.elementsTab.length > 1"
            @click-event="onClick" />
    </div>
</template>

<script>
    import useHttp from "../../hook/hook-http.js";
    import environment from "../../../environment.js";
    import CommonBreadcrumb from "../common/CommonBreadCrumb.vue";
    import CommonLandCard from "../common/CommonLandCard.vue";
    import CommonPagination from "../common/CommonPagination.vue";

    export default {
        name: 'dashboard-land',
        components: {
            CommonLandCard,
            CommonPagination,
            CommonBreadcrumb
        },
        data() {
            return {
                lands: []
            }
        },
        created() {
            this.getAmount();
        },
        mounted() {
            this.initGetProduct();
        },
        methods: {
            async getAmount() {
                let url = `${environment.url}${environment.product.amount}`;
                const { http } = useHttp(url);

                http({method: 'GET'}, (res) => {
                    const { status, metadata } = res;
                    if(status) {
                        this.$store.commit("setPagiAmountLand", metadata);
                    }
                })
            },
            async initGetProduct() {
                 this.$store.commit("toggleLoader");
                let start = this.$store.state.pagination.page.land.currentPage;
                let limit = this.$store.state.pagination.page.land.quantityElementOnPage;
                 let url = `${environment.url}${environment.product.root}/${start}/${limit}`;
                const { http } = useHttp(url);

                http({method: 'GET'}, (res) => {
                    const { status, metadata } = res;
                    if(status) {
                        let { products } = metadata;
                        this.lands = products;
                    }
                     this.$store.commit("toggleLoader");
                })
            },
            async onClick(event) {
                 this.$store.commit("toggleLoader");
                this.$store.commit("updatePagiCurrentTab", event);

                let start = this.$store.state.pagination.page.land.currentPage;
                let limit = this.$store.state.pagination.page.land.quantityElementOnPage;
                 let url = `${environment.url}${environment.product.root}/${start}/${limit}`;
                const { http } = useHttp(url);

                http({method: 'GET'}, (res) => {
                    const { status, metadata } = res;
                    if(status) {
                        let { products } = metadata;
                        this.lands = products;
                    }
                     this.$store.commit("toggleLoader");
                })
            }
        },
    }
</script>

<style scoped>
    .dashboard-land-component {
        padding: 0rem 0rem 4.5rem 0rem;
        width: 100%;
    }
</style>