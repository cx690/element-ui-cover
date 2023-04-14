import { Button, Input, Table, TableColumn } from "element-ui";
import { defineComponent, reactive } from "vue";

export default defineComponent({
    setup() {
        const state = reactive({
            value: 'input',
            data: []
        })

        function del(item: any) {
            console.log(item);
        }
        return () => <template>
            <Button type="primary">btn</Button>
            <Input value={state.value} onInput={value => { state.value = value }} />
            <Table data={state.data}>
                <TableColumn prop="aa" label="aa" />
                <TableColumn prop="action" label="action" scopedSlots={{
                    default: ({ row }) => <Button type="text" onClick={() => del(row)}>delete</Button>
                }} />
            </Table>
        </template>
    }
})
