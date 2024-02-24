// Récupération du formulaire
const form = document.querySelector('form');

// Ajout d'un gestionnaire d'événement pour le soumission du formulaire
form.addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire
    event.preventDefault();

    // Récupération des valeurs des champs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validation des champs (simple vérification de la longueur)
    if (name.length === 0 || email.length === 0 || message.length === 0) {
        alert('Veuillez remplir tous les champs.');
    } else {
        // Envoi des données (simulé avec une alerte)
        alert(`Nom: ${name}\nEmail: ${email}\nMessage: ${message}\n\nMessage envoyé avec succès !`);
        // Réinitialisation du formulaire
        form.reset();
    }
});
