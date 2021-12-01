<template>
  <div class="wrapper">
    <div class="header-2">
      <h2>Your daily dose of The Holy Bible:</h2>
    </div>
    <div class="s-wrapper">
      <div class="daily-verse">
        <p class="scripture">{{dailyVerse.text}}</p>
        <p class="scripture"><br> {{dailyVerse.bookName}} {{dailyVerse.displayChapter}}:{{dailyVerse.displayVerse}}</p>
        <button @click="newVerse">New Verse</button>
      </div>
    </div>
  </div>
</template>



<script>
import json from "../assets/new-testament.json"
import json2 from "../assets/old-testament.json"
export default {
  name: "BibleQuote",
  data() {
    return {
      NT: json,
      OT: json2,
      activeScriptures: undefined,
      bookRange: 16,
      dailyVerse: {
        book: 1,
        chapter: 1,
        verse: 1,
        bookName: "",
        text: "",
        displayChapter: 0,
        displayVerse: 0
      }
    }
  },
    created() {
      this.newVerse();
    },

    methods: {
      newVerse() {
        if ((Math.floor(Math.random() * 11)) <= 3)
        {
          this.activeScriptures = this.NT;
        }
        else {
          this.activeScriptures = this.OT;
        }
        // eslint-disable-line no-unused-vars
        let chapRange = 0;
        let versRange = 0;
        let randomChapter = 0;
        let randomVerse = 0;
        let randomBook = 0;
        //Select Random Book
        randomBook = Math.floor(Math.random() * 16);

        //Determine length of book in chapters and select random chapter
        for (const chapter in this.activeScriptures.books[randomBook].chapters) { // eslint-disable-line no-unused-vars
          chapRange = chapRange + 1;
        }
        randomChapter = Math.floor(Math.random() * (chapRange + 1));

        //Determine length of chapter's verses, and select random verse
        for (const verse in this.activeScriptures.books[randomBook].chapters[randomChapter].verses) { // eslint-disable-line no-unused-vars
          versRange = versRange + 1;
        }
        randomVerse = Math.floor(Math.random() * (versRange + 1));

        //Test
        console.log(this.activeScriptures.books[randomBook].book);
        console.log(this.activeScriptures.books[randomBook].chapters.length);
        console.log(randomVerse);
        console.log(this.activeScriptures.books[randomBook].chapters[randomChapter].verses[randomVerse].text);

        this.dailyVerse.bookName = this.activeScriptures.books[randomBook].book;
        this.dailyVerse.book = randomBook;
        this.dailyVerse.chapter = randomChapter;
        this.dailyVerse.verse = randomVerse;
        this.dailyVerse.text = this.activeScriptures.books[randomBook].chapters[randomChapter].verses[randomVerse].text;
        this.dailyVerse.displayChapter = randomChapter + 1;
        this.dailyVerse.displayVerse = randomVerse + 1;
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
