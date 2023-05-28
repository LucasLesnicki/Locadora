<template>
    <div class="movie-box">
      <img :src="movie.image" :alt="movie.name">
      <h3>{{ movie.name }}</h3>
      <button @click="addToCart(movie)">Adicionar ao Carrinho</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      movie: {
        type: Object,
        required: true
      }
    },
    methods: {
      addToCart(movie) {
        // Emitir um evento para adicionar o filme ao carrinho
        this.$emit('add-to-cart', movie);
      }
    }
  }
  </script>
  
  <style scoped>
  .movie-box {
    text-align: center;
    margin-bottom: 20px;
  }
  .movie-box img {
    width: 200px;
    height: 300px;
  }
  </style>
  