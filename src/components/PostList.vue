<template>
<div>
  <div class="post" v-for="post in posts" :key="post.id">
    <div><strong>Title:</strong>{{ post.title }}</div>
    <div><strong>Description:</strong>{{ post.body }}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "PostList",
  props:{
    posts:{
      type:Array,
      required:true
    }
  }

}
</script>

<style scoped>
.post {
  margin: 20px;
  padding: 17px;
  border: 2px solid green;
}
</style>