使用此类型库，你可以从element-ui中获取正确的类型推导，这个会覆盖element-ui的部分类型导出。

# 安装
`yarn add element-ui-cover --dev`

# tsconfig 配置
在tsconfig.json中增加以下配置：
```js
{ 
 "compilerOptions": {
    "types": [
      "element-ui-cover"
    ], 
  },
  ...others,
}
```

# 结果预览
### 对于模板语法 (需要使用 vscode 的插件 Volar)
tsconfig.json 中需要增加以下配置：
```js
{ 
 "vueCompilerOptions": {
    "target": 2.7
  },
  ...others,
}
```
![template view](./button.png)

### 对tsx语法
- 由于 [@vue/babel-preset-jsx](https://github.com/vuejs/jsx-vue2) 转换属性 `scopedSlots` 为插槽,所以内部插槽使用了 `scopedSlots` 属性声明;
![tsx view](./buttonjsx.png)
![slots view](./slots.png)

### 对于全局组件
如果element-ui被注册为全局组件使用，按照以下设置即可：
- 安装库 `@vue/runtime-core`
  `yarn add @vue/runtime-core --dev`

- 在tsconfig.json中增加types设置：
```js
{ 
 "compilerOptions": {
    "types": [
      "element-ui-cover",
      "element-ui-cover/component.g.d.ts"
    ], 
  },
  ...others,
}
```
然后就可以正常使用了:
![global components view](./com.g.png)
![global components option view](./comopt.png)

甚至部分事件也有支持
![events view](./events.png)

### 类型错误
![type error view](./error.png)

# peerDependencies 预依赖
vue和element-ui两个库是必须的。
- vue version ^2.7.0
- element-ui version ^2.0.0 (^2.15.0 以上会更好)
- @vue/runtime-core version ^3.0.0 (如果使用全局组件必须安装这个)
