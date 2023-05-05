<template>
    <Button type="primary">btn</Button>
    <Table :data="state.data">
        <TableColumn prop="aa" label="aa" />
        <TableColumn prop="action" label="action">
            <template #default="{ row }">
                <Button type="text" @click="del(row)">delete</Button>
            </template>
        </TableColumn>
    </Table>
    <Form ref="form" :model="state" :rules="rules">
        <FormItem label="name" prop="value">
            <Input v-model="state.value" />
        </FormItem>
    </Form>
</template>

<script setup lang="ts">
import { FormItem } from 'element-ui';
import { Button, Input, Table, TableColumn, Form } from 'element-ui';
import { onMounted } from 'vue';
import { reactive, ref } from 'vue';
const state = reactive({
    value: 'input',
    data: []
})

const rules = {
    value: [{ required: true, message: 'Please enter name!' }],
}

function del(item: any) {
    console.log(item);
}

const form = ref<InstanceType<typeof Form>>();
onMounted(() => {
    form.value!.validate().then(valid => {
        console.log(typeof valid);//'boolean'
    })
})
</script>
