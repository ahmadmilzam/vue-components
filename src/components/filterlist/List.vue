<template>
  <div class="o-layout">
    <div class="o-layout__item">
      <h2>{{ title }}</h2>
      <ul v-if="fruits.length">
        <li v-for="fruit in filteredFruits">{{ fruit }}</li>
      </ul>
      <input type="text" class="c-input" name="fruit-filter" v-model="filterText">
    </div>
  </div>
</template>

<script>
  import { FruitsList, Title2 } from '../../mixins/FruitListMixin';

  export default {
    mixins: [FruitsList],
    data() {
      return {
        title: Title2,
      };
    },
    filters: {
      toUppercaseWord(str) {
        return str.toUpperCase();
      },
    },
  };
</script>
