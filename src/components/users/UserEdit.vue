<template>
  <div class="c-panel">
    <div class="c-panel__head">{{ title }}</div>
    <div class="c-panel__body">
      <p>More user edit here</p>
      <p>Age: {{ age }}</p>
      <button type="button" @click="updateAgeCb(30)">Reset with Callback</button>
      <button type="button" @click="updateAgeEvent(31)">Reset with Event</button>
      <button type="button" @click="updateAgeBus(32)">Reset with Bus</button>
    </div>
  </div>
</template>

<script>
  import eventBus from '../../EventBus';

  export default {
    data() {
      return {
        title: 'User Edit',
      };
    },
    props: {
      age: {
        type: Number,
      },
      updateAgeCb: {
        type: Function,
        required: true,
      },
    },
    methods: {
      updateAgeEvent(newAge) {
        this.age = newAge;
        this.$emit('ageWasUpdated', newAge);
      },
      updateAgeBus(newAge) {
        this.age = newAge;
        eventBus.$emit('ageWasUpdatedByBus', newAge);
      },
    },
  };
</script>
