<template>
  <div>
    
    <router-link to="/detail/0"><h5>{{blogContents[0].title}}</h5></router-link>
    <p>{{blogContents[0].date}}</p>
    <router-link to="/detail/1"><h5>{{blogContents[1].title}}</h5></router-link>
    <p>{{blogContents[1].date}}</p>
    <router-link to="/detail/2"><h5>{{blogContents[2].title}}</h5></router-link>
    <p>{{blogContents[2].date}}</p>

  </div>
  
</template>

<script>


export default {
  data(){
    return {
      
    }
  },
  props:{
    blogContents:Array
  }
}
</script>

<style>

</style>