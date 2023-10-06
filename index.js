/*
https://www.prevision-meteo.ch/services/json/{VILLE}

A faire :
[x] Créer un formulaire avec un champ texte et un bouton
[x] Lorsque l'utilisateur clique sur le bouton, on doit récupérer la valeur du champ texte
[x] On doit ensuite faire une requête AJAX vers l'API de prévision météo
[x] On doit ensuite afficher les données de la météo dans la page
[x] On doit pouvoir faire une recherche pour une autre ville
[x] Les données météo doivent être structurées et affichées de manière claire/propre/lisible/efficace

*/

const submit = document.querySelector('input[type=submit]')

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    
    const ville = document.querySelector("#input-ville").value;
    // Récupérer les données météo de la ville entrée dans l'input
    const result = document.querySelector(".result");
    
    try {
        const recup = await fetch(`https://www.prevision-meteo.ch/services/json/${ville}`);
        const data = await recup.json();
        console.log(data);

        // Afficher les données dans la section result grâce à la function meteo()
        const html = `<article>
                        <h2>La météo de votre ville : ${ville}</h2>
                        <p>Le temps est ${data.current_condition.condition_key}</p>
                        <p>La température est de : ${data.current_condition.tmp}°C</p>
                        <img src="${data.current_condition.icon}"/>
                    </article>`;

        const section = document.querySelector('.result')
        section.innerHTML = "";

        result.insertAdjacentHTML('beforeend', html);
        
    } catch(error) {
        console.error(error);
    }
    
});