<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { toRefs,computed } from "vue";
export default {
    name: "IconSvg",
    data() {
        return {};
    },
    props: {
        iconClass: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const { iconClass } = toRefs(props),
            iconName  = computed(() => `#icon-${iconClass.value}`); 
        return {
            iconName
        };
    },
    components: {},
};
</script>

<style lang="scss" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
