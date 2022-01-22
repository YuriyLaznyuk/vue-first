<template>
  <div class="post">
    <h1>Page posts Composition</h1>
    <h1>{{ likes }}</h1>
    <MyButton @click="addLike">add like</MyButton>
    <input
      class="post__search"
      v-focus
      title="Search"
      v-model="searchQuery"
      placeholder="...search"
    />
    <div class="post__btns">
      <!--      <MyButton @click="showDialog">Create post</MyButton>-->
      <MySelect v-model="selectedSort" :options="sortOptions" />
    </div>
    <!--    <MyDialog v-model:show-m="dialogVisible">-->
    <!--      <post-form @create="createPost" />-->
    <!--    </MyDialog>-->

    <PostList v-bind:posts="sortedAndSearch" v-if="!isPostLoading" />

    <div v-show="isPostLoading">...Loading</div>

    <!--    <div v-intersection="" class="observer"></div>-->
  </div>
</template>
<script>
// import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
// import MyDialog from "../components/UI/MyDialog";
// import MyButton from "../components/UI/MyButton";
// import axios from "axios";
import MySelect from "../components/UI/MySelect";
import { ref } from "vue";
import MyButton from "../components/UI/MyButton";
import { usePosts } from "../hooks/usePosts";
import useSortedPosts from "../hooks/useSortedPosts";
import useSortedAndSearch from "../hooks/useSortedAndSearch";
// import MyInput from "../components/UI/MyInput";

export default {
  name: "PostPageComposition",

  components: {
    MyButton,
    // MyInput,
    MySelect,
    // MyButton,
    // MyDialog,
    PostList,

    // PostForm,
  },
  //models
  data() {
    return {
      dialogVisible: false,

      sortOptions: [
        { value: "title", name: "sort title" },
        { value: "body", name: "sort body" },
      ],
    };
  },
  //--CompositionApi--//
  setup() {
    const { totalPages, isPostLoading, posts } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearch } = useSortedAndSearch(sortedPosts);
    const likes = ref(2);
    const addLike = () => {
      likes.value += 1;
    };
    return {
      likes,
      addLike,
      totalPages,
      isPostLoading,
      posts,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearch,
    };
  },
  methods: {},

  //watch
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
