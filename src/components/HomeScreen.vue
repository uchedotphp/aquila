<template>
  <main class="wrapper">
    <p>aquila aveion</p>
    <div class="img-holder">
      <img
        src="./../assets/images/presents.png"
        alt="model squeezing an orage"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeScreen",
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  justify-content: center;

  p {
    text-align: center;
    word-spacing: 1em;
    margin-bottom: 1.5em;
  }

  .img-holder {
    text-align: center;
    img {
      // box-shadow: 0px 0px 20px 0px black;
      //   box-shadow: 0 10px 15px -3px black;
      //   box-shadow: 0 4px 6px -2px black;
      box-shadow: -10px 5px 50px black;
    }
  }
}
</style>