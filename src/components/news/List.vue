<template>
  <div class="c-panel">
    <div class="c-panel__head">
      <div class="c-panel__title">{{ title }}</div>
    </div>
    <div class="c-panel__body">
      <ul class="c-list-ui">
        <li class="c-list-ui__item" v-for="story in stories" :key="story.id">
          <router-link
            :to="{
              name: 'newsDetailURL',
              params: { id: story.id },
            }"
          >
            #{{ story.id }} - {{ story.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'News List',
        stories: [
          {
            id: 1,
            title: 'asdfadsf 1',
          },
          {
            id: 2,
            title: 'asdfadsf 2',
          },
          {
            id: 3,
            title: 'asdfadsf 3',
          },
          {
            id: 4,
            title: 'asdfadsf 4',
          },
          {
            id: 5,
            title: 'asdfadsf 5',
          },
        ],
      };
    },
    created() {
      window.document.title = this.title;
    },
  };
</script>
