<template>
  <div class="dialog" v-if="showM === true" @click.stop="hideDialog">
    <div @click.stop class="dialog__container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "../../mixins/toggleMixin";

export default {
  name: "MyDialog",
  mixins: [toggleMixin],

  // props: {
  //   showM: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  // methods:{
  //   hideDialog(){
  //     this.$emit('update:showM',false)
  //   }
  // }
};
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog__container {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
}
</style>
