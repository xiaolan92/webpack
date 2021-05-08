<template>
  <div class="activity-wrap">
    <header>恭喜您成功参与活动！</header>
    <div class="down_notice">
      赶紧下载海报分享给好友或朋友圈邀请好友助力吧！
    </div>
    <div class="gallery">
      <img width="48vw" height="83vw" alt="" :src="activity.poster_oss" onerror="this.src ='./images/error.png'">
    </div>
    <footer class="footer">
      <div class="down">
        <a>长按图片保存</a>
      </div>
      <div class="btn look" @click="toRank">
        查看助力榜单
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
    height: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.btn {
    width: 40vw;
    height: 12vw;
    margin-top: 5vw;
    border-radius: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.down {
    margin-top: 2vw;
}
.down > a {
    color: rgba(0, 0, 0, 0.3);
    text-decoration: none;
}
.look {
    color: rgba(35, 145, 251, 1);
    border: 1px solid rgba(35, 145, 251, 1);
}
</style>
