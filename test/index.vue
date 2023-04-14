<template>
    <Button type="primary">btn</Button>
    <Input v-model="state.value" />
    <Table :data="state.data">
        <TableColumn prop="aa" label="aa" />
        <TableColumn prop="action" label="action">
            <template #default="{ row }">
                <Button type="text" @click="del(row)">delete</Button>
            </template>
        </TableColumn>
    </Table>
</template>

<script setup lang="ts">
import { Button, Input, Table, TableColumn } from 'element-ui';
import { reactive } from 'vue';
const state = reactive({
    value: 'input',
    data: []
})

function del(item: any) {
    console.log(item);
}
</script>
