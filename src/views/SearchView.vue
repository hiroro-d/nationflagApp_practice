<template>
  <div>
    <p><input type="text" v-model="keyword"><button>検索</button></p>
    <hr>

          {{ this.$route.params.id }}
          <p>{{ this.$store.state.messe }}</p>
          <p>{{ filterdCountries2 }}</p>

      <ul v-for="SearchedCountry in filterdCountries" :key="SearchedCountry.id">
        <li @click="detail(SearchedCountry.ja_name)" class="hover:bg-gray-300">
          <span class="text-5xl"><flag :iso="SearchedCountry.alpha2" class='mb-10 rounded-full' /></span> {{ SearchedCountry.ja_name }}
        </li>
      </ul>
  </div>
</template>

<script>
import countries from '@/country'

export default {
  data() {
    return {
      countriesData: countries,
      keyword: '',
    }
  },
  computed: {
    filterdCountries() {
      const a = [];

      for( let i = 0; i < this.countriesData.length; i++) {
        
        const b = this.countriesData[i]

        if (b.ja_name.indexOf(this.keyword) !== -1) {
          a.push(b);
      }
    }
    return a;
    },
    filterdCountries2() {
      const a = [];

      for( let i = 0; i < this.countriesData.length; i++) {
        
        const b = this.countriesData[i]

        if (b.ja_name === this.$store.state.messe) {
          a.push(b);
      }
    }
    return a;
    },
  },
  methods: {
    detail(n) {
      //console.log(n)
      this.$store.commit('detail', n)
    }
    //クリックしたら数字取得してミューテーションに飛ばす
  }
}

//インプットをv-modelでkeywordに入れる。
//keywordを元にcountriesDataをフィルタリングし、filteredに入れる。
//filteredに入れた国をv-forで表示する。

//国名をクリック→詳細ページを表示
//ルーターリンクで飛ばす→飛んだ先はクリックした国名の情報をcomputedに渡して表示
//クリックした国のnumericを取得、その数字をvuexの変数に入れる、詳細ページでその変数を取り出す、
//その変数の国の詳細を表示する
</script>

