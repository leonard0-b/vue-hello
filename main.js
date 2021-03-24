// Descrizione
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
var app = new Vue (
  {
    el: "#root",
    data: {
      messaggio: "Ciao Mondo!",
      image: "./assets/img/mappamondo.jpg",
      myclass: "txt-center",
      link: "./assets/img/donut.png",
      video: "https://www.youtube.com/watch?v=SQgyyqOBf04&ab_channel=MantonioBanderas",
      utente: ""
    }
  }
);
