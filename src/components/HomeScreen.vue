<template>
  <main class="wrapper">
    <p>aquila aveion</p>
    <div class="img-holder">
      <img
        src="./../assets/images/presents.png"
        alt="model squeezing an orage"
      />
    </div>
    <div class="socials">
      <img src="./../assets/images/logo-instagram.svg" alt="instagram" />
      <img src="./../assets/images/logo-twitter.svg" alt="twitter" />
      <img src="./../assets/images/logo-snapchat.svg" alt="" srcset="">
      <img src="./../assets/images/mail-outline (1).svg" alt="mail" />
    </div>
    <NavBar />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "HomeScreen",
  components: {
    NavBar,
  },
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
    margin-bottom: 2em;
    img {
      // box-shadow: 0px 0px 20px 0px black;
      //   box-shadow: 0 10px 15px -3px black;
      //   box-shadow: 0 4px 6px -2px black;
      box-shadow: -10px 5px 50px black;
    }
  }
}

.socials {
  display: grid;
  place-content: center;
  height: 100%;
  position: fixed;
  right: 1em;
  img {
    height: 3em;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 3em;
    padding: .5em;
  }
}
</style>