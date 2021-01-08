<template>
  <nav>
    <a href="#">home</a>
    <a href="#">about</a>
    <img src="./../assets/images/face-model-two.png" alt="face model" />
    <a href="#">gallery</a>
    <a href="#">contact</a>
  </nav>
</template>

<script>
export default {
  name: "NavvBar",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: inline-block;
    text-decoration: none;
    margin-right: 3em;
    text-transform: uppercase;
  }

  a:last-child {
    margin-right: 0;
  }

  img {
    height: 12em;
    clip-path: circle(40%);
    // margin-right: 0;
  }
}
</style>