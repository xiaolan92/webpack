<template>
  <div id="rankApp">
    <header class="header" v-if="rankData.cst_info">
      <div class="invited">
        <span>已邀请人数:</span>
        <span>{{ rankData.cst_info.already }}</span>
      </div>
      <div class="can-invite">
        <span>剩余邀请人数:</span>
        <span>{{ rankData.cst_info.wait }}</span>
      </div>
      <div class="my">
        <div class="info">
          <img :src="rankData.cst_info.external_user_avatar">
          <span>{{ rankData.cst_info.external_user_name }}</span>
        </div>
        <div class="ranking">
          <div class="ranking-num">
            {{ rankData.cst_info.c_rank }}
          </div>
          <div class="ranking-word">
            当前排名
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="list-header">
        <div class="friend-help" :class="{'currentTab':current === 1}" @click="current = 1">
          <div>好友助力情况</div>
        </div>
        <div class="ranking-list" :class="{'currentTab':current === 2}" @click="current = 2">
          <div>助力排行榜</div>
        </div>
      </div>
      <div class="help-list" v-if="current === 1 ">
        <div class="no-join" v-if="rankData.cst_info && rankData.cst_info.already_aware === 1">
          <span class="no-join_title">恭喜你完成助力！</span>
          <img class="success-img" src="@images/success.png" alt="">
          <div class="connect" @click="reward">
            联系客服领奖
          </div>
        </div>
        <div v-if="rankData.cst_info && rankData.cst_info.already_aware === 2">
          <div class="help-list_header">
            <span>用户</span>
            <span>助力时间</span>
          </div>
          <div class="list-container" v-if="rankData.helpInfo">
            <div class="list-item" v-for="(item,index) of helpList" :key="index">
              <div>
                <img class="avater" :src="item. external_user_avatar">
                <span class="nick_name" v-cloak>{{ item.external_user_name }}</span>
              </div>
              <div class="timer" v-cloak>
                {{ item.create_time }}
              </div>
            </div>
          </div>
          <div v-if="!helpList.length>0" class="no-data">
            <span>暂无数据</span>
          </div>
        </div>
      </div>
      <div class="help-list" v-if="current === 2">
        <div class="help-list_header" style="padding: 0 4vw;">
          <span>排名</span>
          <span>用户</span>
          <span>助力人数</span>
        </div>
        <div class="list-container">
          <div v-if="rankData.rank_list.length>0">
            <div class="list-item rank-item" v-for="(item,index) of rankData.rank_list" :key="index">
              <div class="ranking-num" style="flex: 1;" v-cloak>
                {{ addZreo(index+1) }}
              </div>
              <div style="width: 40vw;">
                <img class="avater" :src="item.parent_external_user_avatar">
                <span class="nick_name" v-cloak>{{ item.parent_external_user_name }}</span>
              </div>
              <div class="total" v-cloak>
                {{ item.total }}
              </div>
            </div>
          </div>
          <div v-else class="no-data">
            <span>暂无数据</span>
          </div>
        </div>
      </div>
      <div class="mark" ref="mybox" id="rankpp" />
    </main>
  </div>
</template>

<script>
export default {
    data() {
        return {
            rankData: {
                helpInfo: {
                    hasNextPage: true,
                },
            },
            helpList: [],
            current:2,
            page: 1,
            size: 20,
            isLoading: false,
        };
    },
    methods: {
        addZreo (num){
            return  String(num).padStart(2,"0");

        },
    },
    components: {},
};
</script>

<style lang="scss" scoped>
#rankApp {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header {
    width: 100%;
    height: 50vw;
    box-sizing: border-box;
    padding: 0 4vw;
    color: white;
    position: relative;
    display: inline-block;
    background: url('../../images/bg.png') no-repeat 100% 100% / cover;
}
.header > .invited {
    padding-top: 27vw;
    font-size: 20px;
    font-weight: bold;
}
.my {
    width: 92vw;
    height: 18vw;
    border-radius: 1vw;
    box-sizing: border-box;
    padding: 0 4vw;
    color: black;
    z-index: 99;
    position: absolute;
    top: 45vw;
    left: 4vw;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1vw 3vw 0 rgba(185, 185, 184, 0.4);
}
.info {
    display: flex;
    align-items: center;
}
.info > img {
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
}
.info > span {
    margin-left: 4vw;
    font-weight: bold;
}
.ranking {
    text-align: center;
}
.ranking > .ranking-num {
    font-weight: bold;
}
.ranking > .ranking-word {
    color: rgba(153, 153, 153, 1);
}
.list-header {
    margin: auto;
    margin-top: 13vw;
    width: 65vw;
    height: 16vw;
    font-weight: bold;
    box-sizing: border-box;
    padding-top: 6vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.currentTab {
    position: relative;
    color: rgba(255, 183, 67, 1);
    font-size: 5vw;
    font-weight: bolder;
}
.currentTab:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -9px;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom: 8px solid rgba(255, 183, 67, 1);
}
.help-list {
    width: 92vw;
    margin: 6vw auto;
    display: flex;
    flex-direction: column;
    border-radius: 1vw;
    overflow: hidden;
    box-shadow: 0 1vw 3vw 0 rgba(185, 185, 184, 0.4);
}
.help-list_header {
    width: 100%;
    height: 10vw;
    box-sizing: border-box;
    padding: 0 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(242, 242, 242, 1);
}
.mark {
    width: 100%;
    height: 2vh;
    background: transparent;
}
.list-item {
    width: 100%;
    height: 13vw;
    box-sizing: border-box;
    padding: 0 6vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.list-item:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #e5e5e5;
}

@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .list-item:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #e5e5e5;
        transform: scaleY(0.5);
    }
}

@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .list-item:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #e5e5e5;
        transform: scaleY(0.33);
    }
}
.list-item:last-child {
    border: none;
}
.list-item > div {
    display: flex;
    align-items: center;
}
.list-item .avater {
    width: 9vw;
    height: 9vw;
    display: inline-block;
    border-radius: 50%;
}
.list-item .nick_name {
    margin-left: 3vw;
}
.list-item .total {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: red;
}
.rank-item:nth-child(3) ~ div.rank-item > .total {
    color: black;
}
.help-ranking {
    width: 92vw;
    margin: auto;
}
.ranking-num {
    font-style: italic;
    font-weight: bold;
}
.no-join {
    width: 92vw;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 1vw;
    padding-top: 20vw;
    min-height: calc(100vh - 75vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(248, 249, 249, 1);
}
.no-join_title {
    font-size: 5vw;
    color: rgba(102, 102, 102, 1);
}
.no-join_img {
    width: 25vw;
    height: 25vw;
    margin-top: 8vw;
}
.success-img {
    width: 30vw;
    height: 22vw;
    padding-top: 8vw;
}
.connect {
    width: 76vw;
    height: 12vw;
    margin: 14vw 0 10vw 0;
    border-radius: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: rgba(249, 106, 79, 1);
}
.no-data {
    margin: 10vw auto;
    margin-left: 50vw;
    transform: translateX(-50%);
}
</style>
