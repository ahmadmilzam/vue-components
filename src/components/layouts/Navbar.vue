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
              <a class="c-btn" href="#">End Day</a>
            </div>
          </li>
          <li class="c-navbar__item c-dropdown c-dropdown--right">
            <a href="#" class="c-navbar__link">
              Save &amp; Load
              <span class="c-dropdown__caret"></span>
              <div class="c-dropdown__content">
                <ul class="c-list-ui c-list-ui--small">
                  <li class="c-list-ui__item">Item no #1</li>
                  <li class="c-list-ui__item">Item no #2</li>
                  <li class="c-list-ui__item">Item no #3</li>
                </ul>
              </div>
            </a>
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
  export default {
    data() {
      return {
        title: 'Mini Vue App',
      };
    },
    props: {
      funds: {
        type: Number,
        required: true,
      },
    },
  };
</script>
