<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form @submit.prevent="get(title)">
      <input @input="title=$event.target.value" class="form-control me-2" name="search" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </div>
</nav>

<router-link to="/list">리스트페이지로 이동하기</router-link>

<router-view :blogContents="blogContents"></router-view>
<h1 class="title">{{responseTitle}}</h1>
</template>

<script>

import blogContents from './blogContents.js';

export default {
  name: 'App',
  components:{
    
  },data(){
    return {
      blogContents,
      title:"",
      responseTitle:""
    }
  },
  methods:{
    get(a) {
      console.log(a);
      this.axios({
        headers: {
  'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Accept': '*/*'
},
        method:'get',
        url:'/vue/api?search='+a
        
      }).then((res)=>{
        this.responseTitle = res.data;
      })
    },

  },

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
