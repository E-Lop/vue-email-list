/* Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

// ------------------------------------
// ANALISI
// ------------------------------------
// creo array che conterrà gli indirizi email
// creo funzione che interroga l'API e fa il push del risultato nell'array delle email
// eseguo la funzione per 10 volte
// stampo il contenuto dell'array nel DOM
//
// BONUS
// lego la stampa dell'array nel DOM a un v-if con lunghezza dell'array = 10
// ------------------------------------

var app = new Vue({
  el: '#root',
  data: {
    emailArray: [],
  },
  methods: {
    getRandomEmailFromApi() {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          const singleEmail = response.data.response;
          this.emailArray.push(singleEmail);
          console.log('push array', this.emailArray);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.getRandomEmailFromApi();
    }
  },
});
