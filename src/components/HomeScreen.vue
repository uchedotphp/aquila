<template>
  <main class="wrapper">
    <h1>{{ name }}</h1>
    <div class="img-holder">
      <img
        src="./../assets/images/presents.png"
        alt="model squeezing an orage"
      />
    </div>
    <div class="socials">
      <a target="_blank" :href="instagram"
        ><svg
          style="background: none; padding: 0"
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Logo Instagram</title>
          <path
            d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
          />
          <path
            d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
          />
        </svg>
      </a>
      <a target="_blank" :href="twitter"
        ><svg
          style="fill: #cc4364"
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Logo Twitter</title>
          <path
            d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"
          />
        </svg>
      </a>
      <a target="_blank" :href="snapchat">
        <svg
          style="fill: #cc4364"
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Logo Snapchat</title>
          <path
            d="M496 347.21a190.31 190.31 0 01-32.79-5.31c-27.28-6.63-54.84-24.26-68.12-52.43-6.9-14.63-2.64-18.59 11.86-24 14.18-5.27 29.8-7.72 36.86-23 5.89-12.76 1.13-27.76-10.41-35.49-15.71-10.53-30.35-.21-46.62 2.07 3.73-46.66 8.66-88.57-22.67-127.73C338.14 48.86 297.34 32 256.29 32s-81.86 16.86-107.81 49.33c-31.38 39.26-26.4 81.18-22.67 127.92-16.32-2.25-30.81-12.79-46.63-2.18-14.72 9.85-17 29.76-5.44 43s31.64 9.5 43.45 20.6c6.49 6.09 3.49 12.61-.35 20.14-14.48 28.4-39.26 45.74-69.84 51.56-4 .76-22.31 2.87-31 3.65 0 9.28.52 16.78 1.63 21.73 2.94 13.06 12.32 23.58 23.69 30.1 11.18 6.4 35.48 6.43 41.68 15.51 3 4.48 1.76 12.28 5.33 17.38a23.8 23.8 0 0015.37 9.75c18.61 3.61 37.32-7.2 56.42-2.1 14.85 3.95 26.52 15.87 39.26 24 15.51 9.85 32.34 16.42 50.83 17.49 38.1 2.21 59.93-18.91 90.58-36.42 19.5-11.14 38.15-3.86 58.88-2.68 20.1 1.15 23.53-9.25 29.62-24.88a27.37 27.37 0 001.54-4.85 10.52 10.52 0 002.28-1.47c2-1.57 10.55-2.34 12.76-2.86 10.28-2.44 20.34-5.15 29.17-11.2 11.31-7.76 17.65-18.5 19.58-32.64a93.73 93.73 0 001.38-15.67zM208 128c8.84 0 16 10.74 16 24s-7.16 24-16 24-16-10.74-16-24 7.16-24 16-24zm103.62 77.7c-15.25 15-35 23.3-55.62 23.3a78.37 78.37 0 01-55.66-23.34 8 8 0 0111.32-11.32A62.46 62.46 0 00256 213c16.39 0 32.15-6.64 44.39-18.7a8 8 0 0111.23 11.4zM304 176c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24z"
          />
        </svg>
      </a>
      <a target="_blank" :href="email">
        <svg style="fill: #cc4364"
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Mail</title>
          <path
            d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"
          />
        </svg>
      </a>
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
  mounted() {
    this.$store.dispatch("fetchData");
  },
  computed: {
    name() {
      return this.$store.getters.name;
    },
    twitter() {
      return "https://twitter.com/" + this.$store.getters.twitter;
    },
    snapchat() {
      return "https://www.snapchat.com/add/" + this.$store.getters.snapchat;
    },
    instagram() {
      return "https://www.instagram.com/" + this.$store.getters.instagram;
    },
    email() {
      return "mailto:" + this.$store.getters.email;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  justify-content: center;

  h1 {
    text-align: center;
    word-spacing: 2.5em;
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
  a {
    svg {
      fill: #fff;
      height: 2.5em;
      background: #fff;
      border-radius: 5px;
      margin-bottom: 3em;
      padding: 0.2em;
    }
  }
}
</style>
