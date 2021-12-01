<template>
  <div class="wrapper">
    <div class="header-2">
      <h2>Your daily dose of the Doctrine and Covenants:</h2>
    </div>
    <div class="s-wrapper">
      <div class="daily-verse">
        <p class="scripture">{{dailyVerse.text}}</p>
        <p class="scripture"><br> {{dailyVerse.reference}}</p>
        <button @click="newVerse">New Verse</button>
      </div>
    </div>
  </div>

</template>

<script>
import json from "../assets/dnc.json"
export default {
  name: "DnCQuote",
  data() {
    return {
      scriptures: json,
      dailyVerse: {
        reference: "",
        text: "",
      }
    }
  },
    created() {
      this.newVerse();
    },

    methods: {
      newVerse() {
        // eslint-disable-line no-unused-vars
        let versRange = 0;
        let randomChapter = 0;
        let randomVerse = 0;

        //Pick a random section
        randomChapter = Math.floor(Math.random() * 138);

        //Determine length of a section and select a random verse
        for (const verse in this.scriptures.sections[randomChapter].verses) { // eslint-disable-line no-unused-vars
          versRange = versRange + 1;
        }
        randomVerse = Math.floor(Math.random() * (versRange + 1));

        //Test
        console.log(this.scriptures.sections[randomChapter].verses[randomVerse].reference);
        console.log(this.scriptures.sections[randomChapter].verses[randomVerse].text);

        this.dailyVerse.reference = this.scriptures.sections[randomChapter].verses[randomVerse].reference
        this.dailyVerse.text = this.scriptures.sections[randomChapter].verses[randomVerse].text
      },
    }
}
</script>

<style lang="css" scoped>

.daily-verse {
  border: solid gold 2px;
  display: flex;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 5%;
  margin-right: 5%;
  padding: 5%;
  flex-direction: column;

}

.header-2 {
  display: flex;
  text-align: center;
  margin: auto;
}

.s-wrapper {
  display: flex;
  border: solid black 1px;
  margin: auto;
}

.scripture {
  font-style: italic;
  font-family: serif;
}

.wrapper {
  display: flex;
  border: solid black 1px;
  flex-direction: column;
  justify-content: center;
  width: 80%;
}


</style>
