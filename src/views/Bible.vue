<template>
  <div id="Bible">
    <div class="home-body">
      <BibleQuote/>
    </div>
  </div>
</template>

<script>
  import BibleQuote from "../components/biblequote.vue"
  export default {
    name: "Bible",
    components: {
      BibleQuote
    }
  };
</script>
