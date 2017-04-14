<template>
  <div class="c-panel">
    <div class="c-panel__head">
      <div class="c-panel__title">{{ title }}</div>
    </div>
    <div class="c-panel__body">
      <p>
        News Detail ID: {{ id }}
      </p>
      <router-link :to="{ name: 'newsEditURL' }">Edit News</router-link>
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'News Detail',
      };
    },
    props: {
      id: {
        type: Number,
        required: true,
      },
    },
    created() {
      window.document.title = this.title;
    },
  };
</script>
