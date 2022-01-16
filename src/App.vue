<template>
  Hello work
  <div class="app">
    <post-form
    @create="createPost"/>
    <PostList v-bind:posts="posts"/>


  </div>
</template>
<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export default {
  name: 'App',

  components: {
    PostList, PostForm
  },
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

    }
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDisLike() {
      this.disLikes += 1;
    },
    /*createPost() {*/
    /*  // e.stopPropagation();*/
    /*  // e.preventDefault();*/
    /*  const newPost = {*/
    /*    id: Date.now(),*/
    /*    title: this.title,*/
    //     body: this.body
    //
    //   }
    //   this.posts.push(newPost)
    //   this.title = '';
    //   this.body = ''
    //
    // },

    createPost(post){
this.posts.push(post)
    }


  }


}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}


.app {
  margin: 20px;
}

</style>