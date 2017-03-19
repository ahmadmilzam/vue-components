<template>
  <div class="c-status__item">
    <div class="c-status__text">{{ status }}</div>
    <button class="c-status__button" type="button" @click="updateStatus">Update Status</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'Critical',
    };
  },
  methods: {
    updateStatus() {
      this.status = 'Normal';
    },
  },
};
</script>

<style lang="scss">
</style>
