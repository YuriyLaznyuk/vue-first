<template>
  <div class="post">
    <div>
      <div><strong>Id:</strong>{{ post.id }}</div>
      <div><strong>Title:</strong>{{ post.title }}</div>
      <div><strong>Description:</strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <MyButton @click="$emit('remove', post)">Delete</MyButton>
    </div>
  </div>
</template>

<script>
// import MyButton from "./UI/MyButton";
export default {
  name: "PostItem",
  // components: {MyButton},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
.post {
  margin: 20px;
  padding: 17px;
  border: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
