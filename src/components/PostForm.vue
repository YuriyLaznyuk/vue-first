<template>
<div>
  <form @submit.prevent>
    <h4></h4>
<!--    <input @input="post.title=$event.target.value"-->
<!--           v-bind:value="post.title" class="input"-->
<!--           type="text" placeholder="title">-->

    <input type="text" class="input"
    placeholder="title"
    v-model="post.title">
<!--    <input @input="post.body=$event.target.value"-->
<!--           v-bind:value="post.body"-->
<!--           class="input" type="text"-->
<!--           placeholder="description">-->
    <input type="text" class="input"
    placeholder="description"
    v-model="post.body">

    <button @click='createPost'  class="button">Create post</button>
  </form>

</div>
</template>

<script>
export default {
  name: "PostForm",
  //model
  data(){
   return{
     post:{
       body:'',
       title:''
     }
   }
  },
  methods:{
    createPost(){
      this.post.id=Date.now();
      //create event
      this.$emit('create',this.post)
      //clear input
      this.post={
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
.button {
  margin: 20px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}

.input {
  width: 300px;
  border: 2px solid gray;
  margin: 20px;
  padding: 10px;
  font-size: 20px;

}

</style>