<template>
    <form @submit="onSubmit">
        <CommonInput
            :label="'E-mail'"
            :id="'user-email'"
            :type="'email'"
            :valid="validEmail"
            ref="emailRef"
            @blur-event="emailBlur"/>

        <CommonInput
            :label="'Mật khẩu'"
            :id="'user-password'"
            :type="'password'"
            :valid="validPass"
            ref="passRef"
            @blur-event="passwordBlur"/>

            <button
                type="submit"
                class="btn-signin btn-common btn btn-primary">Đăng nhập</button>

        <p class="sugget">
            Bạn chưa có tài khoản?
            <RouterLink to="/auth/signup">Đăng ký</RouterLink>
        </p>
    </form>
</template>

<script>
    import CommonInput from "../common/CommonInput.vue";
    import useValidator from "../../hook/hook-validator";

    const blurEmail = useValidator(['required', 'email']);
    const blurPass = useValidator(['required', 'password']);

    export default {
        name: 'auth-signin',
        components: {
            CommonInput
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
            },
            onSubmit(event) {
                event.preventDefault();

                let inputEmail = this.$refs.emailRef.$el.querySelector("#user-email");
                let inputPass = this.$refs.passRef.$el.querySelector("#user-password");

                inputEmail.focus();
                inputEmail.blur();

                inputPass.focus();
                inputPass.blur();

                if(this.validEmail.status && this.validPass.status) {
                    this.$router.push("/");
                }
            }
        }
    }
</script>

<style>
    .btn-signin {
        background-color: var(--first-color);
        font-size: 1.5rem;
        padding: .5rem 0rem;
        width: 100%;
    }
    .sugget {
        font-size: 1.5rem;
        margin-top: 1rem;
        text-align: center;
    }
</style>

