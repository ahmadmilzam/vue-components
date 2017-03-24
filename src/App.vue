<template>
  <div id="app-container" class="o-wrapper u-padding-top u-padding-bottom">
    <button type="button" @click="selectedComponent = 'quote'">Quote</button>
    <button type="button" @click="selectedComponent = 'newQuote'">New</button>
    <button type="button" @click="selectedComponent = 'author'">Author</button>
    <!-- the dynamic component will not be destroyed -->
    <keep-alive>
      <component :is="selectedComponent">
        <blockquote cite="http://example.com/facts">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p>
        </blockquote>
      </component>
    </keep-alive>
    <!-- <component :is="selectedComponent">
      <blockquote cite="http://example.com/facts">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>
      </blockquote>
    </component> -->
    <!-- <quote>
      <blockquote cite="http://example.com/facts">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>
      </blockquote>
    </quote> -->
    <p>
      Selected Component = {{ selectedComponent }}
    </p>
  </div>
</template>

<script>
  import Quote from './components/quotes/Quote.vue';
  import New from './components/quotes/New.vue';
  import Author from './components/quotes/Author.vue';

  export default {
    data() {
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'quote',
      };
    },
    components: {
      quote: Quote,
      author: Author,
      newQuote: New,
    },
  };
</script>
