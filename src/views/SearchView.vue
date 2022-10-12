<template>
  <div>
    <p><input type="text" v-model="keyword"><button @click="search">検索</button></p>
    <hr>
    <p>国旗一覧</p>
    <flag :iso="countriesData[0].alpha2" />

    <table>
        <tr v-for="user in filterdCountries" :key="user.id">
            <td v-text="user.ja_name"></td>
        </tr>
    </table>
  </div>
</template>

<script>
import countries from '@/country'

export default {
  data() {
    return {
      countriesData: countries,
      filteredCountry: [],
      keyword: "",
      hensuu: 0
    }
  },
  computed: {
    filterdCountries() {
      const a = [];

      for( const i in this.a) {

        const b = this.a[i]

      if (this.countriesData.indexOf(this.keyword) !== -1) {
        a.push(b);
      }
    }
    return a;
    }
  },
  methods: {
    search() {
      console.log("あ")
      if ( this.keyword === this.countriesData[this.hensuu].ja_name ) {
        console.log("ok")
      } else {
        console.log("そんな国はありません")
      }
    }
  }
}

//インプットをv-modelでkeywordに入れる。
//keywordを元にcountriesDataをフィルタリングし、filteredに入れる。
//filteredに入れた国をv-forで表示する。
</script>

