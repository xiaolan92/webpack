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
    data (){
        return {
            name:"xiaolan"
        };
    }
    
};
</script>
<style lang="scss">
@import "./init/scss/reset.scss";


</style>


