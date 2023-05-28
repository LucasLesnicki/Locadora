<template>
  <div>
    <h1>Menu</h1>
    <div v-for="movie in movies" :key="movie.id">
      <movie-box :movie="movie" @add-to-cart="addToCart"></movie-box>
    </div>
    <button @click="goToCart">Carrinho</button>
  </div>
</template>

<script>
import MovieBox from './MovieBox.vue';

export default {
  components: {
    MovieBox
  },
  data() {
    return {
      movies: [
        // Coloque aqui os dados dos filmes, como nome, imagem e ID
      ]
    }
  },
  methods: {
    addToCart(movie) {
      // Implemente a lógica para adicionar o filme ao carrinho
    },
    goToCart() {
      // Implemente a lógica para redirecionar o usuário para a página do carrinho
    }
  }
}
</script>
