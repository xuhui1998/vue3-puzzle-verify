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
npm install slider-verify-vue3 

# yarn 安装：
yarn add slider-verify-vue3
```

2. 引入插件
```js
import SliderVerify from 'slider-verify-vue3'
import 'slider-verify-vue3/lib/style.css';
createApp(App).use(SliderVerify)
```

3. 使用插件
```html
  <template>
    <div>
      <SliderVerify v-model="isPass" />
    </div>
  </template>

  <script>
    import { ref } from 'vue'

    const isPass = ref(false)
  </script>
```
