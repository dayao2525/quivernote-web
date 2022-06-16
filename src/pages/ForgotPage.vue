<template>
    <q-form @submit="onSubmit" class="q-gutter-md">
        <h5 class="text-grey-7 text-center">Forget password</h5>

        <q-input filled v-model="email" dense label="Email" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type your email', validateEmail]" />

        <div>
            <q-btn class="full-width" label="Send me reset instructions" type="submit" color="primary" />
        </div>
        <div class="row justify-end">
            <span>Already have an account?  <router-link to="/auth/login" class="text-body2 text-primary">{{$t('login.submit')}}</router-link></span>
        </div>
    </q-form>
</template>
<script setup lang="ts">
import { useMeta } from 'quasar';

import { ref } from 'vue';
useMeta({
    title: 'Quiver Notebook sign up'
})
// const $q = useQuasar()

const email = ref('')

const validateEmail = (v: string) => {
    return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Please type a real email'
}
const onSubmit = () => {
    console.log('q')
}
</script>
<style lang="scss" scoped>
</style>