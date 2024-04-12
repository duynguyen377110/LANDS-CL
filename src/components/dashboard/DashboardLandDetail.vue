<template>
    <div class="dashboard-land-detail-component">
        <div class="container">
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
        </div>
    </div>
</template>

<script>
    import environment from "../../../environment.js";
    import { Carousel, Slide } from 'vue3-carousel';

    export default {
        name: 'dashboard-land-detail',
        components: {
            Carousel, Slide
        },
        data() {
            return {
                land: {
                    thumbs: []
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
                
                let res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                if(!res.ok) throw new Error("Call api success");

                let { status, metadata } = await res.json();
                if(status) {
                    let { product: land } = metadata;
                   this.land = land;
                   this.thumb = land.thumbs[0];
                }
            },
            onChangeThumb(event) {
                this.thumb = event;
            }
        }
    }
</script>

<style scoped>
    .dashboard-land-detail-component {
        padding: 4.5rem 0rem;
        width: 100%;
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
</style>