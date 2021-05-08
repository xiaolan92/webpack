<template>
  <div class="reward-container">
    <header>
      <span class="header-title">恭喜您完成任务！</span>
      <div>
        <span>赶紧扫码加客服微信</span>
        <span>发送领奖码领取奖励吧！</span>
      </div>
    </header>
    <div class="qr-container">
      <img :src="rewardData.codeImg">
    </div>
    <div class="reward-code">
      <span>领奖码:</span>
      <span class="code" ref="code">{{ rewardData.code }}</span>
      <div class="copy-btn" @click="copy">
        复制
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    components: {

    }
};
</script>

<style lang="scss" scoped>
.reward-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
header {
    margin-top: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header-title {
    font-size: 6vw;
    color: rgba(35, 145, 251, 1);
    font-weight: bold;
    letter-spacing: 4px;
}
header > div {
    display: flex;
    flex-direction: column;
    margin-top: 5vw;
    text-align: center;
}
.qr-container {
    width: 53vw;
    height: 53vw;
    margin-top: 8vw;
}
.qr-container img {
    width: 100%;
    height: 100%;
}
.reward-code {
    margin: 35vw 0  15vw 0;
    display: flex;
    align-items: center;
    color: rgba(35, 145, 251, 1);
}
.code {
    margin: 0 6vw 0 2vw;
}
.copy-btn {
    width: 16vw;
    height: 12vw;
    text-align: center;
    line-height: 12vw;
    color: white;
    border-radius: 1vw;
    background: rgba(35, 145, 251, 1);
}
</style>
