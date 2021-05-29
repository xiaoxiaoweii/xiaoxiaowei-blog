<template>
  <p>{{ test }}</p>
  <p>{{ doubleTest }}</p>
  <p ref="desc"></p>
  <!-- 模态窗口 teleport -->
  <model-button></model-button>
  <!-- emits选项 -->
  <emits @click="onClick"></emits>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  reactive,
  computed,
  onMounted,
  onUnmounted,
  toRefs,
} from "vue";
import ModelButton from "./modelButton.vue";
import emits from "./emits.vue";
export default defineComponent({
  name: "HelloWorld",
  components: {
    ModelButton,
    emits,
  },
  setup: () => {
    // counter相关
    const { test, doubleTest } = useCounter();
    // 使用元素引用
    const desc = ref(null);
    return { test, doubleTest, desc };
  },
  methods: {
    onClick() {
      console.log("clickme");
    },
  },
});

function useCounter() {
  const data: any = reactive({
    test: 1,
    doubleTest: computed(() => data.test * 2),
  });
  let timer: any;
  onMounted(() => {
    timer = setInterval(() => {
      data.test++;
    }, 1000);
  });
  onUnmounted(() => {
    clearInterval(timer);
  });
  return toRefs(data);
}
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
