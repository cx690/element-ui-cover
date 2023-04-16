Use this types library,Youe can get `correct type derivation` when use element-ui,it can cover element-ui's types export.

# install
`yarn add element-ui-cover --dev`

# tsconfig
Add flow config in your tsconfig.json.
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
tsconfig.json add config at flow:
```js
{ 
 "vueCompilerOptions": {
    "extensions": [
      ".vue"
    ],
    "target": 2.7
  },
  ...others,
}
```
![basic usage](./button.png)

### for tsx
- The [@vue/babel-preset-jsx](https://github.com/vuejs/jsx-vue2) transition property `scopedSlots` to slots,so the slots use `scopedSlots`;
![basic usage](./buttonjsx.png)

### for global components
If element-ui components is registered as global components, set config as flow:
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
![basic usage](./com.g.png)

### type error
![basic usage](./error.png)

# peerDependencies
vue and element-ui is required.
- vue version ^2.7.0
- element-ui version ^2.0.0 (^2.15.0 is better)
- @vue/runtime-core version ^3.0.0 (It is required if use global components)
