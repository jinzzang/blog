<template>
<div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">officeId</th>
          <th scope="col">officeName</th>
          <th scope="col">officeAddress</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="worker in workers" :key="worker">
          <td><router-link @click="get(worker.officeId)" :to="`/Worker/${worker.officeId}`">{{worker.officeId}}</router-link></td>
          <td>{{worker.officeName}}</td>
          <td>{{worker.officeAddress}}</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/">홈 이동하기</router-link>
</div>
</template>

<script>
export default {
    name:"Workers",
    props:{
        workers:Array
    },methods:{
        get(a) {
            console.log(a);
       this.axios({
        headers: {
  'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Accept': '*/*'
},
        method:'get',
        url:'/vue/api/worker/'+a
        
      }).then((res)=>{
        console.log(res);
        this.$emit("selectedWorker",res.data);
      })
    }
    }
}
</script>

<style>

</style>