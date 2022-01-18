<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped>
.button {
  margin: 20px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>
