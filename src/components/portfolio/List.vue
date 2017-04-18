<template>
  <div class="c-panel">
    <div class="c-panel__body">
      <h1 class="c-panel__title u-margin-bottom">{{ title }}</h1>
      <div class="o-layout" v-if="stocks.length > 0">
        <div class="o-layout__item u-4of12" v-for="stock in stocks">
          <stock-item :item="stock"></stock-item>
        </div>
      </div>
      <alert
        type="error"
        :closeBtn="true"
        :show="showAlert"
        @onClosed="alertClosed">
        <p>You have no portfolio yet, buy one!</p>
      </alert>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import StockItem from './Detail.vue';
  import Alert from '../alerts/Alert.vue';

  export default {
    data() {
      return {
        title: 'Stocks',
        showAlert: false,
      };
    },
    methods: {
      alertClosed(param) {
        this.showAlert = param;
      },
      ...mapActions('portfolio', [
        'sellStock',
      ]),
    },
    computed: {
      ...mapGetters('portfolio', [
        'stocks',
      ]),
    },
    watch: {
      stocks() {
        this.showAlert = this.stocks.length === 0;
      },
    },
    components: {
      StockItem,
      Alert,
    },
    created() {
      window.document.title = this.title;
      this.showAlert = this.stocks.length === 0;
    },
  };
</script>
