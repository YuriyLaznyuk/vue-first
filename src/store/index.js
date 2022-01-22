import { createStore } from "vuex";
import { postModule } from "./postModule";

export default createStore({
  modules: {
    posts: postModule,
  },
  state: {
    isAuth: false,
  },
  mutations: {
    changeAuth(state) {
      state.isAuth = !state.isAuth;
    },
  },
});

// export default createStore({
//   state: {
//     likes: 10,
//     isAuth: false,
//   },
//   getters: {
//     doubleLikes(state) {
//       return state.likes * 10;
//     },
//   },
//   mutations: {
//     incrementLikes(state) {
//       state.likes += 1;
//     },
//     decrementLikes(state) {
//       state.likes -= 1;
//     },
//   },
//   actions: {},
//   modules: {},
// });
