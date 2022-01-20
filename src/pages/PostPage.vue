<template>
  <div class="post">
    <h1>Page posts</h1>
    <!--    <input type="text" v-model.number="modificatorValue" />-->
    <!--    <MyButton @click="fetchPosts">Get Posts</MyButton>-->
    <input
      class="post__search"
      v-focus
      title="Search"
      v-model="searchQuery"
      placeholder="...search"
    />
    <div class="post__btns">
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
    <!--    <div class="pages__wrapper">-->
    <!--      <div-->
    <!--        class="pages__wrapper-page"-->
    <!--        v-bind:key="page"-->
    <!--        v-for="page in totalPages"-->
    <!--        :class="{-->
    <!--          'current-page': page === this.page,-->
    <!--        }"-->
    <!--        @click="changePage(page)"-->
    <!--      >-->
    <!--        {{ page }}-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    //** bottom page observer**//-->
    <!--    <div ref="observer" class="observer"></div>-->
    <div v-intersection="loadAllPosts" class="observer"></div>
  </div>
</template>
<script>
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyDialog from "../components/UI/MyDialog";
import MyButton from "../components/UI/MyButton";
import axios from "axios";
import MySelect from "../components/UI/MySelect";
// import MyInput from "../components/UI/MyInput";

export default {
  name: "PostPage",

  components: {
    // MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostList,
    PostForm,
  },
  //models
  data() {
    return {
      page: 1,
      limit: 10,
      totalPages: 0,
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
    // changePage(page) {
    //   this.page = page;
    //   // this.fetchPosts();
    // },

    async fetchPosts() {
      try {
        // this.isPostLoading = true;
        const resp = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${this.page}_limit=${this.limit}`
          // `https://jsonplaceholder.typicode.com/posts?`,
          // {
          //   params: {
          //     _page: this.page,
          //     _limit: this.limit,
          //   },
          // }
        );
        this.totalPages = Math.ceil(resp.headers["x-total-count"] / this.limit);
        this.posts = await resp.data;
        // this.isPostLoading = false;
      } catch (e) {
        console.log(e.message);
      } finally {
        this.isPostLoading = false;
      }
    },

    async loadAllPosts() {
      try {
        this.page += 1;
        // this.isPostLoading = true;
        const resp = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${this.page}_limit=${this.limit}`
          // `https://jsonplaceholder.typicode.com/posts?`,
          // {
          //   params: {
          //     _page: this.page,
          //     _limit: this.limit,
          //   },
          // }
        );
        this.totalPages = Math.ceil(resp.headers["x-total-count"] / this.limit);
        this.posts = [...this.posts, ...resp.data];
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
    // console.log("ref ", this.$refs.observer);
    // this.loadAllPosts();

    // const options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // const callback = (entries, observer) => {
    //   console.log("entries", entries, "observer", observer);
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     console.log("YES");
    //     this.loadAllPosts();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
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

  //watch
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
  },

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
.pages__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pages__wrapper-page {
  padding: 5px;
  border: 1px solid;
  margin: 5px;
  cursor: pointer;
}
.pages__wrapper-page:hover {
  background: antiquewhite;
}
.current-page {
  border: 3px solid;
}
.observer {
  height: 30px;
  background: antiquewhite;
}
.post__search {
  margin: 10px 0 0 0;
  font-size: 20px;
  padding: 2px;
}
</style>
