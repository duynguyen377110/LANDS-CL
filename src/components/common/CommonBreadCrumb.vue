<template>
    <div class="common-breadcrumb-component">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/">
                        <i class="fa-solid fa-house"></i>
                        Trang chủ
                    </RouterLink>
                </li>
                <li
                    v-for="(bread, index) in breads"
                    :key="bread"
                    class="breadcrumb-item">
                        <RouterLink
                            v-if="index !== (breads.length - 1)"
                            :to="'/'+bread.path">{{bread.slug}}</RouterLink>

                        <span v-if="index === (breads.length - 1)">{{bread.slug}}</span>
                </li>
            </ol>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'common-breadcrumb',
        components: {},
        data() {
            return {
                breads: []
            }
        },
        mounted() {
            let breads = this.$route.path.split("/").filter((path) => path);
            breads = breads.map((path) => {
                if(path ===  'land') {
                    return {
                        path: 'land',
                        slug: "Bất động sản"
                    }
                }

                if(path ===  'app') {
                    return {
                        path: 'app',
                        slug: "Nền tảng"
                    }
                }

                if(this.$route.params.id) {
                    return {
                        path: '',
                        slug: "Chi tiết"
                    };
                }
                
                return {
                    path: '/',
                    slug: 'Trang chủ'
                };
            })
            this.breads = breads;
        }
    }
</script>

<style scoped>
    .common-breadcrumb-component {
        width: 100%;
    }
    .breadcrumb {
        background-color: transparent!important;
        padding: 1.5rem 0rem!important;
    }
    .breadcrumb li, .breadcrumb a, .breadcrumb span {
        color: var(--text-color)!important;
        font-size: 1.5rem;
    }
    .breadcrumb a {
        color: var(--first-color)!important;
    }
</style>