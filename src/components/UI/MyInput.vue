<template>
  <div class="title" v-if="title">{{ title }}</div>
  <input
    :value="modelValue"
    @input="updateInput"
    class="input"
    type="text"
    :placeholder="placeholder"
  />

  <!--  <input-->
  <!--      :value="value"-->
  <!--      @input="updateInput"-->
  <!--      class="input" type="text">-->
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
    // value: [String, Number]
    title: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
      // this.$emit('update:value', event.target.value)
    },
  },
};
</script>

<style scoped>
.input {
  width: 300px;
  border: 2px solid gray;
  margin: 5px 20px 20px 20px;
  padding: 10px;
  font-size: 20px;
}
.title {
  margin: 20px 20px 0 20px;
}
</style>
