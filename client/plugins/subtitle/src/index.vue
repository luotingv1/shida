<!--test.vue-->
<template>
  <div class="qk-subtitle">
    {{ subtitle }}
  </div>
</template>

<script>
export default {
  name: "QkSubtitle", // 这个名字很重要，它就是未来的标签名<qk-text></qk-text>
  props: {
    subtitle: {
      type: String,
      default: "请输入文本内容(换行分段)"
    },
    font: {
      type: String,
      default: "wryh"
    }
  },
  data() {
    return {
      defaultStyle: {
        height: 40
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
