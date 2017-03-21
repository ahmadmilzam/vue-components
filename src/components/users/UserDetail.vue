<template>
  <div class="c-panel">
    <div class="c-panel__head">{{ title }}</div>
    <div class="c-panel__body">
      <p>More user detail here</p>
      <p>Username: {{ name }}</p>
      <p>Age: {{ age }}</p>
      <button type="button" @click="resetCb('Milzam')">Reset with Callback</button>
      <button type="button" @click="resetNameEvent('Milzam')">Reset with Event</button>
    </div>
  </div>
</template>

<script>
  import eventBus from '../../EventBus';

  export default {
    props: {
      name: {
        type: String,
        default: 'Milzam',
      },
      age: {
        type: Number,
      },
      resetCb: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        title: 'User Detail',
      };
    },
    methods: {
      resetNameEvent(oldName) {
        this.name = oldName;
        this.$emit('nameWasReset', oldName);
      },
    },
    created() {
      eventBus.$on('ageWasUpdatedByBus', (newAge) => {
        this.age = newAge;
      });
    },
  };
</script>
