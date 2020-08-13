 ## Etape 0 : Créer un programme d'IA très basic en python :
  - Créer un programme qui pause une question à l'utilisateur et en fonction de la réponse revoie un message prédéfini. Le programme doit exactement inclure:
  - Au moins une déclaration de variable
  - Un tableau (array)
  - Une itération
  - Une condition (if ...)

 ## Etape 1 : Quizz :

  - A quoi sert console.log ?
      cela sert a afficher comme le print en python ou pour débugger

  - A quoi sert var ?
      c'est pour assigner une variable

  - Quelle est la différence avec const et let ?
      let ---> Pour une variable que vous réassignez
      const -> Pour une variable que vous ne réattribuez pas

  - Comment définir une fonction en JS entre ES5 et ES6 ?
      function square(x) {
        return x * x;
      }

  - Quelle est la nouvelle syntaxe ?
      const square = (x) => {
        return x * x;
      };

  - A quoi sert document ?
      L'interface Document représente n'importe quelle page Web chargée dans le navigateur
      et sert de point d'entrée dans le contenu de la page Web, qui est l'arborescence DOM.


  - Quelle est la différence avec window ?
      Le document est en fait chargé à l'intérieur de l'objet window
      et dispose de propriétés comme le titre, l'URL, le cookie, etc
      si vous voulez accéder à une propriété pour la fenêtre, c'est window.property, s'il s'agit d'un document,
      c'est window.document.property qui est également disponible en bref sous le nom de document.property.

  - A quoi sert querySelector ?
      retourne le premier Element dans le document correspondant au sélecteur
      ou groupe de sélecteurs - spécifié(s), ou null si aucune correspondance n'est trouvée.
      element = document.querySelector(sélecteurs);
      c'est une methode pour intéragir avec le DOM et ca sert a selectionner un element sur ma page
      var el = document.querySelector(".maclasse");
      ex:

  - Quelle est la différence avec getElementById et querySelectorAll ?
      querySelectorAll ---> selectionner tous les elements
      getElementById   ---> selectionner un seul element

  - A quoi sert addEventListener ?
      Utilisez addEventListenerpour réagir à un événement en mettant en ecouteur
      element.addEventListener(eventType, (event) => {
      });

  - Citer d'autre events pouvant être écoutés ?

  - A quoi sert innerText ?
      cela sert a afficher le texte de l'element selectionné

  - Quel est la différence avec innerHTML et InsertAdjacentHTML ?
        La innerHTMLpropriété et la insertAdjacentHTMLméthode prennent une chaîne au lieu d'un élément,
        ils doivent donc analyser la chaîne et en créer des éléments, avant de pouvoir être placés dans le DOM.
        La innerHTMLpropriété peut être utilisée à la fois pour obtenir et définir
        le code HTML du contenu d'un élément.
      innerHTML:
        lors de l'écriture dans innerHTML, il écrasera le contenu de l'élément source.
        Cela signifie que le HTML doit être chargé et ré-analysé

  - Qu'est que la concatenation ?
      La concaténation est un mot généralement utilisé pour désigner le fait de rassembler
      deux chaines de caractères pour en former une nouvelle.
    --> on fait ca avec le +

  - Quelle est la différence avec l'interpolation ?
       l'interpolation peut être plus lente que la concaténation de chaînes,
       mais la plupart des développeurs JavaScript préféreront les backtick
      pour la capacité d'écrire du code plus propre malgré le petit impact sur les performances.

  - Citer la methode qui permet de faire une itération ( elle n'est pas dans le programme )
      .forEach

 ## Etape 2 : Modification du programme :

  - Remplacer les "var" par les bons mots
  - Ecrire la fonction avec la nouvelle syntaxe
  - Utiliser une autre methode que querySelector
  - Remplacer la concatenation par une interpolation
  - Utiliser une autre methode que innerText

 ## Utiliser ce dossier comme exemple pour créer votre page

  - Modifier les noms des id et des varaibles pour qu'elles correspondent à votre programme (s'assurer que ca marche toujours :) )
  - Convertir votre programme python en programme JS (Il devrait être dans la fonction "createMessage")
  - Faire un peut de CSS pour rendre ca Jolie

 ## Etape 4 : Mettre en ligne sur GitHhub

  - Sassurer que le nom du dossier finisse par ".github.io" (ca vous simplifiera la vie pour la suite :) )
  - Initialiser git sur ce projet
  - Mettre ce projet sur github
  - Mettre ce projet en ligne accessible à tous

