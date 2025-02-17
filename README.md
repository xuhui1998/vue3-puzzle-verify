一个基于vue3的拼图校验组件.

<p>
  <a href="https://github.com/xuhui1998/vue3-puzzle-verify" target="_black">
    <img src="https://img.shields.io/badge/https%3A%2F%2Fgithub.com%2Fxuhui1998%2Fvue3-puzzle-verify?logo=github&label=vue3-puzzle-verify
    " />
  </a>
</p>

1. 安装插件

```shell
# npm 安装：
npm install vue3-puzzle-verify

# yarn 安装：
yarn add vue3-puzzle-verify
```

2. 引入插件
```js
import PuzzleVerify from 'vue3-puzzle-verify'
import 'vue3-puzzle-verify/lib/style.css'
createApp(App).use(PuzzleVerify)
```

3. 使用插件
```html
  <template>
    <div>
      <PuzzleVerify v-model="modelValue" />
    </div>
  </template>

  <script>
    import { ref } from 'vue'

    const modelValue = ref(false)
  </script>
```

4. 配置参数

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| v-model | Boolean | false | 校验是否通过 |
| type | 'insert' 'modal' 'popover' | 'insert' | 展示模式 |


| 方法  | 描述 |
| --- | --- |
| onReset | 刷新 |


| 事件  | 描述 |
| --- | --- |
| onSuccess | 校验通过 |
| onFail | 校验失败 |
| onDrag | 拖动滑块 |
| onDragEnd | 停止拖动 |

