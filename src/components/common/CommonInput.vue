<template>
    <div class="form-group">
        <label class="input-label" :for="id">{{label}}</label>
        <input
            :type="type"
            :id="id"
            :class="{'is-invalid': (valid.status != null && !valid.status)}"
            class="form-control"
            @blur="blur"/>
            <small id="emailHelp" class="form-text invalid-feedback">{{valid.message}}</small>
    </div>
</template>

<script>

    export default {
        name: 'common-input',
        props: {
            label: String,
            id: String,
            type: String,
            valid: {
                status: Boolean,
                message: String
            }
        },
        components: { },
        methods: {
            blur(event) {
                this.$emit("blur-event", event);
            }
        }
    }
</script>

<style scoped>
    .input-label {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: .3px;
    }
    .form-control {
        font-size: 1.6rem;
    }
    .form-text {
        font-size: 1.5rem;
        letter-spacing: .3px;
    }
</style>