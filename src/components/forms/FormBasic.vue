<template>
  <div class="o-layout">
    <div class="o-layout__item">
      <h1>Vue Basic Form</h1>

      <hr>

      <!-- .o-layout.u-margin-bottom--small>.o-layout__item -->
      <div class="o-layout u-margin-bottom--small">
        <div class="o-layout__item">
          <label class="c-label" for="title">Title</label>
          <select name="title" id="title" class="c-select">
            <option value="">Select Title</option>
            <option value="mr">Mr</option>
            <option value="ms">Ms</option>
          </select>
        </div>
      </div>

      <div class="o-layout u-margin-bottom--small">
        <div class="o-layout__item">
          <label class="c-label" for="fullname">Fullname</label>
          <input type="text" id="fullname" name="fullname" class="c-input" placeholder="John Doe">
        </div>
      </div>

      <div class="o-layout u-margin-bottom--small">
        <div class="o-layout__item">
          <label class="c-label" for="email">Email</label>
          <input type="email" id="email" name="email" class="c-input" placeholder="email@domain.com">
        </div>
      </div>

      <div class="o-layout u-margin-bottom--small">
        <div class="o-layout__item">
          <label class="c-label" for="password">Password</label>
          <input type="password" id="password" name="password" class="c-input">
        </div>
      </div>

      <div class="o-layout u-margin-bottom--small">
        <div class="o-layout__item">
          <label class="c-label" for="confirmpass">Confirm Password</label>
          <input type="password" id="confirmpass" name="confirmpass" class="c-input">
        </div>
      </div>

      <div class="o-layout u-margin-bottom--small">
        <div class="o-layout__item">
          <label class="c-label">Gender</label>
          <div class="c-radio">
            <input class="c-radio__input" id="gendermale" type="radio" name="gender" value="male">
            <label class="c-radio__label" for="gendermale">Male</label>
          </div>
          <div class="c-radio">
            <input class="c-radio__input" id="genderfemale" type="radio" name="gender" value="female">
            <label class="c-radio__label" for="genderfemale">Female</label>
          </div>
        </div>
      </div>

      <div class="o-layout u-margin-bottom--small">
        <div class="o-layout__item">
          <label class="c-label">Hobby</label>
          <label class="c-checkbox" for="hobby1">
            <input class="c-checkbox__input" id="hobby1" type="checkbox" name="hobby[fishing]">
            <span class="c-checkbox__label">Fishing</span>
          </label>
          <br>
          <label class="c-checkbox" for="hobby2">
            <input class="c-checkbox__input" id="hobby2" type="checkbox" name="hobby[biking]">
            <span class="c-checkbox__label">Biking</span>
          </label>
          <br>
          <label class="c-checkbox" for="hobby3">
            <input class="c-checkbox__input" id="hobby3" type="checkbox" name="hobby[cooking]">
            <span class="c-checkbox__label">Cooking</span>
          </label>
          <br>
          <label class="c-checkbox" for="hobby4">
            <input class="c-checkbox__input" id="hobby4" type="checkbox" name="hobby[reading]">
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
          <textarea name="address" id="address" rows="6" class="c-input" placeholder="Enter your address"></textarea>
        </div>
      </div>

      <div class="o-layout">
        <div class="o-layout__item">
          <button type="submit" class="c-btn c-btn--primary c-btn--large c-btn--block">Save Data</button>
        </div>
      </div>
    </div>
  </div>
</template>
