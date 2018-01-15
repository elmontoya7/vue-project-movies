<template>
  <div class="fragment">
    <p class="title">{{title}}</p>
    <p class="subtitle">{{subtitle}}</p>
    <div class="row">
      <div class="space-4 space-2" v-for="movie in movies">
        <movie-item
        :key="movie.key"
        v-bind="movie" />
      </div>
    </div>
  </div>
</template>

<script>
  import MovieItem from './MovieItem'
  import Service from '../services/TMDB'
  export default {
    data() {
      return {
        title: 'Movies',
        subtitle: 'Discover trending movies right now!',
        movies:[]
      }
    },
    components: {
      MovieItem
    },
    methods: {
      async getMovies () {
        const response = await Service.getData('movie', {})
        const imageBasePath = 'http://image.tmdb.org/t/p/w370_and_h556_bestv2'
        console.log(response.data.results);
        this.movies = response.data.results.map(movie => {
          return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            image: imageBasePath + movie.poster_path,
            voteAverage: movie.vote_average
          }
        });
      }
    },
    mounted() {
      this.getMovies();
    }
  }
</script>

<style scoped>
.red {
  background-color: red;
}
</style>
