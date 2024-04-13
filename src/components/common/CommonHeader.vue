<template>
    <div class="common-header-component">
        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                    <h1 class="mb-0">
                        <RouterLink class="header-brand" to="/">Lands</RouterLink>
                    </h1>
                </div>
                <div class="col-9 d-flex align-items-center justify-content-between">
                    <ul class="header-list list-unstyled d-flex align-items-center p-0 mb-0">
                        <li>
                            <RouterLink to="/land">Bất động sản</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about">Giới thiệu</RouterLink>
                        </li>
                    </ul>

                     <ul class="header-list list-unstyled d-flex align-items-center p-0 mb-0">
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
                            <button
                                class="btn-signout"
                                type="button">
                                    <i class="fa-solid fa-right-from-bracket"></i>
                                    Đăng xuất
                                </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'common-header',
        components: {}
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
</style>

