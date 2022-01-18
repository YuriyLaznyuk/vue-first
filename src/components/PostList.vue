<template>
    <div v-if="posts.length > 0">
<!--  <div v-show="posts.length > 0">-->
    <h3>Post list</h3>
    <post-item
      v-for="post in posts"
      :post="post"
      v-bind:key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
    <h3 v-else style="color: red">No posts</h3>
<!--  <h3 v-show="posts.length === 0" style="color: red">No posts</h3>-->
</template>

<script>
import PostItem from "./PostItem";

export default {
  name: "PostList",
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
