<template>
  <div>
    <button @click="modelOpen = true">弹出一个模态窗口</button>
    <teleport to="body">
      <div v-if="modelOpen" class="model">
        <div>
          这是一个弹窗 我的父元素是body
          <button @click="modelOpen = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "modelButton",
  data() {
    return {
      modelOpen: false,
    };
  },
  setup: () => {},
});
</script>
<style scoped>
.model {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.model div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>
