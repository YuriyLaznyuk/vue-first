<template>
  <input
      :value="modelValue"
      @input="updateInput"
      class="input" type="text">

<!--  <input-->
<!--      :value="value"-->
<!--      @input="updateInput"-->
<!--      class="input" type="text">-->

</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number]
    // value: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
      // this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 300px;
  border: 2px solid gray;
  margin: 20px;
  padding: 10px;
  font-size: 20px;

}
</style>