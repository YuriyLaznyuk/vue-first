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

    <my-button @click='createPost'>Create post</my-button>
  </form>

</div>
</template>

<script>
// import MyButton from "./UI/MyButton";
export default {
  name: "PostForm",
  // components: {MyButton},
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


.input {
  width: 300px;
  border: 2px solid gray;
  margin: 20px;
  padding: 10px;
  font-size: 20px;

}

</style>