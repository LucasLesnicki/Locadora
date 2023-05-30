<template>
    <div>
      <h1>Estante</h1>
      <ul>
        <li v-for="movie in shelf" :key="movie.id">{{ movie.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        shelf: []
      }
    }
  }
  </script>
  