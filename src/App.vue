<template>
  <div class="app">
    <h1>Page posts</h1>
    <!--    <input type="text" v-model.number="modificatorValue" />-->
    <!--    <MyButton @click="fetchPosts">Get Posts</MyButton>-->
    <MyInput title="Search" v-model="searchQuery" placeholder="...search" />
    <div class="app__btns">
      <MyButton @click="showDialog">Create post</MyButton>
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <MyDialog v-model:show-m="dialogVisible">
      <post-form @create="createPost" />
    </MyDialog>
    <!--    <PostList v-bind:posts="posts" @remove="removePost" v-if="!isPostLoading" />-->
    <!--    //use computed-->

    <PostList
      v-bind:posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />

    <!--    <div v-else>...Loading</div>-->
    <div v-show="isPostLoading">...Loading</div>
  </div>
</template>
<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyDialog from "./components/UI/MyDialog";
import MyButton from "./components/UI/MyButton";
import axios from "axios";
import MySelect from "./components/UI/MySelect";
import MyInput from "./components/UI/MyInput";

export default {
  name: "App",

  components: {
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostList,
    PostForm,
  },
  //models
  data() {
    return {
      searchQuery: "",
      likes: 0,
      disLikes: 5,
      posts: [],
      dialogVisible: false,
      modificatorValue: "",
      isPostLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "sort title" },
        { value: "body", name: "sort body" },
      ],
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
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  //huk
  mounted() {
    this.fetchPosts();
  },
  //watch
  // watch: {
  //   selectedSort(newValue) {
  //     this.posts.sort((post1, post2) => {
  //       // return post1[this.selectedSort].localeCompare(post2[this.selectedSort]);
  //       return post1[newValue]?.localeCompare(post2[newValue]);
  //     });
  //   },
  // },
  //computed
  computed: {
    sortedPosts() {
      return [...this.posts]?.sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((elem) =>
        elem.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
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
.app__btns {
  display: flex;
  justify-content: space-between;
}
</style>
