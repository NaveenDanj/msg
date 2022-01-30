<template>
  <div class="d-flex justify-center">
    <div class="white pa-2 elevation-3" style="width: 70%">
      <label
        >{{item.content}}</label
      >
    </div>
  </div>
</template>

<script>
export default {
    props : ['item']
}
</script>