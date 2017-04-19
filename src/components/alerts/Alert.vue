<template>
  <transition name="alert">
    <div v-show="show" class="c-alert" :class="{'c-alert--error': type === 'error'}">
      <button
        v-if="closeBtn"
        @click.prevent="closeAlert"
        type="button"
        class="c-alert__close">&times;</button>
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  // import WhichTransition from '../../helpers/WhichTransition';

  export default {
    props: {
      show: {
        type: Boolean,
        default: true,
      },
      closeBtn: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: '',
      },
    },
    methods: {
      closeAlert() {
        this.$emit('onClosed', false);
        // this.show = !this.show;
        // let target = e.target;
        // let parent = target.parentNode;
        // let grandParent = parent.parentNode;
        // let transitionEvent = WhichTransition();

        // parent.classList.add('is-hiding');

        // if (transitionEvent) {
        //   parent.addEventListener(transitionEvent, function transitionEvt() {
        //     console.log('Transition complete!  This is the callback, no library needed!');
        //     parent.removeEventListener(transitionEvent, transitionEvt);
        //     grandParent.removeChild(parent);
        //     target = null;
        //     parent = null;
        //     grandParent = null;
        //     transitionEvent = null;
        //   });
        // }
      },
    },
  };
</script>
