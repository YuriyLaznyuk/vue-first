import { createApp } from "vue";
import App from "./App.vue";
import components from "./components/UI";
import router from "./router/router";
// import VIntersection from "./directives/VIntersection";
// import VFocus from "./directives/VFocus";
import directives from "./directives";
import store from "./store";
const app = createApp(App);
// createApp(App).mount('#app')

components.forEach((component) => app.component(component.name, component));
//registration directive
// app.directive("intersection", VIntersection);
// app.directive("focus", VFocus);
directives.forEach((directive) => app.directive(directive.name, directive));
app.use(router).use(store).mount("#app");
