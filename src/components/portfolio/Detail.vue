<template>
  <div class="c-panel">
    <div class="c-panel__head">
      <div class="c-panel__title">
        {{ item.name }}
        <small>
          Price: {{ item.price | currency }} | QTY: {{ item.quantity }}
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
            :class="{'c-input': true, 'is-invalid': errors.has('quantity') || insufficientQty }"
            name="quantity"
            type="number">
        </div>
        <div class="o-layout__item u-6of12">
          <button
            :disabled="quantity <= 0 || insufficientQty"
            class="c-btn c-btn--primary c-btn--block" type="submit">Sell</button>
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
  import { mapActions } from 'vuex';

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
      insufficientQty() {
        return this.quantity > this.item.quantity;
      },
    },
    methods: {
      formSubmit() {
        this.$validator.validateAll().then(() => {
          const order = {
            id: this.item.id,
            price: this.item.price,
            quantity: this.quantity,
          };

          this.sellStock(order);
          this.quantity = 0;
        });
        // .catch(() => {
        //   alert('Correct them errors!');
        // })
      },
      ...mapActions('portfolio', {
        sellStock: 'sell',
      }),
    },
  };
</script>
