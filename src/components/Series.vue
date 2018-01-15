<template>
  <div class="fragment">
    <p class="title">{{title}}</p>
    <p class="subtitle">{{subtitle}}</p>
    <div class="row">
      <div class="space-4 space-2" v-for="serie in series">
        <movie-item
        :key="serie.key"
        v-bind="serie" />
      </div>
    </div>
  </div>
</template>

<script>
  import Service from '../services/TMDB'
  import MovieItem from './MovieItem'
  export default {
    data() {
      return {
        title: 'TV Series',
        subtitle: 'Discover trending tv shows!',
        series:[]
      }
    },
    methods: {
      async getSeries () {
        const response = await Service.getData('tv', {})
        const imageBasePath = 'http://image.tmdb.org/t/p/w370_and_h556_bestv2'
        console.log(response.data.results);
        this.series = response.data.results.map(serie => {
          return {
            id: serie.id,
            title: serie.name,
            description: serie.overview,
            image: imageBasePath + serie.poster_path,
            voteAverage: serie.vote_average
          }
        });
      }
    },
    mounted() {
      this.getSeries();
    },
    components: {
      MovieItem
    }
  }
</script>

<style scoped>

</style>
