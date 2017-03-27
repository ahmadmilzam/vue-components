<template>
  <div class="o-layout">
    <div class="o-layout__item">
      <h1>Vue Basic Form</h1>

      <hr>

      <form @submit.prevent="showTheResult" action="#" class="o-layout u-margin-bottom" method="post">
        <div class="o-layout__item">
          <div class="o-layout u-margin-bottom--small">
            <div class="o-layout__item">
              <label class="c-label" for="title">Title</label>
              <select v-model="formData.title" name="title" id="title" class="c-select">
                <option
                  v-for="ttl in titles"
                  :value="ttl.value"
                  :selected="ttl.value === formData.title">
                  {{ ttl.text }}
                </option>
              </select>
            </div>
          </div>

          <div class="o-layout u-margin-bottom--small">
            <div class="o-layout__item">
              <label class="c-label" for="fullname">Fullname</label>
              <input
                v-model="formData.fullname"
                type="text"
                id="fullname"
                name="fullname"
                class="c-input"
                placeholder="John Doe">
            </div>
          </div>

          <div class="o-layout u-margin-bottom--small">
            <div class="o-layout__item">
              <label class="c-label" for="email">Email</label>
              <input
                v-model="formData.email"
                type="email"
                id="email"
                name="email"
                class="c-input"
                placeholder="email@domain.com">
            </div>
          </div>

          <div class="o-layout u-margin-bottom--small">
            <div class="o-layout__item">
              <label class="c-label" for="password">Password</label>
              <input
                v-model="formData.password"
                type="password"
                id="password"
                name="password"
                class="c-input">
            </div>
          </div>

          <div class="o-layout u-margin-bottom--small">
            <div class="o-layout__item">
              <label class="c-label" for="confirmpass">Confirm Password</label>
              <input
                v-model="formData.confirmpass"
                type="password"
                id="confirmpass"
                name="confirmpass"
                class="c-input">
            </div>
          </div>

          <div class="o-layout u-margin-bottom--small">
            <div class="o-layout__item">
              <label class="c-label">Gender</label>
              <div class="c-radio">
                <input
                  v-model="formData.gender"
                  class="c-radio__input"
                  id="gendermale"
                  type="radio"
                  name="gender"
                  value="Male">
                <label class="c-radio__label" for="gendermale">Male</label>
              </div>
              <div class="c-radio">
                <input
                  v-model="formData.gender"
                  class="c-radio__input"
                  id="genderfemale"
                  type="radio"
                  name="gender"
                  value="Female">
                <label class="c-radio__label" for="genderfemale">Female</label>
              </div>
            </div>
          </div>

          <div class="o-layout u-margin-bottom--small">
            <div class="o-layout__item">
              <label class="c-label">Hobby</label>
              <label class="c-checkbox" for="hobby1">
                <input
                  v-model="formData.hobbies"
                  class="c-checkbox__input"
                  id="hobby1"
                  type="checkbox"
                  value="Fishing"
                  name="hobbies[fishing]">
                <span class="c-checkbox__label">Fishing</span>
              </label>
              <br>
              <label class="c-checkbox" for="hobby2">
                <input
                  v-model="formData.hobbies"
                  class="c-checkbox__input"
                  id="hobby2"
                  type="checkbox"
                  value="Biking"
                  name="hobbies[biking]">
                <span class="c-checkbox__label">Biking</span>
              </label>
              <br>
              <label class="c-checkbox" for="hobby3">
                <input
                  v-model="formData.hobbies"
                  class="c-checkbox__input"
                  id="hobby3"
                  type="checkbox"
                  value="Cooking"
                  name="hobbies[cooking]">
                <span class="c-checkbox__label">Cooking</span>
              </label>
              <br>
              <label class="c-checkbox" for="hobby4">
                <input
                  v-model="formData.hobbies"
                  class="c-checkbox__input"
                  id="hobby4"
                  type="checkbox"
                  value="Reading"
                  name="hobbies[reading]">
                <span class="c-checkbox__label">Reading</span>
              </label>
            </div>
          </div>

          <div class="o-layout u-margin-bottom--small">
            <div class="o-layout__item">
              <label class="c-label" for="picture">Picture</label>
              <input type="file" id="picture" name="picture" class="c-input">
            </div>
          </div>

          <div class="o-layout u-margin-bottom--small">
            <div class="o-layout__item">
              <label class="c-label" for="address">Address</label>
              <textarea
                v-model="formData.address"
                name="address"
                id="address"
                rows="6"
                class="c-input"
                placeholder="Enter your address"></textarea>
            </div>
          </div>

          <div class="o-layout">
            <div class="o-layout__item">
              <button type="submit" class="c-btn c-btn--primary c-btn--large c-btn--block">Save Data</button>
            </div>
          </div>
        </div>
      </form>

      <div v-show="showResult === true" class="o-layout">
        <div class="o-layout__item">
          <h2>Results</h2>
          <div class="o-layout">
            <div class="o-layout__item">
              Title:
              <strong>{{ formData.title }}</strong>
            </div>
            <div class="o-layout__item">
              Fullname:
              <strong>{{ formData.fullname }}</strong>
            </div>
            <div class="o-layout__item">
              Email:
              <strong>{{ formData.fullname }}</strong>
            </div>
            <div class="o-layout__item">
              Password:
              <strong>{{ formData.fullname }}</strong>
            </div>
            <div class="o-layout__item">
              Address:
              <strong>{{ formData.fullname }}</strong>
            </div>
            <div class="o-layout__item">
              Gender:
              <strong>{{ formData.gender }}</strong>
            </div>
            <div class="o-layout__item">
              Hobby:
              <ol v-if="formData.hobbies.length > 0">
                <li v-for="hobby in formData.hobbies">
                  <strong>{{ hobby }}</strong>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          fullname: '',
          email: '',
          password: '',
          confirmpass: '',
          address: '',
          gender: 'Male',
          hobbies: [],
          title: 'mr',
        },
        titles: [
          {
            text: 'Select title',
            value: '',
          },
          {
            text: 'Mr.',
            value: 'mr',
          },
          {
            text: 'Mrs.',
            value: 'mrs',
          },
          {
            text: 'Ms.',
            value: 'ms',
          },
        ],
        showResult: false,
      };
    },
    methods: {
      showTheResult() {
        this.showResult = true;
      },
    },
  };
</script>
