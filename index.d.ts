// Type definitions for npm package element-ui 2.15.0
// Project: https://element.eleme.cn/
// Definitions by: caixue <https://github.com/cx690>
// Definitions(not merged): https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

declare module 'element-ui/lib/locale/lang/*' {
    const lang: Record<string, any>;
    export default lang;
}

declare module 'element-ui/lib/locale' {
    export const t: (path: string, options: any) => string;
    export const use: (lang: any) => void;
    export const i18n: (fn?: (...args: any[]) => any) => void;
    const locale: {
        t: typeof t,
        use: typeof use,
        i18n: typeof i18n,
    };
    export default locale;
}

declare module 'element-ui/lib/locale/index' {
    export * from 'element-ui/lib/locale';
}

declare module 'element-ui/lib/locale/index.js' {
    export * from 'element-ui/lib/locale';
}

type VNode = import('vue').VNode | string | number | boolean | null | undefined;
type VNodes = VNode | VNode[];

declare module 'element-ui' {
    import type { DefineComponent } from 'vue';
    export * from 'element-ui/types/index';
    import ElementUi from 'element-ui/types/index';
    export const Alert: DefineComponent<Partial<ElementUi.Alert> & {
        onClose(): any;
        /** slot */
        scopedSlots: {
            default?: () => VNodes,
            /** title content */
            title?: () => VNodes,
        }
    }>;
    export const Aside: DefineComponent<Partial<ElementUi.Aside>>;
    export const Autocomplete: DefineComponent<Partial<Omit<ElementUi.Autocomplete, 'focus'>>>;
    export const Badge: DefineComponent<Partial<ElementUi.Badge>>;
    export const Breadcrumb: DefineComponent<Partial<ElementUi.Breadcrumb>>;
    export const BreadcrumbItem: DefineComponent<Partial<ElementUi.BreadcrumbItem>>;
    export const Button: DefineComponent<Partial<ElementUi.Button>>;
    export const ButtonGroup: DefineComponent<Partial<ElementUi.ButtonGroup>>;
    export const Cascader: DefineComponent<Partial<Omit<ElementUi.Cascader, '$slots'> & {
        onChange: (value: any) => any;
        onInput: (value: any) => any;
        onFocus: (e: Event) => any;
        onBlur: (e: Event) => any;
        onClear: () => any;
        'on-visible-change': (visible: boolean) => any;
        'on-remove-tag': (itme: any) => any;
        'on-expand-change': (itmes: any[]) => any;
        /** slot */
        scopedSlots: {
            /** the custom content of cascader node, the parameter is { node, data }, which are current Node object and node data respectively. */
            default?: (scoped: { node: any, data: any }) => VNodes,
            /** content when there is no matched options. */
            empty?: () => VNodes,
        }
    }>>;
    export const Carousel: DefineComponent<Partial<Omit<ElementUi.Carousel, 'setActiveItem' | 'prev' | 'next'> & {
        onChange: (activeIndex: number, oldActiveIndex: number) => any;
    }>>;
    export const CarouselItem: DefineComponent<Partial<ElementUi.CarouselItem>>;
    export const Checkbox: DefineComponent<Partial<ElementUi.Checkbox & {
        onChange: (value: any) => any;
        onInput: (value: any) => any;
    }>>;
    export const CheckboxButton: DefineComponent<Partial<ElementUi.CheckboxButton>>;
    export const CheckboxGroup: DefineComponent<Partial<ElementUi.CheckboxGroup & {
        onChange: (value: any) => any;
        onInput: (value: any) => any;
    }>>;
    export const Col: DefineComponent<Partial<ElementUi.Col>>;
    export const Collapse: DefineComponent<Partial<ElementUi.Collapse & {
        onChange: (...args: any[]) => any;
    }>>;
    export const CollapseItem: DefineComponent<Partial<ElementUi.CollapseItem>>;
    export const ColorPicker: DefineComponent<Partial<ElementUi.ColorPicker & {
        onChange: (value: any) => any;
        onInput: (value: any) => any;
        "on-active-change": (value: any) => any;
    }>>;
    export const Container: DefineComponent<Partial<ElementUi.Container>>;
    export const DatePicker: DefineComponent<Partial<Omit<ElementUi.DatePicker, 'focus'> & {
        onChange: (value: any) => any;
        onInput: (value: any) => any;
        onFocus: (e: Event) => any;
        onBlur: (e: Event) => any;
    }>>;
    export const Dialog: DefineComponent<Partial<ElementUi.Dialog & {
        onOpen: () => any;
        onOpened: () => any;
        onClose: () => any;
        onClosed: () => any;
        /** slot */
        scopedSlots: {
            /** content of Dialog */
            default?: () => VNodes,
            /** content of the Dialog title */
            title?: (error: any) => VNodes,
            /** content of the Dialog footer */
            footer?: (error: any) => VNodes,
        }
    }>>;
    export const Dropdown: DefineComponent<Partial<ElementUi.Dropdown & {
        onClick: () => any;
        onCommand: (command: any) => any;
        'on-visible-change': (visible: boolean) => any;
        /** slot */
        scopedSlots: {
            /** content of Dropdown. Notice: Must be a valid html dom element (ex. <span>, <button> etc.) or el-component, to attach the trigger listener */
            default?: () => VNodes,
            /** content of the Dropdown Menu, usually a <el-dropdown-menu> element */
            dropdown?: (error: any) => VNodes,
        }
    }>>;
    export const DropdownItem: DefineComponent<Partial<ElementUi.DropdownItem>>;
    export const DropdownMenu: DefineComponent<Partial<ElementUi.DropdownMenu>>;
    export const Footer: DefineComponent<Partial<ElementUi.Footer>>;
    export const Form: DefineComponent<Partial<Omit<ElementUi.Form, 'validate' | 'validateField' | 'resetFields' | 'clearValidate'> & {
        onValidate: (...args: any[]) => any;

    }>>;
    export const FormItem: DefineComponent<Partial<Omit<ElementUi.FormItem, 'resetField' | 'clearValidate'> & {
        /** slot */
        scopedSlots: {
            /** content of Form Item */
            default?: () => VNodes,
            /** content of label */
            label?: () => VNodes,
            /** Custom content to display validation message. The scope parameter is { error } */
            error?: (error: any) => VNodes,
        }
    }>>;
    export const Header: DefineComponent<Partial<ElementUi.Header>>;
    export const Input: DefineComponent<Partial<Omit<ElementUi.Input, 'type' | 'blur' | 'focus' | 'select'> & {
        type: HTMLInputElement['type'];
        onSelect: () => any;
        onChange: (value: any) => any;
        onFocus: (e: Event) => any;
        onBlur: (e: Event) => any;
        onInput: (value: any) => any;
        onClear: () => any;
    }>>;
    export const InputNumber: DefineComponent<Partial<Omit<ElementUi.InputNumber, 'blur'> & {
        onSelect: () => any;
        onChange: (value: any) => any;
        onFocus: (e: Event) => any;
        onBlur: (e: Event) => any;
        onInput: (value: any) => any;
        onClear: () => any;
    }>>;
    export const Main: DefineComponent<Partial<ElementUi.Main>>;
    export const Menu: DefineComponent<Partial<ElementUi.Menu>>;
    export const MenuItem: DefineComponent<Partial<ElementUi.MenuItem>>;
    export const MenuItemGroup: DefineComponent<Partial<ElementUi.MenuItemGroup>>;
    export const Option: DefineComponent<Partial<ElementUi.Option>>;
    export const OptionGroup: DefineComponent<Partial<ElementUi.OptionGroup>>;
    export const Pagination: DefineComponent<Partial<ElementUi.Pagination & {
        'on-size-change': (pageSize: number) => any;
        'on-current-change': (page: number) => any;
        'on-prev-click': (page: number) => any;
        'on-next-click': (page: number) => any;
        /** slot */
        scopedSlots: {
            /** custom content. To use this, you need to declare slot in layout */
            default?: () => any;
        }
    }>>;
    export const Popover: DefineComponent<Partial<ElementUi.Popover & {
        'onShow': () => any;
        'on-after-enter': () => any;
        'onHide': () => any;
        'on-after-leave': () => any;
        /** slot */
        scopedSlots: {
            /** text content of popover */
            default?: () => any;
            /** HTML element that triggers popover */
            reference?: () => any;
        }
    }>>;
    export const Progress: DefineComponent<Partial<ElementUi.Progress>>;
    export const Rate: DefineComponent<Partial<ElementUi.Rate & {
        onChange: (value: any) => any;
        onInput: (value: any) => any;
    }>>;
    export const Radio: DefineComponent<Partial<ElementUi.Radio & {
        onInput: (value: any) => any;
    }>>;
    export const RadioButton: DefineComponent<Partial<ElementUi.RadioButton>>;
    export const RadioGroup: DefineComponent<Partial<ElementUi.RadioGroup & {
        onInput: (value: any) => any;
    }>>;
    export const Row: DefineComponent<Partial<ElementUi.Row>>;
    export const Select: DefineComponent<Partial<Omit<ElementUi.Select, 'blur' | 'focus'> & {
        onChange: (value: any) => any;
        onInput: (value: any) => any;
        onFocus: (e: Event) => any;
        onBlur: (e: Event) => any;
        onClear: () => any;
        'on-visible-change': (visible: boolean) => any;
        'on-remove-tag': (itme: any) => any;
        /** slot */
        scopedSlots: {
            /** option list */
            default?: () => VNodes,
            /** content as Select prefix */
            prefix?: () => VNodes,
            /** content when there is no options */
            empty?: () => VNodes,
        }
    }>>;
    export const Slider: DefineComponent<Partial<ElementUi.Slider & {
        onChange: (value: any) => any;
        onInput: (value: any) => any;
    }>>;
    export const Step: DefineComponent<Partial<ElementUi.Step & {
        /** slot */
        scopedSlots: {
            /** custom icon */
            icon?: () => VNodes,
            /** step title */
            title?: () => VNodes,
            /** step description */
            description?: () => VNodes,
        }
    }>>;
    export const Steps: DefineComponent<Partial<ElementUi.Steps>>;
    export const Submenu: DefineComponent<Partial<ElementUi.Submenu>>;
    export const Switch: DefineComponent<Partial<ElementUi.Switch & {
        onChange: (value: any) => any;
        onInput: (value: any) => any;
    }>>;
    export const Table: DefineComponent<Partial<Omit<ElementUi.Table, 'clearSelection' | 'toggleRowSelection' | 'toggleAllSelection' | 'toggleRowExpansion'
        | 'setCurrentRow' | 'clearSort' | 'clearFilter' | 'doLayout' | 'sort' | 'rowKey'> & {
            /** key of row data, used for optimizing rendering. Required if reserve-selection is on or display tree data. When its type is String, 
             * multi-level access is supported, e.g. user.info.id, but user.info[0].id is not supported, in which case Function should be used. */
            rowKey?: string | ((row: Record<string, any>) => any);
            onSelect: (selection: any[], row: any) => any;
            'on-select-all': (selection: any[]) => any;
            'on-selection-change': (selection: any[]) => any;
            'on-cell-mouse-enter': (row: any, column: any, cell: any, event: Event) => any;
            'on-cell-mouse-leave': (row: any, column: any, cell: any, event: Event) => any;
            'on-cell-click': (row: any, column: any, cell: any, event: Event) => any;
            'on-cell-dblclick': (row: any, column: any, cell: any, event: Event) => any;
            'on-row-click': (row: any, column: any, event: Event) => any;
            'on-row-contextmenu': (row: any, column: any, event: Event) => any;
            'on-row-dblclick': (row: any, column: any, event: Event) => any;
            'on-header-click': (column: any, event: Event) => any;
            'on-header-contextmenu': (column: any, event: Event) => any;
            'on-sort-change': (option: { column: any, prop: any, order: any }) => any;
            'on-filter-change': (filters: any) => any;
            'on-current-change': (currentRow: any, oldCurrentRow: any) => any;
            'on-header-dragend': (newWidth: any, oldWidth: any, column: any, event: Event) => any;
            'on-expand-change': (row: any, expands: any) => any;
            /** slot */
            scopedSlots: {
                default?: () => VNodes,
                /** Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for
                 *  the table. This slot will be displayed above the summary row if there is one. */
                append?: () => VNodes,
            }
        }>>;
    export const TableColumn: DefineComponent<Partial<ElementUi.TableColumn & {
        /** slot */
        scopedSlots: {
            /** Custom content for table columns. The scope parameter is { row, column, $index } */
            default: (scoped: { row: any, column: any, $index: number }) => VNodes,
            /** Custom content for table header. The scope parameter is { column, $index } */
            header?: (scoped: { column: any, $index: number }) => VNodes,
        }
    }>>;
    export const Tabs: DefineComponent<Partial<ElementUi.Tabs & {
        'on-tab-click': (name: string) => any;
        'on-tab-remove': (name: string) => any;
        'on-tab-add': () => any;
        onEdit: (targetName: string, action: any) => any;
        onInput: (name: string) => any;
    }>>;
    export const TabPane: DefineComponent<Partial<ElementUi.TabPane>>;
    export const Tag: DefineComponent<Partial<ElementUi.Tag & {
        onClick: () => any;
        onClose: () => any;
    }>>;
    export const Timeline: DefineComponent<Partial<ElementUi.Timeline>>;
    export const TimelineItem: DefineComponent<Partial<ElementUi.TimelineItem & {
        /** slot */
        scopedSlots: {
            /** Custom content for timeline item */
            default?: () => VNodes,
            /** Custom defined node */
            dot?: () => VNodes,
        }
    }>>;
    export const TimePicker: DefineComponent<Partial<Omit<ElementUi.TimePicker, 'focus'> & {
        onChange: (value: any) => any;
        onInput: (value: any) => any;
        onFocus: (e: Event) => any;
        onBlur: (e: Event) => any;
    }>>;
    export const TimeSelect: DefineComponent<Partial<ElementUi.TimeSelect>>;
    export const Tooltip: DefineComponent<Partial<ElementUi.Tooltip>>;
    export const Transfer: DefineComponent<Partial<Omit<ElementUi.Transfer, 'clearQuery'> & {
        onChange: (value: any[]) => any;
        onInput: (value: any[]) => any;
        'on-left-check-change': (value: any[]) => any;
        'on-right-check-change': (value: any[]) => any;
    }>>;
    export const Tree: DefineComponent<Partial<Omit<ElementUi.Tree, 'filter' | 'updateKeyChildren' | 'getCheckedNodes' | 'setCheckedNodes' | 'getCheckedKeys'
        | 'setCheckedKeys' | 'setChecked' | 'getHalfCheckedNodes' | 'getHalfCheckedKeys' | 'getCurrentKey' | 'getCurrentNode' | 'setCurrentKey' | 'setCurrentNode'
        | 'getNode' | 'remove' | 'append' | 'insertBefore' | 'insertAfter'> & {
            'on-node-click': (...args: any[]) => any;
            'on-node-contextmenu': (...args: any[]) => any;
            'on-check-change': (...args: any[]) => any;
            onCheck: (...args: any[]) => any;
            'on-current-change': (...args: any[]) => any;
            'on-node-expand': (...args: any[]) => any;
            'on-node-collapse': (...args: any[]) => any;
            'on-node-drag-start': (...args: any[]) => any;
            'on-node-drag-enter': (...args: any[]) => any;
            'on-node-drag-leave': (...args: any[]) => any;
            'on-node-drag-over': (...args: any[]) => any;
            'on-node-drag-end': (...args: any[]) => any;
            'on-node-drop': (...args: any[]) => any;
            /** slot */
            scopedSlots: {
                /** Custom content for tree nodes. The scope parameter is { node, data } */
                default?: (scoped: { node: any, data: any }) => VNodes,
            }
        }>>;
    export const Upload: DefineComponent<Partial<Omit<ElementUi.Upload, 'clearFiles' | 'abort' | 'submit'> & {
        onInput: (value: any) => any;
        /** slot */
        scopedSlots: {
            default?: () => VNodes,
            /** content which triggers file dialog */
            trigger?: () => VNodes,
            /** content of tips */
            tip?: () => VNodes,
        }
    }>>;
    export const Divider: DefineComponent<Partial<ElementUi.Divider>>;
    export const Link: DefineComponent<Partial<ElementUi.Link>>;
    export const Image: DefineComponent<Partial<ElementUi.Image & {
        onLoad: (e: Event) => any;
        onError: (e: Event) => any;
        /** slot */
        scopedSlots: {
            /** Triggers when image load */
            placeholder?: () => VNodes,
            /** Triggers when image load failed */
            error?: () => VNodes,
        }
    }>>;
    export const Icon: DefineComponent<Partial<ElementUi.Icon>>;
    export const Calendar: DefineComponent<Partial<ElementUi.Calendar & {
        /** slot */
        scopedSlots: {
            /** date the cell represents */
            date?: (date: Date) => VNodes,
            /** content */
            data?: (scoped: { type: string, isSelected: boolean, day: string }) => VNodes,
        }
    }>>;
    export const Backtop: DefineComponent<Partial<ElementUi.Backtop & {
        onClick: (e: Event) => any;
    }>>;
    export const PageHeader: DefineComponent<Partial<ElementUi.PageHeader & {
        onBack: () => any;
        /** slot */
        scopedSlots: {
            /** title content */
            title?: () => VNodes,
            /** content */
            content?: () => VNodes,
        }
    }>>;
    export const Avatar: DefineComponent<Partial<ElementUi.Avatar & {
        onError: (e: Event) => any;
        /** slot */
        scopedSlots: {
            default?: () => VNodes,
        }
    }>>;
    export const Drawer: DefineComponent<Partial<Omit<ElementUi.Drawer, '$slots'> & {
        onOpen: () => any;
        onOpened: () => any;
        onClose: () => any;
        onClosed: () => any;
        /** slot */
        scopedSlots: {
            /** Drawer's Content */
            default?: () => VNodes,
            /** Drawer Title Section */
            title?: () => VNodes,
        }
    }>>;
    export const Statistic: DefineComponent<Partial<ElementUi.Statistic & {
        /** Enable in the 'countdown' function */
        onChange: (value: Date) => any;
        /** Launched after the 'countdown' is complete */
        onFinish: (value: boolean) => any;
    }>>;
    export const Popconfirm: DefineComponent<Partial<ElementUi.Popconfirm & {
        onConfirm: () => any;
        onCancel: () => any;
        /** slot */
        scopedSlots: {
            default?: () => VNodes,
            /** HTML element that triggers Popconfirm */
            reference?: () => VNodes,
        }
    }>>;
    export const Skeleton: DefineComponent<Partial<ElementUi.Skeleton & {
        /** slot */
        scopedSlots: {
            /** Real rendering DOM */
            default?: () => VNodes,
            /** Custom rendering skeleton template */
            template?: () => VNodes,
        }
    }>>;
    export const SkeletonItem: DefineComponent<Partial<ElementUi.SkeletonItem>>;
    export const CascaderPanel: DefineComponent<Partial<ElementUi.CascaderPanel>>;
    export const Empty: DefineComponent<Partial<ElementUi.Empty & {
        /** slot */
        scopedSlots: {
            /** Custom bottom content */
            default?: () => VNodes,
            /** Custom image */
            image?: () => VNodes,
            /** Custom description */
            description?: () => VNodes,
        }
    }>>;
    export const Spinner: DefineComponent<Partial<ElementUi.Spinner>>;
    export const Descriptions: DefineComponent<Partial<ElementUi.Descriptions & {
        /** slot */
        scopedSlots: {
            default?: () => VNodes,
            /** custom title, display on the top left */
            title?: () => VNodes,
            /** custom extra area, display on the top right */
            extra?: () => VNodes,
        }
    }>>;
    export const DescriptionsItem: DefineComponent<Partial<ElementUi.DescriptionsItem & {
        /** slot */
        scopedSlots: {
            default?: () => VNodes,
            /**	custom label */
            label?: () => VNodes,
        }
    }>>;
    export const Result: DefineComponent<Partial<ElementUi.Result & {
        /** slot */
        scopedSlots: {
            /** custom icon */
            icon?: () => VNodes,
            /** custom title */
            title?: () => VNodes,
            /** custom sub title */
            subTitle?: () => VNodes,
            /** custom extra area */
            extra?: () => VNodes,
        }
    }>>;
}
