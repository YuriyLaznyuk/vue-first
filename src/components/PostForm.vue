<template>
  <div class="form">
    <form class="form__elem" @submit.prevent>
      <h4 class="form__elem-title">POST</h4>
      <!--    <input @input="post.title=$event.target.value"-->
      <!--           v-bind:value="post.title" class="input"-->
      <!--           type="text" placeholder="title">-->

      <!--    <input type="text" class="input"-->
      <!--    placeholder="title"-->
      <!--    v-model="post.title">-->

      <!--      <MyInput v-focus placeholder="title" v-model="post.title" />-->
      <my-input placeholder="title" v-model="post.title" />

      <!--      <MyInput-->
      <!--          placeholder="title"-->
      <!--          v-model:value="post.title"-->
      <!--      />-->

      <!--    <input @input="post.body=$event.target.value"-->
      <!--           v-bind:value="post.body"-->
      <!--           class="input" type="text"-->
      <!--           placeholder="description">-->

      <!--    <input type="text" class="input"-->
      <!--    placeholder="description"-->
      <!--    v-model="post.body">-->

      <!--      <MyInput v-model="post.body" placeholder="description" />-->
      <my-input v-model="post.body" placeholder="description" />

      <!--      <MyInput-->
      <!--          v-model:value="post.body"-->
      <!--          placeholder="description"/>-->

      <my-button @click="createPost">Create post</my-button>
    </form>
  </div>
</template>

<script>
// import MyButton from "./UI/MyButton";
// import MyInput from "./UI/MyInput";
import MyInput from "./UI/MyInput";
export default {
  name: "PostForm",
  components: { MyInput },
  // components: {MyInput},
  // components: {MyButton},
  //model
  data() {
    return {
      post: {
        body: "",
        title: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      //create event
      this.$emit("create", this.post);
      //clear input
      this.post = {
        title: "",
        body: "",
      };
    },
  },
  // watch: {
  //   post: {
  //     handler(post) {
  //       console.log("post", post);
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style scoped>
.form {
}
.form__elem {
}
.form__elem-title {
  padding: 10px;
  text-align: center;
}
</style>
