<template>
    <div class="dashboard-app-component">
        <div class="container">
            <CommonBreadcrumb />
            <nav class="tab-wrapper">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                        class="nav-link active"
                        data-toggle="tab" data-target="#android"
                        type="button">Android</button>

                    <button
                        class="nav-link"
                        data-toggle="tab" data-target="#ios"
                        type="button">Ios</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="android">
                    <table>
                        <thead>
                            <tr>
                                <th>Sản phẩm/ mô tả</th>
                                <th>Dung lượng</th>
                                <th>Download</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td class="flatform-title">
                                    application c9371cc1-cad7-469a-891d-f32ddbf3c80c
                                </td>

                                <td class="flatform-size">
                                    70.5kb
                                </td>

                                <td>
                                    <a :href="androidV1">{{androidV1}}</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="tab-pane fade" id="ios">
                    <table>
                        <thead>
                            <tr>
                                <th>Sản phẩm/ mô tả</th>
                                <th>Dung lượng</th>
                                <th>Download</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td class="flatform-title">
                                    Chưa hỗ trợ
                                </td>

                                <td class="flatform-size">
                                    0.0kb
                                </td>

                                <td>
                                    <a href="#">Link tải</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CommonBreadcrumb from "../common/CommonBreadCrumb.vue";
    import environment from "../../../environment.js";

    export default {
        name: 'dashboard-app',
        components: {
            CommonBreadcrumb
        },
        data() {
            return {
                androidV1: `${environment.url}${environment.flatform.android.v1}`
            }
        }
    }
</script>

<style scoped>
    .tab-content {
        background-color: var(--bg-opacity);
        height: 450px;
        overflow-y: auto;
        margin-bottom: 4.5rem;
        padding: 1.5rem 0rem;
    }
    .tab-wrapper {
        border-bottom: 3px solid var(--first-color);
    }
    .nav-tabs {
        border-bottom: unset;
    }
    .nav-tabs .nav-link {
        color: var(--text-color);
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: .3px;
        text-transform: uppercase;
    }
    .nav-tabs .nav-link:hover {
        border-color: transparent;
    }
    .nav-tabs .nav-link.active {
        background-color: #cae4ff;
        border: unset;
        color: var(--first-color);
        margin-bottom: unset;
    }
    table {
        width: 100%;
    }
    table, th, td {
        color: var(--text-color);
        border-bottom: 1px solid rgba(122,115,110,.2) !important;
        font-size: 1.5rem;
        padding: 1rem;
    }
    .flatform-title {
        width: 25.5rem;
    }
    .flatform-size {
        background-color: #f1efed;
        text-align: center;
        width: 14.5rem;
    }
</style>