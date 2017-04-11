<template>
  <transition name="alert">
    <div class="c-alert">
      <button type="button" class="c-alert__close" @click="closeAlert">&times;</button>
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  import WhichTransition from '../../helpers/WhichTransition';

  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closeAlert(e) {
        e.preventDefault();

        let target = e.target;
        let parent = target.parentNode;
        let grandParent = parent.parentNode;
        let transitionEvent = WhichTransition();

        parent.classList.add('is-hiding');

        if (transitionEvent) {
          parent.addEventListener(transitionEvent, function transitionEvt() {
            console.log('Transition complete!  This is the callback, no library needed!');
            parent.removeEventListener(transitionEvent, transitionEvt);
            grandParent.removeChild(parent);
            target = null;
            parent = null;
            grandParent = null;
            transitionEvent = null;
          });
        }
      },
    },
    beforeDestroye() {
      console.log('alert will destroyed');
    },
    destroyed() {
      console.log('alert destroyed');
    },
  };
</script>
