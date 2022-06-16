<template>
    <q-form @submit="onSubmit" class="q-gutter-md">
        <h5 class="text-grey-7 text-center">Sign un to Quiver</h5>

        <q-input filled v-model="name" dense label="Name" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type your name']" />

        <q-input filled v-model="email" dense label="Email" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type your email']" />

        <q-input filled type="password" v-model="password" dense label="Password" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Please type your password',
            val => val !== null && val.length < 6 || 'Password a least 6 characters',
        ]" />

        <div>
            <q-btn class="full-width" :label="$t('login.register')" type="submit" color="primary" />
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

const name = ref('')
const email = ref('')
const password = ref('')

const onSubmit = () => {
    console.log('q')
}
</script>
<style lang="scss" scoped>
</style>