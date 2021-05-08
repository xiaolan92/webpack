<template>
  <div id="wrapper" class="wrapper">
    <img src="@images/notfound.png">
    <span class="word">{{ result.title }}</span>
    <span class="detail" v-cloak>{{ result.error_msg }}</span>
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
.wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -10vh;
}
.wrapper img {
    width: 13vw;
    height: 13vw;
}
.word {
    margin-top: 3vh;
    font-weight: bold;
}
.detail {
    margin-top: 1vh;
}
</style>
