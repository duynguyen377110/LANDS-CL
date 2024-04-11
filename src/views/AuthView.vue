<template>
    <div class="auth-view-container">
        <div class="auth-form-wrapper">
            <h2 class="auth-title">
                <RouterLink class="direct-home" to="/"><i class="fa-solid fa-house"></i></RouterLink>
                {{title}}
            </h2>
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'auth-component',
        component: { },
        data() {
            return {
                title: ''
            }
        },
        mounted() {
            this.title = window.location.hash.includes("signup")? "Đăng ký tài khoản" : "Đăng nhập"
        },
        updated() {
             this.title = window.location.hash.includes("signup")? "Đăng ký tài khoản" : "Đăng nhập"
        },
    }
</script>

<style scoped>
    .auth-view-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }
    .auth-form-wrapper {
        background-color: var(--bg-01);
        border-radius: 5px;
        padding: 2.5rem;
        width: 60%;
    }
    .auth-title {
        color: var(--first-color);
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        position: relative;
        text-align: center;
        text-transform: uppercase;
    }
    .direct-home {
        font-size: 1.5rem;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
    }
</style>
