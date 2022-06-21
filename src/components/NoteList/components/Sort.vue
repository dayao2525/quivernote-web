<template>
    <div class="note-list-sort">
        <q-btn-dropdown class="fit no-border-radius" align="left" flat no-caps padding="10px"
            :dropdown-icon="matKeyboardArrowDown">
            <template v-slot:label>
                <span class="sort-tit">Sort by {{ showName }}</span>
                <q-icon class="sort-icon" :class="{ 'rotate-180': isAsc }" size="14px" :name="matArrowDownward">
                </q-icon>
            </template>
            <q-list>
                <q-item clickable v-close-popup @click="changeType(Type.NAME)">
                    <q-item-section>
                        <q-item-label class="sort-item">
                            <q-icon v-if="isByTitle" :name="matCheck"></q-icon>
                            <span>title</span>
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="changeType(Type.CREATE_TIME)">
                    <q-item-section>
                        <q-item-label class="sort-item">
                            <q-icon v-if="isByCreate" :name="matCheck"></q-icon>
                            <span>date created</span>
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="changeType(Type.UPDATE_TIME)">
                    <q-item-section>
                        <q-item-label class="sort-item">
                            <q-icon v-if="isByUpdate" :name="matCheck"></q-icon>
                            <span>date updated</span>
                        </q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="changeType(Type.MANUALLY)">
                    <q-item-section>
                        <q-item-label class="sort-item">
                            <q-icon v-if="isByManually" :name="matCheck"></q-icon>
                            <span>manually</span>
                        </q-item-label>
                    </q-item-section>
                </q-item>
                <q-item class="item-splitter" clickable v-close-popup @click="changeSort(Sort.ASC)">
                    <q-item-section>
                        <q-item-label class="sort-item">
                            <q-icon v-if="isAsc" :name="matCheck"></q-icon>
                            <span>ascending</span>
                        </q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="changeSort(Sort.DESC)">
                    <q-item-section>
                        <q-item-label class="sort-item">
                            <q-icon v-if="isDesc" :name="matCheck"></q-icon>
                            <span>descending</span>
                        </q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </div>
</template>
<script setup lang="ts">
import { matArrowDownward, matKeyboardArrowDown, matCheck } from '@quasar/extras/material-icons'
import { computed } from '@vue/reactivity';
import { OrderSort, OrderType } from 'src/components/models';
import useNoteListStore from 'stores/note-list'
const noteListStore = useNoteListStore()

const Type = OrderType
const Sort = OrderSort
const isByTitle = computed(() => noteListStore.orderType === OrderType.NAME)
const isByCreate = computed(() => noteListStore.orderType === OrderType.CREATE_TIME)
const isByUpdate = computed(() => noteListStore.orderType === OrderType.UPDATE_TIME)
const isByManually = computed(() => noteListStore.orderType === OrderType.MANUALLY)
const isDesc = computed(() => noteListStore.orderSort === OrderSort.DESC)
const isAsc = computed(() => noteListStore.orderSort === OrderSort.ASC)

const showName = computed(() => {
    switch (noteListStore.orderType) {
        case OrderType.NAME:
            return 'Title';
        case OrderType.CREATE_TIME:
            return 'Created';
        case OrderType.UPDATE_TIME:
            return 'Updated';
        case OrderType.MANUALLY:
            return 'Manually';
    }
})

const changeType = (type: OrderType) => {
    noteListStore.changeOrderType(type)
}

const changeSort = (sort: OrderSort) => {
    noteListStore.changeOrderSort(sort)
}
</script>
<style lang="scss" scoped>
.note-list-sort {
    height: 40px;
    border-bottom: 1px solid $borderColor;

    :deep(.q-btn-dropdown__arrow) {
        font-size: 14px;
        margin-left: 5px;
    }
}

.sort-tit {
    font-size: 14px;
    font-weight: 400;
    color: #666;
}

.sort-icon {
    color: #666;
    margin-left: 6px;
}

.sort-item {
    padding-left: 20px;

    :deep(.q-icon) {
        position: absolute;
        left: 10px;
    }
}

.item-splitter {
    border-top: 1px solid $borderColor
}
</style>