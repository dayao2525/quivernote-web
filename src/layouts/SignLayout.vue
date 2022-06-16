<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title class="text-center">
                    Quiver Notebook
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <div class="auth-box">
                <div class="q-pa-md">
                    <router-view />
                </div>
            </div>
        </q-page-container>
    </q-layout>

</template>
<style lang="scss" scoped>
.auth-box {
    max-width: 400px;
    margin: 50px auto;
}
</style>