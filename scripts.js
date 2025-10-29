const app = Vue.createApp({
  data() {
    return {
      projetsArr: [],
      filtreActif: 'Tous les projets',
      categories: ['Tous les projets', 'Design graphique', '3D', 'Vidéo', 'Dessin']
    };
  },
  computed: {
    projetsFiltres() {
      if (this.filtreActif === 'Tous les projets') {
        return this.projetsArr;
      }
      // On filtre selon la catégorie (case-insensitive)
      return this.projetsArr.filter(p => {
        return p.category.toLowerCase() === this.filtreActif.toLowerCase().replace(' graphique', '');
      });
    }
  },
  methods: {
    changerFiltre(categorie) {
      this.filtreActif = categorie;
    }
  },
  mounted() {
    fetch('projets.json')
      .then(response => response.json())
      .then(data => {
        this.projetsArr = data;
      })
      .catch(error => console.error('Erreur chargement JSON :', error));
  }
});

app.mount('#app');
