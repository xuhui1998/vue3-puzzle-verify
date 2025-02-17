import PuzzleVerify from './puzzle-verify/index.vue'
import type { App } from 'vue';

export { PuzzleVerify };

const install = function (app: App) {
    app.component('PuzzleVerify', PuzzleVerify);
}

export default { install }
