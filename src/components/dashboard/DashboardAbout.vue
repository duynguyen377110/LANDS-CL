<template>
    <div class="dashboard-about-component">
        <div class="about-banner">
            <img src="https://res.cloudinary.com/ditc3z3gj/image/upload/v1711420399/lands/banner-about_yl9kf0.jpg" alt="thumb about"/>
        </div>

        <div class="container">
            <div class="about-desc">
                <h2 class="supper-title">Giới thiệu</h2>
                <p class="about-desc-content">Chào mừng đến với LANDS, nơi tinh hoa của sự sáng tạo và cam kết vững chắc hội tụ để tạo ra những không gian sống và làm việc tuyệt vời nhất. Với hơn một thập kỷ hoạt động trong ngành bất động sản, chúng tôi tự hào là một trong những đơn vị hàng đầu trong việc cung cấp giải pháp bất động sản toàn diện, từ phát triển dự án đến quản lý tài sản.</p>

                <h2 class="about-desc-title">Sư mệnh và tầm nhìn</h2>
                <p class="about-desc-content">
                    Sứ mệnh của chúng tôi không chỉ là xây dựng các công trình, mà còn là tạo ra những không gian sống tinh tế và tiện nghi, nơi mà mọi người có thể tận hưởng cuộc sống và sự nghiệp của mình một cách trọn vẹn nhất. Chúng tôi cam kết mang lại giá trị cao nhất cho cộng đồng thông qua việc phát triển bền vững và cải thiện chất lượng cuộc sống.
                    Tầm nhìn của chúng tôi không chỉ dừng lại ở việc trở thành một doanh nghiệp thành công mà còn là trở thành đối tác đáng tin cậy và tiên phong trong ngành bất động sản. Chúng tôi hướng đến việc tạo ra những dấu ấn độc đáo, mang lại giá trị lâu dài cho cả khách hàng và cộng đồng.
                </p>

                <h2 class="about-desc-title">Chúng tôi là ai?</h2>
                <p class="about-desc-content">
                    Tại LANDS, chúng tôi là một đội ngũ đa dạng và đam mê, được thúc đẩy bởi niềm đam mê chung để đem lại sự khác biệt trong mỗi dự án chúng tôi thực hiện. Với sự tự tin và kiến thức sâu rộng về thị trường bất động sản, chúng tôi luôn đặt mục tiêu cao và không ngừng nỗ lực để đạt được chúng.
                </p>

                <h2 class="about-desc-title">Liên hệ với chúng tôi</h2>
                <p class="about-desc-content">
                    Hãy để LANDS trở thành đối tác tin cậy của bạn trong mọi dự án bất động sản. Để biết thêm thông tin và tư vấn, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại được cung cấp trên trang web. Chúng tôi rất vui được phục vụ bạn và cùng nhau tạo nên những thành công lớn!
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dashboard-about",
        components: {}
    }
</script>

<style scoped>
    .dashboard-about-component {
        width: 100%;
    }
    .about-banner img {
        width: 100%;
    }
    .about-desc {
        background-color: var(--bg-02);
        margin: -5.5rem 0rem 2.5rem 0rem;
        padding: 3.5rem;
        position: relative;
        z-index: 100;
    }
    .supper-title {
        color: var(--first-color);
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
    }
    .about-desc-title {
        color: var(--text-color);
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: .3px;
    }
    .about-desc-content {
        color: var(--text-color);
        font-size: 1.5rem;
        line-height: 2.8rem;
        margin-bottom: 2.5rem;
    }
</style>