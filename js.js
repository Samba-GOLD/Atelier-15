const form= document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();


    // Collectez les valeurs des champs de formulaire
    const nom = document.getElementById('nom');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
  
    // Faites quelque chose avec les valeurs du formulaire ici, par exemple, envoyez-les à un serveur via AJAX
    if( !nom || !email || !message ) {
        alert('Veuillez renseigner les champs');
        console.error(erreur);
    }
    else{
    alert('Merci de Nous avoir fait Confiance, Nous vous recontacterons dans un bref délais');
    form.submit();
    
  }
    // Réinitialisez le formulaire pour une utilisation ultérieure
    document.querySelector('#mon-formulaire').reset();
  
    // Ajoutez ici le code pour afficher un message de confirmation ou rediriger l'utilisateur vers une autre page
});