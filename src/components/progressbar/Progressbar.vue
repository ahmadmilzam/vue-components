<template>
  <div class="c-progress">
    <div class="c-progress__bar" :style="{width: thePercentage}">
      <span class="u-sr-only">progress: {{ thePercentage }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      percentage: {
        type: Number,
        required: true,
      },
    },
    computed: {
      thePercentage() {
        return `${this.percentage}%`;
      },
    },
  };
</script>
