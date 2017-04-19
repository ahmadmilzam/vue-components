<template>
  <div class="c-navbar">
    <div class="o-wrapper">
      <div class="c-navbar__left">
        <router-link class="c-navbar__title" :to="{ name: 'homeURL' }" exact active-class="">{{ title }}</router-link>
        <ul class="c-navbar__menu">
          <router-link class="c-navbar__item" tag="li" :to="{ name: 'homeURL' }" exact active-class="is-active">
            <a class="c-navbar__link">Home</a>
          </router-link>
          <router-link class="c-navbar__item" tag="li" :to="{ name: 'portfolioURL' }" active-class="is-active">
            <a class="c-navbar__link">Portfolio</a>
          </router-link>
          <router-link class="c-navbar__item" tag="li" :to="{ name: 'stockURL' }" active-class="is-active">
            <a class="c-navbar__link">Stocks</a>
          </router-link>
        </ul>
      </div>
      <div class="c-navbar__right">
        <ul class="c-navbar__menu">
          <li class="c-navbar__item">
            <div class="c-navbar__btn">
              <a @click="randomize" class="c-btn" href="#">End Day</a>
            </div>
          </li>
          <li
            :class="{'is-open': showDropdown}"
            class="c-navbar__item c-dropdown c-dropdown--right">
            <a href="#" class="c-navbar__link c-dropdown__toggle">
              Save &amp; Load
              <span class="c-dropdown__caret"></span>
            </a>
            <div class="c-dropdown__content">
              <ul class="c-list-ui c-list-ui--small">
                <li @click="saveData" class="c-list-ui__item">
                  Save Data
                </li>
                <li @click="loadData" class="c-list-ui__item">
                  Load Data
                </li>
              </ul>
            </div>
          </li>
          <li class="c-navbar__item">
            <strong class="c-navbar__text">Funds: {{ funds | currency }}</strong>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import $ from '../../helpers/NodeList';

  export default {
    data() {
      return {
        title: 'Mini Vue App',
        showDropdown: false,
      };
    },
    props: {
      funds: {
        type: Number,
        required: true,
      },
    },
    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
      saveData() {
        const data = {
          funds: this.$store.getters['portfolio/funds'],
          portfolioStocks: this.$store.getters['portfolio/stocks'],
          stocks: this.$store.getters['stocks/stocks'],
        };

        this.$http.put('data.json', data)
                  .then((response) => {
                    console.log(response);
                  }, (responseError) => {
                    console.log(responseError);
                  });
      },
      loadData() {
        // console.log(this.$store);
        this.$store.dispatch('loadData');
      },
      ...mapActions('stocks', [
        'randomize',
      ]),
    },
    mounted() {
      const $el = $(this.$el.querySelector('.c-dropdown'));
      $el.onBlur(() => {
        // console.log('dropdown blur');
        this.showDropdown = false;
      });
      $el.findChildren('.c-dropdown__toggle').on('click', (e) => {
        // console.log('dropdown toggle clicked');
        e.preventDefault();
        // if (this.disabled) { return false; }
        this.showDropdown = !this.showDropdown;
        return false;
      });
      // $el.findChildren('ul').on('click', 'li>a', e => { this.show = false })
    },
  };
</script>
