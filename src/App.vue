<template>
  Hello work
  <div>
<!--    <button v-on:click="addLike">Like</button>-->
    <button @click="addLike">Like</button>
    <button @click="addDisLike">Dis-Like</button>
<!--    <button v-on:click="addDisLike">Dis-Like</button>-->
  </div>
  <div>
    <div>quantity likes{{ likes }}</div>
    <div>quantity dis-likes{{ disLikes }}</div>
  </div>

</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      likes: 0,
      disLikes: 5
    }
  },
  methods:{
    addLike(){
this.likes+=1;
    },
    addDisLike(){
this.disLikes+=1;
    }
  }


}
</script>

<style scoped>

</style>