<template>
    <div>
      <h1>Carrinho</h1>
      <ul>
        <li v-for="movie in cart" :key="movie.id">
          <span>{{ movie.name }}</span>
          <button @click="removeFromCart(movie)">Remover</button>
        </li>
      </ul>
      <button @click="closeCart">Fechar Carrinho</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: []
      }
    },
    methods: {
      removeFromCart(movie) {
        // Implemente a lógica para remover o filme do carrinho
      },
      closeCart() {
        // Implemente a lógica para mover os filmes do carrinho para a estante e esvaziar o carrinho
      }
    }
  }
  </script>
  