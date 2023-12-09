<template>
  <el-form-item label="文本内容：">
    <el-input type="textarea" :rows="8" placeholder="请输入文本内容，换行分段" v-model="tempText"> </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "attr-qk-subtitle",
  props: {
    subtitle: String
  },
  data() {
    return {
      tempText: ""
    };
  },
  mounted() {
    this.tempText = this.subtitle;
  },
  watch: {
    text() {
      this.tempText = this.subtitle;
    },
    tempText() {
      this.$emit("update:subtitle", this.tempText);
    }
  }
};
</script>

<style scoped></style>
