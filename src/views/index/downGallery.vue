<template>
  <div id="app" class="activity-wrap">
    <header>恭喜您成功参与活动！</header>
    <div class="down_notice">
      赶紧下载海报分享给好友或朋友圈邀请好友助力吧！
    </div>
    <div class="gallery">
      <img width="48vw" height="83vw" alt="" :src="activity.poster_oss" onerror="javascript:this.src ='../../images/error.png'">
    </div>
    <footer class="footer">
      <div class="down">
        <span>长按图片保存</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {},
};
</script>

<style lang="scss" scoped>
.activity-wrap {
    padding: 11vw 8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.activity-wrap > header {
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: bold;
    color: rgba(35, 145, 251, 1);
    text-align: center;
}
.down_notice {
    width: 55vw;
    margin-top: 5vw;
    text-align: center;
}
.gallery {
    width: 48vw;
    height: 83vw;
    margin-top: 8vw;
}
.gallery img {
    width: 100%;
    height: 100%;
}
.footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn {
    width: 50vw;
    height: 12vw;
    margin-top: 11vw;
    border-radius: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.down {
    color: rgba(0, 0, 0, 0.3);
    margin-top: 2vw;
}
</style>
