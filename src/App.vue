<template>
  <div id="app">
    <div id="nav">
      <div class="pure-menu-horizontal">
        <h1>The Daily Verse</h1>
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <router-link to="/bible" class="pure-menu-link">Bible</router-link>
          </li>
          <li class="pure-menu-item">
            <router-link to="/" class="pure-menu-link">Book of Mormon</router-link>
          </li>
          <li class="pure-menu-item">
            <router-link to="/dnc" class="pure-menu-link">DnC</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
    <div class="footer">
    <a class="footer" href="#"><em>Tessék, itt a GitHub Link...</em></a>
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
  background-image: url("../public/book-of-mormon.jpg");
  background-size: cover;
  color: gold;
}

.home-body {
  display: flex;
  width: auto;
  justify-content: center;
}

#nav {
  padding: 30px;
  background-image: url("../public/book-of-mormon.jpg");
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
  export default {
    name: "app",
    components: {
    }
  };
</script>
