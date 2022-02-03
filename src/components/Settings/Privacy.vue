<template>
  <v-expansion-panel-content class="pa-3">
    <div
      class="d-flex justify-space-between pa-2"
      style="
        border-bottom-width: 1px;
        border-bottom-color: gray;
        border-bottom-style: solid;
      "
    >
      <label class="font-weight-medium">Description</label>

      <div style="width: 150px">
        <v-select
          outlined
          dense
          value="Everyone"
          :items="['Everyone', 'Nobody']"
        />
      </div>
    </div>

    <div
      class="d-flex justify-space-between pa-2 my-auto"
      style="
        border-bottom-width: 1px;
        border-bottom-color: gray;
        border-bottom-style: solid;
      "
    >
      <label class="font-weight-medium my-auto">Last Seen</label>
      <v-switch outlined dense />
    </div>

    <div
      class="d-flex justify-space-between pa-2 my-auto"
      style="
        border-bottom-width: 1px;
        border-bottom-color: gray;
        border-bottom-style: solid;
      "
    >
      <label class="font-weight-medium my-auto">Read Receipt</label>
      <v-switch outlined dense />
    </div>

    <div
      class="d-flex justify-space-between pa-2"
      style="
        border-bottom-width: 1px;
        border-bottom-color: gray;
        border-bottom-style: solid;
      "
    >
      <label class="font-weight-medium">Group Invite</label>

      <div style="width: 150px">
        <v-select
          outlined
          dense
          value="Everyone"
          :items="['Everyone', 'Nobody']"
        />
      </div>
    </div>
  </v-expansion-panel-content>
</template>