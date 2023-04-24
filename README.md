- [中文说明](https://github.com/cx690/element-ui-cover/blob/main/README_zh_CN.md "中文说明")
Use this types library,Youe can get `correct type derivation` when use element-ui,it can cover element-ui's types export.

# install
`yarn add element-ui-cover --dev`

# tsconfig
Add below config in your tsconfig.json.
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

# result view
### for template (with vscode plugin Volar)
tsconfig.json add config as below:
```js
{ 
 "vueCompilerOptions": {
    "target": 2.7
  },
  ...others,
}
```
![template view](./button.png)

### for tsx
- The [@vue/babel-preset-jsx](https://github.com/vuejs/jsx-vue2) transition property `scopedSlots` to slots,so the slots use `scopedSlots`;
![tsx view](./buttonjsx.png)
![slots view](./slots.png)

### for global components
If element-ui components is registered as global components, set config as below:
- Install `@vue/runtime-core`
  `yarn add @vue/runtime-core --dev`

- Add types in tsconfig.json
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
Then it will work:
![global components view](./com.g.png)
![global components option view](./comopt.png)

Some events is also supported.
![events view](./events.png)

### type error
![type error view](./error.png)

# peerDependencies
vue and element-ui is required.
- vue version ^2.7.0
- element-ui version ^2.0.0 (^2.15.0 is better)
- @vue/runtime-core version ^3.0.0 (It is required if use global components)
