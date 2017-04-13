<template>
  <div id="app-container" class="o-wrapper u-padding-top u-padding-bottom">
    <div class="o-layout">
      <div class="o-layout__item">
        <h1>{{ title }}</h1>

        <hr>

        <div class="c-panel">
          <div class="c-panel__head">
            <h2 class="c-panel__title">Sending POST Request</h2>
          </div>
          <div class="c-panel__body">
            <form
              @submit.prevent="validateBeforeSubmit"
              class="o-layout">
              <div class="o-layout__item u-margin-bottom--small">
                <label class="c-label" for="username">Username</label>
                <input
                  name="username"
                  v-model="form.username"
                  v-validate="'required'"
                  :class="{'c-input': true, 'is-invalid': errors.has('username') }"
                  type="text" id="username">
                <span
                  v-show="errors.has('username')"
                  class="u-text-small u-text-pink">{{ errors.first('username') }}</span>
              </div>
              <div class="o-layout__item u-margin-bottom--small">
                <label class="c-label" for="email">Email</label>
                <input
                  name="email"
                  v-model="form.email"
                  v-validate="'required|email'"
                  :class="{'c-input': true, 'is-invalid': errors.has('email') }"
                  type="email" id="email">
                  <span
                    v-show="errors.has('email')"
                    class="u-text-small u-text-pink">
                    {{ errors.first('email') }}
                  </span>
              </div>
              <div class="o-layout__item">
                <button
                  :disabled="fields.clean() || fields.failed()"
                  type="submit"
                  class="c-btn c-btn--primary">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div class="c-panel">
          <div class="c-panel__head">
            <div class="c-panel__title">Getting Users</div>
          </div>
          <div class="c-panel__body">
            <button
              @click="getUsers"
              type="button" class="c-btn c-btn--primary">Get Users</button>
            <br>
            <br>
            <ul v-if="users.length > 0" class="c-list-ui">
              <li v-for="user in users" class="c-list-ui__item">
                {{ user.username }} - {{ user.email }}
              </li>
            </ul>
            <div v-else class="c-alert">
              <p>You have no users.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // import Velocity from 'velocity-animate';
  // import WhichTransform from './helpers/WhichTransform';

  export default {
    data() {
      return {
        title: 'VUE HTTP Resource',
        form: {
          username: '',
          email: '',
        },
        users: [],
      };
    },
    methods: {
      validateBeforeSubmit() {
        const vm = this;
        vm.$validator.validateAll().then(() => {
          console.log(vm.form);
          this.$http.post(
            'https://vue-http-a3911.firebaseio.com/data.json',
            vm.form,
          ).then(
            (response) => {
              console.log(response);
            }, (error) => {
              console.log(error);
            },
          );
        }).catch(() => {
          alert('Correct them errors!');
        });
      },
      getUsers() {
        const vm = this;
        this.$http.get(
          'https://vue-http-a3911.firebaseio.com/data.json',
        ).then(
          (response) => {
            console.log(response);
            return response.json();
          }, (error) => {
            console.log(error);
          },
        ).then((data) => {
          console.log('the data', data);
          const resultArr = [];
          Object.keys(data).forEach((key) => {
            resultArr.push(data[key]);
          });
          console.log('array result:', resultArr);
          vm.users = resultArr;
        });
      },
    },
  };
</script>
