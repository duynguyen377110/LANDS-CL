<template>
    <div class="common-header-component">
        <div class="container-fluid">
            <div class="row">
                <div class="col-5 col-md-3 d-flex align-items-center">
                    <h1 class="mb-0">
                        <RouterLink class="header-brand" to="/">Lands</RouterLink>
                    </h1>
                </div>
                <div class="col-7 col-md-9 d-flex align-items-center justify-content-between">
                    <ul class="header-list list-unstyled d-none d-md-flex align-items-center p-0 mb-0">
                        <li>
                            <RouterLink to="/land">Bất động sản</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about">Giới thiệu</RouterLink>
                        </li>
                    </ul>

                     <ul class="header-list list-unstyled d-none d-md-flex align-items-center p-0 mb-0">
                        <ul
                            class="header-list list-unstyled d-flex align-items-center p-0 mb-0"
                            v-if="$store.state.auth.email === ''">
                            <li>
                                <RouterLink to="/auth">
                                    <i class="fa-solid fa-right-to-bracket"></i>
                                    Đăng nhập
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/auth/signup">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                    Đăng ký
                                </RouterLink>
                            </li>
                        </ul>

                        <li v-else>
                            <h2
                                v-if="$store.state.auth.email"
                                class="header-auth-email">
                                {{$store.state.auth?.email}}
                            </h2>

                            <button
                                @click="onSignout"
                                class="btn-signout"
                                type="button">
                                    <i class="fa-solid fa-right-from-bracket"></i>
                                    Đăng xuất
                            </button>
                        </li>
                    </ul>

                    <button
                        @click="toggleTabLeft"
                        :class="{'active': $store.state.tableft.status}"
                        class="d-flex d-md-none header-tab-left">
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import userHttp from "../../hook/hook-http.js";
    import environment from "../../../environment.js";

    export default {
        name: 'common-header',
        components: {},
        methods: {
            async onSignout() {
                this.$store.commit("toggleLoader");
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
            toggleTabLeft() {
               this.$store.commit("toggleTabLeft");
            }
        }
    }
</script>

<style scoped>
    .common-header-component {
        background-color: "#ffffff";
        box-shadow: 0px 0px 3px 4px #b3b3b336;
        display: flex;
        align-items: center;
        min-height: 6rem;
    }

    .header-brand {
        font-size: 2.5rem;
        font-weight: 600;
        letter-spacing: .3px;
        text-transform: uppercase;
    }

    .header-list {
        gap: 1rem;
    }

    .header-list li {
        display: flex;
        align-items: center;
    }

    .header-auth-email {
        font-size: 1.5rem;
        margin-bottom: 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100px;
    }

    .header-list li a {
        color: var(--text-color)!important;
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: .3px;
        text-transform: capitalize;
    }

    .btn-signout {
        background-color: transparent;
        border: unset;
        font-size: 1.5rem;
        font-weight: 600;
        outline: unset;
    }

    /**BUTTON TAB LEFT */
    .header-tab-left {
        background-color: white;
        align-items: center;
        justify-content: flex-start;
        border: unset;
        outline: unset;
        height: 3rem;
        margin-left: auto;
        padding: 0px;
        position: relative;
        transition: all .5s ease;
        width: 4rem;
    }

    .header-tab-left.active {
        justify-content: flex-end;
    }

    .header-tab-left span {
        background-color: var(--first-color);
        display: flex;
        height: .5rem;
        width: 80%;
    }

    .header-tab-left span:before, .header-tab-left span:after {
        background-color: var(--first-color);
        content: "";
        left: 0px;
        height: .5rem;
        position: absolute;
        top: 0px;
        width: 100%;
    }

    .header-tab-left span:after {
        bottom: 0px;
        top: unset;
    }
</style>

