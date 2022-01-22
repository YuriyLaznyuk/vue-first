<template>
  <div class="navbar">
    <div class="navbar__title">Vue 3 vue-first</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/')">Main</MyButton>
      <MyButton @click="$router.push('/posts')">Posts</MyButton>
      <MyButton @click="$router.push('/about')">About</MyButton>
      <MyButton @click="$router.push('/store')">Store</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton";
export default {
  name: "Navbar",
  components: { MyButton },
};
</script>

<style scoped>
.navbar {
  height: 100px;
  background-color: antiquewhite;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: center;
  text-align: center;
}
.navbar__title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>
