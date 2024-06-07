<template>
  <main class="container">
    <section class="sql-editor">
      <SqlEditor v-model:query="query" />
    </section>
    <div class="divider" />

    <section class="table">
      <EntriesTable :fakemons="foo" :errors="error" />
    </section>
  </main>
</template>

<script setup lang="ts">
import SqlEditor from "./components/SqlEditor.vue";
import alasql from "alasql";
import { computed, reactive, ref } from "vue";
import { Fakemon, fakemonsData } from "./fakemons";
import EntriesTable from "./components/EntriesTable.vue";

const query = ref<string>("select * from fakemons");
const fakemons = reactive<Fakemon[]>([]);
const error = ref<Error | null>(null);

const foo = computed(() => {
  if (query.value === "select * from fakemons") {
    return fakemons;
  } else if (!query.value) {
    return [];
  } else {
    try {
      let res = alasql(query.value);
      return res;
    } catch (err) {
      error.value = err as Error;

      return [];
    }
  }
});

const initializeDatabase = () => {
  const storedData = localStorage.getItem("fakemons");
  if (storedData) {
    fakemons.push(...JSON.parse(storedData));
  } else {
    localStorage.setItem("fakemons", JSON.stringify(fakemonsData));
  }
  createTable();
  insertFakemons();
};

const createTable = () => {
  const createTableSQL = `
        CREATE TABLE IF NOT EXISTS fakemons (
            name STRING,
            id INT,
            type STRING,
            attack INT,
            defense INT,
            hp INT
        )
`;
  alasql(createTableSQL);
};

const insertFakemons = () => {
  fakemons.forEach((fakemon) => {
    alasql("INSERT INTO fakemons VALUES (?,?,?,?,?,?)", [
      fakemon.name,
      fakemon.id,
      fakemon.type,
      fakemon.attack,
      fakemon.defense,
      fakemon.hp,
    ]);
  });
};

initializeDatabase();
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  box-sizing: border-box;
}
#app {
  background-color: #121212;
  height: 100vh;
}
.container {
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 4px;
}
.container > .sql-editor {
  flex: 0 1 40%;
  display: flex;
  align-self: end;
  padding: 16px;
}
.container > .table {
  flex: 2;
  margin: 0 1em;
}
.divider {
  width: 2px;
  margin: 0 10px;
  background: gray;
}
</style>
