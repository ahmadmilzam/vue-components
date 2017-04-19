<template>
  <div class="c-panel">
    <div class="c-panel__head">
      <div class="c-panel__title">
        {{ item.name }}
        <small>
          Price: {{ item.price | currency }}
        </small>
      </div>
    </div>
    <div class="c-panel__body">
      <form
        @submit.prevent="formSubmit" class="o-layout">
        <div class="o-layout__item u-6of12">
          <input
            v-model.number="quantity"
            :value="quantity"
            v-validate="'required|numeric'"
            :class="{'c-input': true, 'is-invalid': errors.has('quantity') || insufficientFunds }"
            name="quantity"
            type="number">
        </div>
        <div class="o-layout__item u-6of12">
          <button
            :disabled="insufficientFunds || quantity <= 0"
            class="c-btn c-btn--primary c-btn--block" type="submit">Buy</button>
        </div>
        <div v-show="errors.has('quantity')" class="o-layout__item">
          <span class="u-text-small u-text-pink">{{ errors.first('quantity') }}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  import { mapActions, mapGetters } from 'vuex';

  Vue.use(VeeValidate);

  export default {
    data() {
      return {
        quantity: 0,
      };
    },
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    computed: {
      insufficientFunds() {
        return this.quantity * this.item.price > this.funds;
      },
      ...mapGetters('portfolio', [
        'funds',
      ]),
    },
    methods: {
      formSubmit() {
        this.$validator.validateAll().then(() => {
          const order = {
            id: this.item.id,
            price: this.item.price,
            quantity: this.quantity,
          };
          this.buyStock(order);
          this.quantity = 0;
        });
        // .catch(() => {
        //   alert('Correct them errors!');
        // })
      },
      ...mapActions('stocks', {
        buyStock: 'buy',
      }),
    },
  };
</script>
