<template>
    <div class="note-main-header row items-center justify-between">
        <div class="left">
            <q-btn-dropdown class="fit menu-toggle no-border-radius" icon="menu" flat padding="10px 0 10px 20px"
                :dropdown-icon="matKeyboardArrowDown" split @click="toggleDraw">
                <q-list>
                    <q-item clickable v-close-popup @click="globalStore.changePanelMode(Mode.Single)">
                        <q-item-section>

                            <q-item-label class="sort-item">
                                <q-icon v-if="globalStore.panel_mode === Mode.Single" :name="matCheck"></q-icon>
                                <span>Single Pane</span>
                            </q-item-label>
                        </q-item-section>

                    </q-item>
                    <q-item clickable v-close-popup @click="globalStore.changePanelMode(Mode.Two)">
                        <q-item-section>

                            <q-item-label class="sort-item">
                                <q-icon v-if="globalStore.panel_mode === Mode.Two" :name="matCheck"></q-icon>
                                <span>Two Pane</span>
                            </q-item-label>
                        </q-item-section>

                    </q-item>
                    <q-item clickable v-close-popup @click="globalStore.changePanelMode(Mode.Three)">
                        <q-item-section>
                            <q-item-label class="sort-item">
                                <q-icon v-if="globalStore.panel_mode === Mode.Three" :name="matCheck"></q-icon>
                                <span>Three Pane</span>
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>
        </div>
        <div class="center">
            <q-btn-toggle class="note-mode-toogle" v-model="editorStore.mode" outline size="sm" padding="5px 29px"
                toggle-color="primary" :options="[
                    { slot: 'unwatch', value: 'unwatch' },
                    { slot: 'preview', value: 'preview' },
                    { slot: 'watch', value: 'watch' }
                ]">

                <template v-slot:unwatch>
                    <div class="row items-center no-wrap">
                        <q-icon :name="matEdit" />
                    </div>
                </template>
                <template v-slot:preview>
                    <div class="row items-center no-wrap">
                        <q-icon :name="matVisibility" />
                    </div>
                </template>
                <template v-slot:watch>
                    <div class="row items-center no-wrap">
                        <q-icon :name="matVerticalSplit" />
                    </div>
                </template>
            </q-btn-toggle>
        </div>
        <div class="right">
            <q-btn-dropdown v-if="globalStore.userinfo.id" class="fit menu-toggle no-border-radius" flat
                padding="10px 20px" :dropdown-icon="matKeyboardArrowDown">
                <template v-slot:label>
                    <q-avatar size="26px">
                        <img :src="globalStore.userinfo.avatar">
                    </q-avatar>
                </template>
                <q-list>
                    <q-item clickable v-close-popup>
                        <q-item-section>
                            <q-item-label>{{ globalStore.userinfo.name }}</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                        <q-item-section>
                            <q-item-label>Setings</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                        <q-item-section>
                            <q-item-label>Sign out</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>

        </div>
    </div>
</template>
<script setup lang="ts">
import { matKeyboardArrowDown, matEdit, matVisibility, matVerticalSplit, matCheck } from '@quasar/extras/material-icons'
import useGlobalStore, { PanelMode } from 'stores/global'
import useEditorStore from 'stores/editor'
import { ref, watch } from 'vue';
const globalStore = useGlobalStore()
const editorStore = useEditorStore()

const Mode = PanelMode
// 最近一次飞single模式
const lastNotSingleMode = ref(globalStore.panel_mode)
watch(() => globalStore.panel_mode, (_val: PanelMode, old_val: PanelMode) => {
    lastNotSingleMode.value = old_val
})
const toggleDraw = () => {
    if (globalStore.panel_mode !== PanelMode.Single) {
        globalStore.changePanelMode(PanelMode.Single)
    } else {
        globalStore.changePanelMode(lastNotSingleMode.value || PanelMode.Three)
    }
}
</script>
<style lang="scss" scoped>
.note-main-header {
    height: $headerbarHeight;
    border-bottom: 1px solid $borderColor;
}

.note-mode-toogle {
    :deep(.q-btn-item) {
        &.text-primary {
            background-color: $primary  !important;

            .q-btn__content {
                color: #fff !important;
            }
        }

        &:nth-of-type(2) {
            border-right: 1px solid $primary;
            border-left: 1px solid $primary;
        }
    }
}

.menu-toggle {
    :deep(.q-btn-dropdown__arrow) {
        font-size: 14px;
        margin-left: 5px;
    }
}

.sort-item {
    padding-left: 20px;

    :deep(.q-icon) {
        position: absolute;
        left: 10px;
    }
}
</style>