<template>
  <div class="movie">
    <img @error="imageError = true"
    :src="workingImage"
    alt="img_movie">
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageError: false
      }
    },
    props: {
      id: {
        type: Number,
        required: true
      },
      image: {
        type: String,
        default: 'http://lorempixel.com/318/180'
      },
      title: {
        type: String,
        default: 'Sin título'
      },
      description: {
        type: String,
        default: 'No hay descripción disponible.'
      },
      voteAverage: {
        type: Number,
        default: 0
      }
    },
    computed: {
      workingImage () {
        if (this.imageError) {
          const escapedMovieTitle = this.title.replace(' ','+')
          return `http://via.placeholder.com/370x556?text=${escapedMovieTitle}`
        }
        return this.image
      }
    }
  }
</script>

<style scoped>
.movie {
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
}

.movie img {
  width: 100%;
  object-fit: contain;
}

.movie .title {
  display: none;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  color: #f2f2f2;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
}

.movie:hover .title {
  display: block;
}
</style>
