<template>
  <div class="d-flex justify-center">
    <div class="white pa-2 elevation-3 mb-5" style="width: 70%">
      
      <center><label>{{item.content}}</label></center>
    </div>
  </div>
</template>

<script>
export default {
    props : ['item']
}
</script>