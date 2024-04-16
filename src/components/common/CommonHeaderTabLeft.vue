<template>
    <div
        :class="{'active': $store.state.tableft.status}"
        class="common-header-tab-left-component">
        <div
            @click="closeTabLeft"
            class="header-tab-left-mask"></div>
        <div class="header-tab-left-wrapper">
            <ul class="header-tab-left-list">
                <li>
                    <RouterLink
                        @click="closeTabLeft"
                        active-class="active"
                        to="/land" exact>Bất động sản</RouterLink>
                </li>

                <li>
                    <RouterLink
                        @click="closeTabLeft"
                        active-class="active" to="/about" exact>Giới thiệu</RouterLink>
                </li>

                <li v-if="!$store.state.auth.accessToken">
                    <RouterLink
                        @click="closeTabLeft"
                        to="/auth">
                        <i class="fa-solid fa-right-to-bracket"></i> Đăng nhập
                    </RouterLink>
                </li>

                <li v-if="!$store.state.auth.accessToken">
                    <RouterLink
                        @click="closeTabLeft"
                        to="/auth/signup">
                            <i class="fa-solid fa-pen-to-square"></i> Đăng ký
                    </RouterLink>
                </li>

                <li v-if="$store.state.auth.accessToken">
                    <button
                        @click="onSignout"
                        class="btn-signout"
                        type="button">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            Đăng xuất
                    </button>
                </li>
            </ul>
            <h2
                v-if="$store.state.auth.email"
                class="header-tab-left-user">
                <span><i class="fa-solid fa-user"></i></span>
                {{$store.state.auth.email}}</h2>
        </div>
    </div>
</template>

<script>
    import userHttp from "../../hook/hook-http.js";
    import environment from "../../../environment.js";

    export default {
        name: 'common-header-tab-left',
        components: { },
        methods: {
            closeTabLeft() {
                this.$store.commit("toggleTabLeft");
            },
            async onSignout() {
                this.$store.commit("toggleLoader");
                this.$store.commit("toggleTabLeft");
                let url = `${environment.url}${environment.access.signout}`;

                let { http } = userHttp(url);
                http({method: 'POST', payload: {email: this.$store.state.auth.email}}, (information) => {
                    let { status } = information;

                    if(status) {
                        this.$store.commit("authSignout");
                    }
                    this.$store.commit("toggleLoader");
                })
            },
        }
    }
</script>

<style scoped>
    .common-header-tab-left-component {
        left: -100%;
        height: 100%;
        position: fixed;
        top: 0px;
        transition: all .5s ease;
        width: 100%;
        z-index: 200;
    }
    .common-header-tab-left-component.active {
        left: 0%;
    }

    .header-tab-left-mask {
        background-color: #00000005;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: -1;
    }
    .header-tab-left-wrapper {
        background-color: white;
        box-shadow: 0px 0px 3px 0px #8181814a;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        position: absolute;
        width: 250px;
        z-index: 1;
    }
    .header-tab-left-list {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }
    .header-tab-left-list li a {
        background-color: #f1f1f1;
        border-bottom: 1px solid #ffffff;
        color: var(--first-color);
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        padding: 1rem 1.5rem;
    }
    .header-tab-left-list li a.active {
        background-color: var(--first-color);
        color: #ffffff!important;
    }
    .header-tab-left-list li a i {
        margin-right: 5px;
    }
    .header-tab-left-list li button {
        border: unset;
        color: var(--first-color);
        font-size: 1.5rem;
        outline: unset;
        padding: 1rem 1.5rem;
        text-align: left;
        width: 100%;
    }
    .header-tab-left-user {
        background-color: #efefef;
        color: var(--first-color);
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.3rem;
        margin-bottom: 0px;
        padding: 2rem 1.5rem;
    }

    .header-tab-left-user span {
        background-color: #81b1e5;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.5rem;
        width: 2.5rem;
    }
</style>