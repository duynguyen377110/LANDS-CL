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
</template>

<script>
    export default {
        name: "dashboard-main",
        components: {}
    }
</script>

<style scoped></style>