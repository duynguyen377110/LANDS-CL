<template>
    <form @submit="onSubmitHandler">
        <CommonInput
            :label="'Họ và tên'"
            :id="'user-fullName'"
            :type="'text'"
            :valid="validFullName"
            ref="fullNameRef"
            @blur-event="fullNameBlur"/>

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

        <CommonInput
            :label="'Số điện thoại'"
            :id="'user-phone'"
            :type="'phone'"
            :valid="validPhone"
            ref="phoneRef"
            @blur-event="phoneBlur"/>

        <CommonInput
            :label="'địa chỉ'"
            :id="'user-address'"
            :type="'text'"
            :valid="validAddress"
            ref="addressRef"
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
    import userHttp from "../../hook/hook-http.js";
    import environment from "../../../environment.js";

    let url = `${environment.url}${environment.access.signup}`;
    let { http }= userHttp(url);

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
            },
            onSubmitHandler(event) {
                event.preventDefault();
                let inputFullName = this.$refs.fullNameRef.$el.querySelector("#user-fullName")
                let inputEmail = this.$refs.emailRef.$el.querySelector("#user-email");
                let inputPass = this.$refs.passRef.$el.querySelector("#user-password");
                let inputPhone = this.$refs.phoneRef.$el.querySelector("#user-phone");
                let inputAddress = this.$refs.addressRef.$el.querySelector("#user-address");

                inputFullName.focus();
                inputFullName.blur();

                inputEmail.focus();
                inputEmail.blur();

                inputPass.focus();
                inputPass.blur();

                inputPhone.focus();
                inputPhone.blur();

                inputAddress.focus();
                inputAddress.blur();

                if(
                    (this.validFullName.status && this.validEmail.status) &&
                    (this.validPass.status && this.validPhone.status) && this.validAddress.status) {
                        this.$store.commit("toggleLoader");
                         let payload = {
                            fullName: this.validFullName.value,
                            email: this.validEmail.value,
                            password: this.validPass.value,
                            phone: this.validPhone.value,
                            address: this.validAddress.value
                         }

                        http({method:"POST", payload}, (information) => {
                            let { status, metadata } = information;
                            this.$store.commit("toggleLoader");
                            if(status) {
                                console.log(metadata);
                                this.$router.push("/auth");
                            }
                        })

                }

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

