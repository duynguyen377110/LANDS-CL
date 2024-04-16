<template>
    <footer class="footer-component">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4 mb-5">
                    <h2 class="footer-brand">
                        <span>Lands</span>
                        <span class="footer-brand-sub">Better home - Better life</span>
                    </h2>
                    <p class="footer-desc">Kết nối với chúng tôi để nhận được ưu đãi và thông tin mới nhất</p>
                </div>

                <div class="col-12 col-md-4 mb-5">
                    <h2 class="footer-title">Giới thiệu</h2>
                    <ul class="footer-list">
                        <li>
                            <RouterLink to="/">Giới thiệu</RouterLink>
                        </li>
                         <li>
                            <RouterLink to="/">Tầm nhìn - sứ mệnh</RouterLink>
                        </li>
                         <li>
                            <RouterLink to="/">Giá trị cốt lỗi</RouterLink>
                        </li>
                         <li>
                            <RouterLink to="/">Hình thành và phát triển</RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="col-12 col-md-4 mb-5">
                    <h2 class="footer-title">Dự án</h2>
                    <ul class="footer-list">
                        <li>
                            <RouterLink to="/">Bất động sản đô thị</RouterLink>
                        </li>
                         <li>
                            <RouterLink to="/">Bất động sản du lịch</RouterLink>
                        </li>
                         <li>
                            <RouterLink to="/">Bất động sản công nghiệp</RouterLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'comm-footer',
        components: {}
    }
</script>

<style>
    .footer-component {
        background-color: #303030;
        border-top: 5px solid #e3e3e3;
        padding: 4.5rem 0rem;
    }
    .footer-brand {
        color: #ffffff;
        display: flex;
        flex-direction: column;
        font-size: 2.5rem;
        font-weight: 600;
        letter-spacing: .3px;
        margin-bottom: 1.5rem;
    }
    .footer-brand-sub {
        font-size: 1.5rem;
    }
    .footer-desc {
        color: #ffffff;
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: .3px;
    }

    .footer-title {
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: .3px;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
    }

    .footer-list {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
        padding-left: 0.5rem;
    }

    .footer-list li:not(:last-child) {
        margin-bottom: 1rem;
    }

    .footer-list li a {
        color: #ffffff!important;
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: .3px;
    }
</style>