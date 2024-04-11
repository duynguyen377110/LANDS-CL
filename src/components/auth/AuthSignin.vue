<template>
    <form>
        <CommonInput
            :label="'E-mail'"
            :id="'user-email'"
            :type="'email'"
            :valid="validEmail"
            @blur-event="emailBlur"/>

        <CommonInput
            :label="'Mật khẩu'"
            :id="'user-password'"
            :type="'password'"
            :valid="validPass"
            @blur-event="passwordBlur"/>

        <CommonButton 
            :title="'Đăng nhập'"
            :full="true"/>
        <p class="sugget">
            Bạn chưa có tài khoản?
            <RouterLink to="/auth/signup">Đăng ký</RouterLink>
        </p>
    </form>
</template>

<script>
    import CommonInput from "../common/CommonInput.vue";
    import CommonButton from "../common/commonButton.vue";
    import useValidator from "../../hook/hook-validator";

    const blurEmail = useValidator(['required', 'email']);
    const blurPass = useValidator(['required', 'password']);

    export default {
        name: 'auth-signin',
        components: {
            CommonInput,
            CommonButton
        },
        data() {
            return {
                validEmail: {},
                validPass: {},
            }
        },
        methods: {
            emailBlur(event) {
                this.validEmail = blurEmail(event);
            },
            passwordBlur(event) {
                this.validPass = blurPass(event);
            }
        }
    }
</script>

<style>
    .sugget {
        font-size: 1.5rem;
        margin-top: 1rem;
        text-align: center;
    }
</style>

