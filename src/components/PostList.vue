<template>
<div>
<h3>Post list</h3>
<post-item
    v-for="post in posts"
    :post="post"
    v-bind:key="post.id"
    @remove="$emit('remove', post)"

/>
</div>
</template>

<script>
import PostItem from "./PostItem";

export default {
  name: "PostList",
  components: {PostItem},
  props:{
    posts:{
      type:Array,
      required:true
    }
  }

}
</script>

<style scoped>
</style>