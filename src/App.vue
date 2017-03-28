<template>
  <div id="app-container" class="o-wrapper u-padding-top u-padding-bottom" style="background-color: #f5f5f5;">
    <div class="o-layout">
      <div class="o-layout__item">
        <ul>
          <li>Item 1 (No directive)</li>
          <li v-hl-basic>Item 2</li>
          <li v-hl-value="'#edf8e8'">Item 3</li>
          <li v-hl-arg:background="'#e6b138'">Item 4 (highlight-arg with arg)</li>
          <li v-hl-arg="'#e6b138'">Item 5 (highlight-arg without arg)</li>
          <li v-hl-mod.delayed="'#4e9bf6'">Item 6 (Delayed for 3s)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>
