<template>
  <div v-if="posts.length > 0">
    <!--  <div v-show="posts.length > 0">-->
    <h3>Post list</h3>
    <!--anime-->
    <transition-group name="post">
      <post-item
        v-for="post in posts"
        :post="post"
        v-bind:key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
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

<style scoped>
/*//anime*/
.post-item {
  display: inline-block;
  margin-right: 10px;
}
.post-enter-active,
.post-leave-active {
  transition: all 0.4s ease;
}
.post-enter-from,
.post-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-move {
  transition: transform 0.5s ease;
}
</style>
