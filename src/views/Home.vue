<template>
  <div id="home">
    <div class="home-body">
      <bomquote/>
    </div>
  </div>
</template>

<style>

h1 {
  font-family: serif;
  color: gold;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;

}

.footer {
  background-image: url("../../public/book-of-mormon.jpg");
  background-size: cover;
}

.home-body {
  display: flex;
  width: auto;
  justify-content: center;
}

#nav {
  padding: 30px;
  background-image: url("../../public/book-of-mormon.jpg");
  background-size: cover;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {

  font-family: serif;
  font-size: 1.5em;
  text-decoration: underline;
  color: gold;
}

#nav .pure-menu-link {
  color: gold
}

</style>

<script>
  import bomquote from "../components/BOMQuote.vue"
  export default {
    name: "home",
    components: {
      bomquote
    }
  };
</script>
