<template>
  <div @click="$emit('click')">emit</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "emits",
  //   emits: ['click']
});
</script>
