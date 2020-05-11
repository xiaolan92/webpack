<template>
  <div class="routerView">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>
<script>
export default {
    
};
</script>
<style lang="scss">
@import "./init/scss/reset.scss";


</style>


