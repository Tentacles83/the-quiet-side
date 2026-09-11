/**
 * メインエントリーポイント
 * Vue アプリをマウントする。各モジュールの初期化は App.vue の onMounted で行う。
 */
import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
