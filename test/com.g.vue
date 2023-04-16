<template>
    <el-tag type="danger"></el-tag>
    <el-button type="info">info</el-button>
    <el-input v-model="state.value"></el-input>
    <el-table :data="state.data">
        <el-table-column prop="aa" label="aa" />
        <el-table-column prop="action" label="action">
            <template #default="{ row }">
                <el-button type="text" @click="del(row)">delete</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
    value: '',
    data: []
})

function del(item: any) {
    console.log(item);
}
</script>