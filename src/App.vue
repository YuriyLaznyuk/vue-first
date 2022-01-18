<template>
  <div class="app">
    <h1>Page posts</h1>
    <!--    <input type="text" v-model.number="modificatorValue">-->
    <!--    <MyButton @click="fetchPosts">Get Posts</MyButton>-->
    <MyButton @click="showDialog">Create post</MyButton>
    <MyDialog v-model:show.number="dialogVisible">
      <post-form @create="createPost" />
    </MyDialog>
    <PostList v-bind:posts="posts" @remove="removePost" v-if="!isPostLoading" />
    <div v-else>...Loading</div>
<!--    <div>...Loading</div>-->
  </div>
</template>
<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyDialog from "./components/UI/MyDialog";
import MyButton from "./components/UI/MyButton";
import axios from "axios";

export default {
  name: "App",

  components: {
    MyButton,
    MyDialog,
    PostList,
    PostForm,
  },
  //models
  data() {
    return {
      likes: 0,
      disLikes: 5,
      posts: [],
      dialogVisible: false,
      modificatorValue: "",
      isPostLoading: false,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDisLike() {
      this.disLikes += 1;
    },
    /*createPost() {*/
    /*  // e.stopPropagation();*/
    /*  // e.preventDefault();*/
    /*  const newPost = {*/
    /*    id: Date.now(),*/
    /*    title: this.title,*/
    //     body: this.body
    //
    //   }
    //   this.posts.push(newPost)
    //   this.title = '';
    //   this.body = ''
    //
    // },

    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((elem) => elem.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },

    async fetchPosts() {
      try {

          this.isPostLoading = true;
          const resp = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          this.posts = await resp.data;
          // this.isPostLoading = false;

      } catch (e) {
        console.log(e.message);
      }
      finally {
        this.isPostLoading = false;

      }
    },
  },
  //huk
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  margin: 20px;
}
</style>
