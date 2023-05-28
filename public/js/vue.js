new Vue({
  el: '#app',
  data: {
    movies: [
      { id: 1, name: 'Duro de Matar' },
      { id: 2, name: 'Amanhecer' },
      { id: 3, name: 'Outro Horizonte' },
      { id: 4, name: 'Safari' }
    ],
    carrinho: [],
    currentSection: '', 
    registerData: { username: '', password: '' },
    isLoggedIn: false
  },
  methods: {
    addTocarrinho(movie) {
      if (this.isLoggedIn && !this.isMovieIncarrinho(movie)) {
        this.carrinho.push(movie);
      }
    },
    removeFromcarrinho(movie) {
      this.carrinho = this.carrinho.filter(item => item.id !== movie.id);
    },
    isMovieIncarrinho(movie) {
      return this.carrinho.some(item => item.id === movie.id);
    },
    showPaginaInicial() {
      this.currentSection = 'showPaginaInicial';
    },
    showFilmes() {
      if (this.isLoggedIn) {
        this.currentSection = 'Filmes';
      }
    },
    registerUser() {
    
      this.registerData.username = '';
      this.registerData.password = '';

      this.isLoggedIn = true; // Faz o login automaticamente após o cadastro

      this.currentSection = 'Filmes'; // Redireciona para a seção de aluguel de filmes
    },
    loginUser() {
    
      this.registerData.username = '';
      this.registerData.password = '';

      this.isLoggedIn = true; // Faz o login automaticamente após o cadastro

      this.currentSection = 'Filmes'; // Redireciona para a seção de aluguel de filmes
    },
    Filmes() {
      this.currentSection = 'carrinho';
    }
  }
});