<template>
  <div class="c-quote u-margin-bottom--tiny js-quote-item">
    <button type="button" class="c-quote__close" title="Delete this quote?" @click="removeCb(index)">&times;</button>
    <div class="c-quote__body">
      {{ item.text }}
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      index: {
        type: Number,
      },
      item: {
        type: Object,
        required: true,
      },
      removeCb: {
        type: Function,
      },
      setHeightCb: {
        type: Function,
      },
    },
    mounted() {
      this.setHeightCb();
    },
  };
</script>
