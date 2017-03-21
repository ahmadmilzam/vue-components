<template>
  <div class="c-panel">
    <div class="c-panel__head">{{ title }}</div>
    <div class="c-panel__body">
      <p>More user detail here</p>
      <p>Username: {{ name }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        title: 'User Detail',
      };
    },
  };
</script>
