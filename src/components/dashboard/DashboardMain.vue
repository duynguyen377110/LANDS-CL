<template>
    <div id="dashboard-carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#dashboard-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#dashboard-carousel" data-slide-to="1"></li>
            <li data-target="#dashboard-carousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../../assets/images/slide3.jpg" class="d-block w-100" alt="...">
            </div>

            <div class="carousel-item">
                <img src="../../assets/images/slide1.jpg" class="d-block w-100" alt="...">
            </div>

            <div class="carousel-item">
                <img src="../../assets/images/slide2.jpg" class="d-block w-100" alt="...">
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-target="#dashboard-carousel" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-target="#dashboard-carousel" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
    </div>

    <div class="section-lands-product">
        <div class="container">
            <div class="row align-items-stretch">
                <div
                    class="col-12 col-md-4 col-lg-3 mb-5"
                    v-for="(land) in lands" :key="land._id">
                    <CommonLandCard :land="land"/>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import CommonLandCard from "../common/CommonLandCard.vue";
    import useHttp from "../../hook/hook-http.js";
    import environment from "../../../environment.js";

    let url = `${environment.url}${environment.product.all}`;
    const { http } = useHttp(url);

    export default {
        name: "dashboard-main",
        components: {
            CommonLandCard
        },
        data() {
            return {
                lands: []
            }
        },
        mounted() {
            this.getProduct();
        },
        methods: {
            async getProduct() {
                this.$store.commit("toggleLoader");
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
    .section-lands-product {
        background-color: var(--bg-02);
        padding: 4.5rem 5rem;
    }

    @media screen and (max-width: 768px) {
        .carousel-item img {
            height: 30rem;
        }
        .section-lands-product {
            padding: 4.5rem 0rem;
        }
    }
</style>