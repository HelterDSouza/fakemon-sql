<!-- <script setup lang="ts"> -->
<!-- import { EditorConfiguration } from "codemirror"; -->
<!-- import Codemirror from "codemirror-editor-vue3"; -->
<!-- import "codemirror/mode/sql/sql.js"; -->
<!---->
<!-- const query = defineModel("query"); -->
<!---->
<!-- const cmOptions: EditorConfiguration = { -->
<!--   lineNumbers: false, -->
<!--   mode: "text/x-sql", // Language mode -->
<!--   theme: "default", // Theme -->
<!-- }; -->
<!-- </script> -->
<!-- <template> -->
<!--   <Codemirror v-model:value="query" :options="cmOptions" border :height="200" /> -->
<!-- </template> -->
<template>
  <div style="width: 100%; height: 100%">
    <code-mirror
      basic
      :lang="lang"
      :tab-size="4"
      v-model="query"
      :extensions="extensions"
    >
    </code-mirror>
  </div>
</template>

<script setup lang="ts">
import CodeMirror from "vue-codemirror6";
import { sql } from "@codemirror/lang-sql";
import { oneDark } from "@codemirror/theme-one-dark";

const extensions = [oneDark];

const query = defineModel("query");
const lang = sql();
</script>
<style scoped>
.vue-codemirror {
  border: 2px #8f8f8f solid;
}
.vue-codemirror > * {
  width: 100%;
  height: 250px;
  padding: 10px;
  font-size: 1.2rem;
}
</style>
