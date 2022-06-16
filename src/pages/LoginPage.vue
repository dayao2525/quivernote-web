<template>
    <q-form @submit="onSubmit" class="q-gutter-md">
        <h5 class="text-primary text-center">Sign in to Quiver</h5>
        <q-input filled v-model="email" label="Email" dense lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type your email', validateEmail]" />

        <q-input filled type="password" v-model="password" dense label="Password" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Please type your password',
            val => val !== null && val.length >= 6 || 'Password a least 6 characters',
        ]" />

        
        <div>
            <q-btn class="full-width" :label="$t('login.submit')" type="submit" color="primary" />
        </div>
        <div class="row justify-between">
            <router-link to="/auth/forgot" class="text-body2 text-primary">{{$t('login.forgot')}}</router-link>
            <router-link to="/auth/register" class="text-body2 text-primary">{{$t('login.register')}}</router-link>
        </div>
    </q-form>
</template>
<script setup lang="ts">
import { useMeta } from 'quasar';

import { ref } from 'vue';
useMeta({
    title: 'Quiver Notebook sign in'
})
// const $q = useQuasar()

const email = ref('')
const password = ref('')

const validateEmail = (v: string) => {
    return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Please type a real email'
}

const onSubmit = () => {
    console.log('q')
}
</script>
<style lang="scss" scoped>
</style>