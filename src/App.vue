<template>
  <div id="app-container" class="o-wrapper u-padding-top u-padding-bottom" style="background-color: #f5f5f5;">
    <div class="o-layout">
      <div class="o-layout__item">
        <h2>{{ title }}</h2>
        <ul v-if="fruits.length">
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <input type="text" class="c-input" name="fruit-filter" v-model="filterText">
      </div>
    </div>
    <hr>
    <filter-list></filter-list>
  </div>
</template>

<script>
  import { FruitsList, Title1 } from './mixins/FruitListMixin';
  import FilterList from './components/filterlist/List.vue';

  export default {
    mixins: [FruitsList],
    data() {
      return {
        title: Title1,
      };
    },
    filters: {
      toUppercaseWord(str) {
        return str.toUpperCase();
      },
    },
    components: {
      filterList: FilterList,
    },
  };
</script>
