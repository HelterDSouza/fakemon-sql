<script setup lang="ts">
import { computed } from "vue";
import { Fakemon } from "../fakemons";

const props = defineProps<{ fakemons: Fakemon[]; errors: Error | null }>();
const fakemonsHeaders = computed(() => {
  const headers = Object.keys(props.fakemons[0]);
  return headers;
});
</script>
<template>
  <table v-if="props.fakemons.length > 0" class="rwd-table">
    <tr>
      <th v-for="(fakemonHeader, index) in fakemonsHeaders" :key="index">
        {{ fakemonHeader }}
      </th>
    </tr>
    <tr v-for="(fakemon, index) in props.fakemons" :key="index">
      <template v-for="attr in Object.values(fakemon)">
        <td>{{ attr }}</td>
      </template>
    </tr>
  </table>
  <span style="color: #fff; font-size: 1.5rem" v-else>
    {{ props.errors.name }}
    {{ props.errors.message }}
  </span>
</template>
<style scoped>
.rwd-table {
  margin: 1em 0;
  min-width: 100%;
}
.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.rwd-table th {
  display: none;
}
.rwd-table td {
  display: block;
}
.rwd-table td:first-child {
  padding-top: 0.5em;
}
.rwd-table td:last-child {
  padding-bottom: 0.5em;
}
.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 6.5em;
  display: inline-block;
}
@media (min-width: 480px) {
  .rwd-table td:before {
    display: none;
  }
}
.rwd-table th,
.rwd-table td {
  text-align: left;
}
@media (min-width: 480px) {
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: 0.25em 0.5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
}
body {
  padding: 0 2em;
  /* font-family: Montserrat, sans-serif; */
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  color: #444;
  background: #eee;
}
h1 {
  font-weight: normal;
  letter-spacing: -1px;
  color: #34495e;
}
.rwd-table {
  background: #282c34;
  color: #fff;
  border-radius: 0.4em;
  overflow: hidden;
}
.rwd-table tr {
  border-color: #46637f;
}
.rwd-table th,
.rwd-table td {
  margin: 0.5em 1em;
}
@media (min-width: 480px) {
  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }
}
.rwd-table th,
.rwd-table td:before {
  text-transform: uppercase;
  color: #dd5;
}
</style>
