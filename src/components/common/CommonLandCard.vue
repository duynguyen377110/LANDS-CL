<template>
    <RouterLink :to="'land/'+land._id" class="common-land-card-component">
        <img
            class="card-img"
            :src="land.thumbs[0]" alt="img" />
        <div class="card-infor">
            <h2 class="title">{{land.productOwner}}</h2>
            <p class="address">{{land.address}}</p>
            <p class="price">
                <span>Gía:</span>
                <span>thoả thuận</span>
            </p>
        </div>
    </RouterLink>
</template>

<script>
    export default {
        name: 'common-land-card',
        props: {
            land: {}
        },
        components: {}
    }
</script>

<style scoped>
    .common-land-card-component {
        background-color: #ffffff;
        border-radius: 5px;
        box-shadow: 0px 0px 5px 5px #eaeaea;
        display: block;
        height: 100%;
    }
    .card-img {
        height: 20rem;
        width: 100%;
    }
    .card-infor {
        color: var(--text-color);
        font-size: 1.5rem;
        padding: 1rem;
    }
    .title {
        color: var(--first-color);
        display: -webkit-box;
        font-size: 1.6rem;
        font-weight: 600;
        letter-spacing: .3px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .address {
        display: -webkit-box;
        font-size: 1.5rem;
        letter-spacing: .3px;
        overflow: hidden;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .price {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>