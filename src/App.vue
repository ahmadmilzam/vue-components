<template>
  <div id="app-container" class="o-wrapper u-padding-top u-padding-bottom" style="background-color: #f5f5f5;">
    <div class="o-layout">
      <div class="o-layout__item">
        <h1>{{ title }}</h1>
        <hr>
        <h2>Animate Single Element</h2>
        <button class="c-btn c-btn--primary" type="button" @click="toggleAlert('showAlert1')">Toggle Alert</button>
        <br>
        <br>
        <transition name="alert">
          <div v-if="showAlert1 === true" class="c-alert">
            <p>
              Animation with CSS.
            </p>
          </div>
        </transition>
        <hr>
        <h2>Animation with Javascript</h2>
        <button class="c-btn c-btn--primary" type="button" @click="toggleAlert('showAlert2')">Toggle Alert</button>
        <br>
        <br>
        <transition
          appear
          :css="false"
          @before-appear="beforeAppear"
          @appear="appear"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div v-if="showAlert2 === true" class="c-alert">
            <p>
              Animation with JS.
            </p>
          </div>
        </transition>
        <hr>
        <h2>Transition Group</h2>
        <button
          @click="addNewList"
          type="button"
          class="c-btn c-btn--primary">Add New List</button>
        <br>
        <br>
        <transition-group
          appear
          tag="ul"
          name="list-ui"
          class="c-list-ui"
          :css="false"
          mode="out-in"
          @before-appear="listBeforeAppear"
          @appear="listAppear"
          @before-enter="listBeforeEnter"
          @enter="listEnter"
          @leave="listLeave">
          <li
            v-for="(list, idx) in lists"
            :key="list"
            :data-index="idx"
            @click="removeList(idx)"
            class="c-list-ui__item">{{ list }}</li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate';
  import WhichTransform from './helpers/WhichTransform';

  export default {
    data() {
      return {
        title: 'Transition and Animation',
        showAlert1: false,
        showAlert2: true,
        showList: false,
        lists: [1, 2, 3, 4, 5, 6],
      };
    },
    computed: {
      staggerLists() {
        if (!this.showList) {
          return [];
        }
        return this.lists;
      },
    },
    methods: {
      toggleAlert(type) {
        this[type] = !this[type];
      },
      beforeAppear(el) {
        const target = el;
        target.style.opacity = 0;
      },
      appear(el, done) {
        Velocity(el, { opacity: 1 }, { delay: 2000, duration: 1000, complete: done });
      },
      beforeEnter(el) {
        console.log(el);
        console.log('before enter hook');

        const target = el;
        target.style.opacity = 0;
      },
      enter(el, done) {
        // console.log(el);
        console.log('enter hook');

        Velocity(el, { opacity: 1 }, { duration: 300 });
        Velocity(el, { fontSize: '1rem' }, { complete: done });
      },
      afterEnter() {
        // console.log(el);
        console.log('after enter hook');
      },
      enterCancelled() {
        // console.log(el);
        console.log('enter cancelled hook');
      },
      beforeLeave() {
        // console.log(el);
        console.log('before leave hook');
      },
      leave(el, done) {
        // console.log(el);
        console.log('leave hook');

        const target = el;
        target.style.position = 'absolute';

        Velocity(target, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
        Velocity(target, { rotateZ: '100deg' }, { loop: 2 });
        Velocity(target, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0,
        }, { complete: done });
      },
      afterLeave() {
        // console.log(el);
        console.log('after leave hook');
      },
      leaveCancelled() {
        // console.log(el);
        console.log('leave cancelled hook');
      },
      listBeforeAppear(el) {
        const target = el;
        const transformType = WhichTransform();
        target.style.opacity = 0;
        console.log('list transform type', transformType);
        // target.style.transform = 'translateX(50px)';
      },
      listAppear(el, done) {
        const target = el;
        const delay = el.dataset.index * 300;
        target.style.position = 'absolute';
        // console.log(`delay for index ${el.dataset.index} = ${delay}`);
        // done();

        setTimeout(() => {
          Velocity(el, { translateY: '40px' }, { duration: 1 });
          Velocity(el, {
            translateZ: '0px',
            translateY: '0px',
            opacity: 1,
          }, { duration: 1000, easing: 'ease-out', complete: done });
          target.style.position = 'relative';
        }, delay);
      },
      listBeforeEnter(el) {
        const target = el;
        target.style.opacity = 0;
      },
      listEnter(el, done) {
        console.log('list enter', el);
        Velocity(el, { translateX: '100px' }, { duration: 1 });
        Velocity(el, {
          translateZ: '0px',
          translateX: '0px',
          opacity: 1,
        }, { duration: 500, easing: 'ease-out', complete: done });
      },
      listLeave(el, done) {
        // const target = el;
        // target.style.position = 'absolute';

        Velocity(el, { translateX: '100px', opacity: 0 }, { duration: 200, easing: 'ease-out', complete: done });
      },
      addNewList() {
        const pos = Math.floor(Math.random() * this.lists.length);
        this.lists.splice(pos, 0, this.lists.length + 1);
      },
      removeList(idx) {
        this.lists.splice(idx, 1);
      },
    },
    // mounted() {
    //   this.showList = true;
    // },
  };
</script>
