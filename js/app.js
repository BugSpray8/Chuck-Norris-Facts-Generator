'use strict';

let quotes = [
    "'Chuck Norris peut faire des ronds avec une equerre'",
    "'Quand Chuck Norris fait l'épreuve des araignées dans Fort Boyard, elles sortent elles-mêmes les petits papiers et lisent à voix haute.'",
    "'Chuck Norris peut écrire un traitement de texte avec la souris.'",
    "'Peter Parker a été mordu par une araignée, Clark Kent a été mordu par Chuck Norris'",
    "'Chuck norris se souvient très bien de son futur'",
    "'Chuck Norris peut dire Schwarzkopf en verlan.'",
    "'Rien ne sert de jouer aux échecs avec Chuck Norris, il ne connait pas l'échec.'",
    "'L'ordinateur de Chuck Norris n'a pas de bouton CRTL. Chuck Norris a toujours le contrôle.'",
    "'Chuck Norris a deja reussi a casser 3 pattes a un canard.'",
    "'En Avril dernier, Chuk Norris a fait un barbecue... et les aéroports européens ont été fermés pendant une semaine...'",
    "'M.Propre était videur et ne voulait pas laisser chuck rentrer en boite, maintenant il est femme de ménage !!'",
    "'Quand Chuck Norris va au Mcdo, les hamburgers sont aussi bien que sur les photos, même mieux.'",
    "'Chuck Norris regarde Charlie Chaplin avec le son.'",
    "'Chuck Norris ne ment jamais, c'est la vérité qui se trompe.'",
    "'Quand Chuck Norris regarde le soleil c'est le soleil qui a mal aux yeux'",
    "'Chuck Norris peut cultiver un champ magnétique'",
    "'Le poisson rouge de Chuck Norris habite dans le Loch Ness'",
    "'Chuck Norris peut appuyer sur Ctrl-Alt-Suppr avec une seule main...'",
    "'Chuck Norris peut jouer à World of Warcraft sur Game Boy Color.'",
    "'Tout les soir les cauchemars font le même Chuck Norris'",
    "'Lorsque Chuck Norris voit une étoile fillante,celle-ci fait un voeux'",
    "'chuck norris connait le nom du soldat inconnu'"
    ]
    let color = [
      "#9A1C1A",
      "#1B2032",
      "#DC4A47",
      "#6B1411"
      ]

  
  
  function getQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
  }
  function getColor(){
    let randomNumber = Math.floor(Maths.random() * color.length);
    document.getElementById('newQuoteSection','new-quote-button ').style.backgroundColor = color[randomNumber];

  }

  