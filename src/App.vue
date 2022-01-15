<template>
  Hello work
  <div>
    <div class="post">
      <div>
        <strong>Title:</strong> Post about JS
      </div>
      <div>
        <strong>Description:</strong> JS universal language
      </div>
    </div>
    <div class="post">
      <div>
        <strong>Title:</strong> Post about JS
      </div>
      <div>
        <strong>Description:</strong> JS universal language
      </div>
    </div>
    <div class="post">
      <div>
        <strong>Title:</strong> Post about JS
      </div>
      <div>
        <strong>Description:</strong> JS universal language
      </div>
    </div>


  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      likes: 0,
      disLikes: 5,
      posts:[
        {id:1,title:'JS1',body:'description 1'},
        {id:2,title:'JS2',body:'description 2'},
        {id:3,title:'JS3',body:'description 3'},
      ]
    }
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDisLike() {
      this.disLikes += 1;
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

.post {
  margin: 20px;
  padding: 17px;
  border: 2px solid green;
}

</style>