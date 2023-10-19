<template>
    <nav class="nav">
      <ul class="nav__lists">
        <li class="nav__item" @click="getList()">
          <router-link to="/Workers" @click="getList()">노동자들</router-link>
        </li>
        <li class="nav__item">
          바나나
        </li>
        <li class="nav__item">
          오렌지
        </li>
        <li class="nav__item">
          <form @submit.prevent="get(title)">
          <input @input="title=$event.target.value" class="form-control me-2" name="search" type="search" placeholder="Search" aria-label="Search">
          </form>
        </li>
      </ul>
    </nav>
    
    <router-view :blogContents="blogContents" :workers="workers" @selectedWorker="setSelectedWorker(n)"></router-view>
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
      responseTitle:"",
      workers:[],
      selectedWorker:{}
    }
  },
  methods:{
    setSelectedWorker(n){
      console.log('App:'+n);
      this.selectedWorker=n;
    }, 
    get(a) {
      console.log(a);
      this.axios({
        headers: {
  'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Accept': '*/*'
},
        method:'get',
        url:'/vue/api?search='+a,
        timeout:5000
        
      }).then((res)=>{
        this.responseTitle = res.data;
      })
    },
    getList() {
      
      this.axios({
        headers: {
  'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Accept': '*/*'
},
        method:'get',
        url:'/vue/api/workers'
        
      }).then((res)=>{
        this.workers=res.data;
      })
    }

  },

}

</script>

<style>

@import "./assets/reset.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
  width:100%;
  height: 10rem;
  display: flex;
  justify-content: center;
}
.nav__lists{
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav__item {
  padding:3rem;
}
</style>
