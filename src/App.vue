<template>
  <v-layout>
    <v-app-bar color="grey-lighten-2">
      <v-app-bar-title>
        ifandonlyif-admin
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent>
      <v-list>
        <router-link to="/reports">
          <v-list-item
            prepend-icon="mdi-alert-plus"
            title="未審核專案"
            value="alert-plus"
          ></v-list-item>
        </router-link>
        <router-link to="/verified">
          <v-list-item
            prepend-icon="mdi-alert-circle-check"
            title="已審核專案"
            value="circle-check"
          ></v-list-item>
        </router-link>
        <router-link to="/verified">
          <v-list-item
            prepend-icon="mdi-account-cog"
            title="Discord 帳號管理"
            value="account-cog"
          ></v-list-item>
        </router-link>
        <router-link to="/verified">
          <v-list-item
            prepend-icon="mdi-cog-outline"
            title="管理者帳號設定"
            value="cog-outline"
          ></v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-main style="max-width: 1200px" class="ma-5">
        <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<style>
  nav a {
    color: inherit;
    text-decoration: inherit;
  }
  /*.text-h4, .text-h5 {*/
  /*  margin: 20px;*/
  /*}*/
</style>

<script setup lang="ts">
</script>
