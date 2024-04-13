<template>
  <router-view />
  <CommonLoader v-if="$store.state.loader"/>
</template>

<script>
  import CommonLoader from "./components/common/CommonLoader.vue";

  export default {
    name: 'App',
    components: {
      CommonLoader
    }
  }
</script>

<style>
  :root {
    --bg-01: #e9e9e9;
    --bg-02: #f8f8f8;
    --bg-opacity: #f5f5f559;
    --first-color: #0166d3;
    --text-color: #2e4358;
  }

  html, body {
    box-sizing: border-box;
    font-size: 10px;
    font-family: "Roboto", sans-serif;
  }

  a {
    color: var(--first-color)!important;
  }

  a:hover {
    color: #007bff;
    text-decoration: none!important;
  }
</style>
