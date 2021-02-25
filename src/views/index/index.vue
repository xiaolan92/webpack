<template>
  <div class="content">
    {{msg}}
    <span @click="confirm">点击</span>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
@Component
export default  class Index extends Vue{
  msg:string ="3233" ;
  $message: any;
  
  

    confirm ():void {
    this.$message.success({
      message:"notice"
    });
  }

}
</script>

<style lang="scss" scoped>

</style>
