<template>
  Hello work
  <div class="app">
    <form @submit.prevent>
      <h4></h4>
      <input @input="title=$event.target.value"
             v-bind:value="title" class="input"
             type="text" placeholder="title">
      <input @input="body=$event.target.value"
             v-bind:value="body"
             class="input" type="text"
             placeholder="description">
      <button v-on:click="createPost" class="button">Create post</button>
    </form>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>Title:</strong>{{ post.title }}</div>
      <div><strong>Description:</strong>{{ post.body }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  //models
  data() {
    return {
      likes: 0,
      disLikes: 5,
      posts: [
        {id: 1, title: 'JS1', body: 'description 1'},
        {id: 2, title: 'JS2', body: 'description 2'},
        {id: 3, title: 'JS3', body: 'description 3'},
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDisLike() {
      this.disLikes += 1;
    },
    createPost() {
      // e.stopPropagation();
      // e.preventDefault();
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body

      }
      this.posts.push(newPost)
      this.title='';
      this.body=''

    },


  }


}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

.post {
  margin: 20px;
  padding: 17px;
  border: 2px solid green;
}

.input {
  width: 300px;
  border: 2px solid gray;
  margin: 20px;
  padding: 10px;
  font-size: 20px;

}

.app {
  margin: 20px;
}

.button {
  margin: 20px;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>