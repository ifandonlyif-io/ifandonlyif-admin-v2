<template>
  <div class="text-h4">
    審核 NFT 專案
  </div>
  <div
    class="text-h6">
    專案連結：<a :href="`${ project.httpAddress }`">{{ project.httpAddress }}</a>
  </div>
  <div class="text-h6">
    回報時間：{{ project.createdAt }}
  </div>
  <v-card>
  </v-card>
</template>

<script>

import {ProjectService} from "../services/ProjectService";

let service = new ProjectService();

export default {
  name: "ReportProjectView",
  data: function () {
    return {
      project: {}
    }
  },
  async created() {
    this.project = await service.getProject(this.$route.params.id);
    console.log(this.project);
  }
}
</script>

<style scoped>

</style>
