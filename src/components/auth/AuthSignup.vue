<template>
    <form>
        <CommonInput
            :label="'Họ và tên'"
            :id="'user-fullName'"
            :type="'text'"
            :valid="validFullName"
            @blur-event="fullNameBlur"/>

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

        <CommonInput
            :label="'Số điện thoại'"
            :id="'user-phone'"
            :type="'phone'"
            :valid="validPhone"
            @blur-event="phoneBlur"/>

        <CommonInput
            :label="'địa chỉ'"
            :id="'user-address'"
            :type="'text'"
            :valid="validAddress"
            @blur-event="addressBlur"/>

        <CommonButton 
            :title="'Đăng ký'"
            :full="true"/>
        <p class="sugget">
            Bạn đã có tài khoản?
            <RouterLink to="/auth">Đăng nhập</RouterLink>
        </p>
    </form>
</template>

<script>
    import CommonInput from "../common/CommonInput.vue";
    import CommonButton from "../common/commonButton.vue";
    import useValidator from "../../hook/hook-validator";

    const blurFullName = useValidator(['required']);
    const blurEmail = useValidator(['required', 'email']);
    const blurPass = useValidator(['required', 'password']);
    const blurPhone = useValidator(['required', 'phone']);
    const blurAddress = useValidator(['required']);

    export default {
        name: 'auth-signup',
        components: {
            CommonInput,
            CommonButton
        },
        data() {
            return {
                validFullName: {},
                validEmail: {},
                validPass: {},
                validPhone: {},
                validAddress: {}
            }
        },
        methods: {
            fullNameBlur(event) {
                this.validFullName = blurFullName(event);
            },
            emailBlur(event) {
                this.validEmail = blurEmail(event);
            },
            passwordBlur(event) {
                this.validPass = blurPass(event);
            },
            phoneBlur(event) {
                this.validPhone = blurPhone(event);
            },
            addressBlur(event) {
                this.validAddress = blurAddress(event);
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

