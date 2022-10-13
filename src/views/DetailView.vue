<template>
  <div>
    {{ this.$route.params.id }}
    <p>{{ this.$store.state.messe }}</p>
    <p>{{ filterdCountries }}</p>

  </div>
</template>

<script>
import countries from '@/country'

export default {
  data() {
    return {
      countriesData: countries,
      aaa: 0,
    }
  },
  computed: {
    filterdCountries() {
      const a = [];

      for( let i = 0; i < this.countriesData.length; i++) {
        
        const b = this.countriesData[i]

        if (b.ja_name === this.$store.state.messe) {
          a.push(b);
      }
    }
    return a;
    }
  },
}
</script>