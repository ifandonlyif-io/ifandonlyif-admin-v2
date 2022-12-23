<template>
  <div class="text-h4">
    未審核的專案
  </div>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">專案網址</th>
        <th class="text-left">回報時間</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="project in projects">
        <td>
          <router-link link :to="`/report/${project.id}`">
            {{ project.httpAddress }}
          </router-link>
        </td>
        <td>{{ project.createdAt}}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style>

</style>

<script lang="ts">
  import { defineComponent } from "vue";
  import {ProjectService} from "@/services/ProjectService";

  let projects = await new ProjectService().getProjects();

  export default defineComponent({
    name: "ReportProjectListView",
    data: function () {
      return {
        projects: projects,
      }
    }
  })

</script>
