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
        <tr>
          <td>{{selectedWorker.officeId}}</td>
          <td>{{selectedWorker.officeName}}</td>
          <td>{{selectedWorker.officeAddress}}</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/">홈 이동하기</router-link>
</div>
</template>

<script>
export default {
    name:'Worker',
    data(){
        return {
            selectedId: 0,
            selectedWorker:{}
        }
    }
}
</script>

<style>

</style>