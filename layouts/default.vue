<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto|Source+Sans+Pro|Source+Sans+Pro&display=swap');

html {
  font-family: 'Roboto', 'Source Sans Pro', 'Helvetica Neue', helvetica,
    'Apple Color Emoji', arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
