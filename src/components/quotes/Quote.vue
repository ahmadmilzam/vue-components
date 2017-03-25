<template>
  <div class="o-layout u-margin-bottom">
    <div class="o-layout__item u-margin-bottom">
      <div class="c-panel u-margin-bottom--small">
        <div class="c-panel__head u-text-center">{{ title }} ({{ quotesArr.length }} / {{ maxQuotes }})</div>
        <div class="c-panel__body">
          <form action="#" method="post" class="o-layout" @submit="getQuote">
            <div class="o-layout__item u-margin-bottom--small">
              <textarea v-model="quote" ref="quoteInput" name="quote" class="c-input" rows="6"></textarea>
            </div>
            <div class="o-layout__item u-margin-bottom--small">
              <button type="submit" class="c-btn c-btn--primary c-btn--large c-btn--block">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <progress-bar :percentage="calculatePercentage"></progress-bar>
    </div>
    <div class="o-layout__item">
      <div v-if="quotesArr.length > 0" class="o-layout">
        <div v-for="(quote, index) in quotesArr" class="o-layout__item u-4of12">
          <quote-item :item="quote" :removeCb="onRemoved" :index="index" :setHeightCb="setEqualHeight"></quote-item>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Quoteitem from './Quoteitem.vue';
  import ProgressBar from '../progressbar/Progressbar.vue';

  export default {
    data() {
      return {
        title: 'Enter Your Quote',
        maxQuotes: 12,
        quote: '',
        quotesArr: [],
      };
    },
    components: {
      progressBar: ProgressBar,
      quoteItem: Quoteitem,
    },
    methods: {
      setEqualHeight() {
        const panels = this.$el.querySelectorAll('.js-quote-item');
        let maxHeight = 0;
        [].forEach.call(panels, (panel) => {
          const currHeight = panel.clientHeight;
          if (currHeight >= maxHeight) {
            maxHeight = currHeight;
          }
        });
        [].forEach.call(panels, (panel) => {
          let currPanel = panel;
          currPanel.style.height = `${maxHeight}px`;
          currPanel = null;
        });
      },
      onRemoved(index) {
        this.quotesArr.splice(index, 1);
      },
      getQuote(e) {
        e.preventDefault();
        const inputQuote = this.quote;
        if (inputQuote && (this.quotesArr.length < this.maxQuotes)) {
          this.quotesArr.push({ text: inputQuote });
          this.quote = '';
        }
      },
    },
    computed: {
      calculatePercentage() {
        return (this.quotesArr.length / this.maxQuotes) * 100;
      },
    },
  };
</script>
