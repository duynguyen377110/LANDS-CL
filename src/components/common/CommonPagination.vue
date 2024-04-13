<template>
    <div class="container">
        <div class="common-pagination-component">
            <ul class="pagination">
                <li class="page-item">
                    <span class="page-link">
                        <span aria-hidden="true">&laquo;</span>
                    </span>
                </li>

                <li v-for="(tab, index) in $store.state.pagination.page.land.elementsTab"
                    :key="index"
                    @click="onClick(tab)"
                    class="page-item">
                    <span class="page-link">{{tab + 1}}</span>
                </li>

                <li class="page-item">
                    <span class="page-link">
                        <span aria-hidden="true">&raquo;</span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'common-pagination',
        props: { },
        components: {},
        methods: {
            onClick(event) {
                this.$emit("click-event", event);
            }
        }
    }
</script>

<style scoped>
    .common-pagination-component {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .page-item {
        font-size: 1.5rem;
    }
</style>