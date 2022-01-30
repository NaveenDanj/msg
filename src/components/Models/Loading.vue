<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent width="500">
      <v-card color="primary" class="pa-3" dark>
        <v-card-text>
          Please stand by<br/>
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    
    props : ['dialog']

}
</script>