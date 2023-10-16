<template>
  
  <div class="container-fluid">
    <h4>상세페이지</h4>
    <h5>{{blogContents[$route.params.id].title}}</h5>
    <p>{{blogContents[$route.params.id].content}}</p>
  </div>
</template>

<script>
export default {
  props:{
    blogContents:Array
  }
}
</script>

<style>

</style>