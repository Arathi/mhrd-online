<script setup lang="ts">
import Compiler from './compiler/Compiler';

import {ref} from "vue";

const src = ref<string>("");

const compiler = new Compiler();

function compile() {
  console.info("正在编译：");
  console.info(src.value);

  const component = compiler.compile(src.value);
  console.info("编译完成：");
  console.info(component);
}
</script>

<template>
  <div class="compiler">
    <textarea class="src" v-model="src" />
    <div class="buttons">
      <button type="button" @click="compile">开始编译</button>
    </div>
  </div>
</template>

<style scoped lang="less">
.compiler {
  display: flex;
  flex-direction: column;

  .src {
    height: 500px;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: end;

    margin-top: 8px;
  }
}
</style>
