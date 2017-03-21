<template>
  <div class="o-layout u-padding-top u-padding-bottom">
    <div class="o-layout__item">
      <h2>User Component</h2>
      <p>
        <strong>Welcome: </strong>
        {{ name }}
      </p>
      <p>
        <button class="c-btn" type="button" @click="changeName">Change Name</button>
      </p>
      <div class="o-layout">
        <div class="o-layout__item u-6of12">
          <user-detail :name="name"></user-detail>
        </div>
        <div class="o-layout__item u-6of12">
          <user-edit></user-edit>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data() {
      return {
        name: 'Milzam',
      };
    },
    components: {
      'user-detail': UserDetail,
      'user-edit': UserEdit,
    },
    methods: {
      changeName() {
        this.name = 'Ahmad Milzam';
      },
      setHeight() {
        const panels = this.$el.querySelectorAll('.c-panel');
        let maxHeight = 0;
        [].forEach.call(panels, (panel) => {
          const currHeight = panel.clientHeight;
          if (currHeight >= maxHeight) {
            maxHeight = currHeight;
          }
        });
        [].forEach.call(panels, (panel) => {
          let currPanel = panel;
          currPanel.style.height = `${maxHeight}px`;
          currPanel = null;
        });
      },
    },
    mounted() {
      setTimeout(this.setHeight, 500);
    },
  };
</script>
