<template>
    <div class="dashboard-land-detail-component">
        <div class="container">
            <CommonBreadcrumb />

            <div class="land-detail-thumb">
                <img :src="thumb" alt="land thumb"/>
                <div>
                     <carousel :items-to-show="4.5" :wrap-around="true" :transition="500">
                        <slide class="slide-item" v-for="(thumb, index) in land.thumbs" :key="index">
                            <img
                                @click="onChangeThumb(thumb)"
                                class="land-thumb-item"
                                :src="thumb" alt="thumb" />
                        </slide>
                    </carousel>
                </div>
            </div>

            <div class="land-detail-infor">
                <h3 class="address">
                    <i class="fa-solid fa-location-dot"></i>
                    {{land.address}}
                </h3>
                <h2 class="product-owner">{{ land.productOwner }}</h2>
            </div>

            <div class="land-detail-desc">
                <h2 class="desc-title">
                    <i class="fa-solid fa-tags"></i>
                    Thông tin chi tiết
                </h2>

                <table class="desc-table">
                    <thead>
                        <tr>
                            <th class="th-first">Tiêu đề</th>
                            <th>Nội dung</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Loại hình</td>
                            <td>{{land.categories.title}}</td>
                        </tr>
                        <tr>
                            <td>Liên hệ</td>
                            <td>{{land.contact}}</td>
                        </tr>

                        <tr>
                            <td>Diện tích</td>
                            <td>{{land.landArea}}</td>
                        </tr>

                        <tr>
                            <td>Ngày đăng tin</td>
                            <td>{{new Date(land.createdAt).toLocaleDateString()}}</td>
                        </tr>

                        <tr>
                            <td>Giá</td>
                            <td>Thoả thuận khách</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import useHttp from "../../hook/hook-http.js"
    import environment from "../../../environment.js";
    import CommonBreadcrumb from "../common/CommonBreadCrumb.vue";
    import { Carousel, Slide } from 'vue3-carousel';

    export default {
        name: 'dashboard-land-detail',
        components: {
            Carousel,
            Slide,
            CommonBreadcrumb
        },
        data() {
            return {
                land: {
                    address: '',
                    categories: {
                        title: ''
                    },
                    contact: '',
                    thumbs: [],
                    productOwner: ''
                },
                thumb: 'https://placehold.co/1200x500?text=_',
            }
        },
        mounted() {
            this.getProduct();
        },
        methods: {
            async getProduct() {
                let { id } = this.$route.params;
                let url = `${environment.url}${environment.product.root}/${id}`;
                const { http } = useHttp(url);

                this.$store.commit("toggleLoader");
                http({method: 'GET'}, (res) => {
                    const { status, metadata } = res;
                    if(status) {
                        let { product: land } = metadata;
                        this.land = land;
                        this.thumb = land.thumbs[0];
                    }
                    this.$store.commit("toggleLoader");
                })
            },
            onChangeThumb(event) {
                this.thumb = event;
            }
        }
    }
</script>

<style scoped>
    .dashboard-land-detail-component {
        padding: 0rem 0rem 4.5rem 0rem;
        width: 100%;
    }
    /** THUMB */
    .land-detail-thumb {
        margin-bottom: 1.5rem;
    }
    .land-detail-thumb img {
        height: 50rem;
        width: 100%;
    }
    .slide-item {
        padding: .5rem .5rem .5rem 0rem;
    }
    .land-thumb-item {
        height: 10rem!important;
    }

    /** INFOR */
    .land-detail-infor {
        border-bottom: 1px solid #dddddd;
        margin-bottom: 2.5rem;
        padding-bottom: 2.5rem;
    }
    .address {
        color: var(--text-color);
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
    .product-owner {
        color: var(--first-color);
        font-size: 2rem;
        font-weight: 600;
        letter-spacing: .3px;
    }

    /** DESC */
    .desc-title {
        font-size: 1.5rem;
    }
    .desc-table {
        border-collapse: collapse;
        font-size: 1.4rem;
        width: 100%;
    }
    .th-first {
        width: 20rem;
    }
    .desc-table, td, th {
        border: 1px solid #dddddd;
        padding: 1rem;
    }
</style>