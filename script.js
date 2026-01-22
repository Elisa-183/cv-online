const cv = {
    nome: "Il tuo nome",
    email: "nome@email.it",
    telefono: "123456789",
    profilo: "Sviluppatore web con passione per JavaScript.",
    esperienze: [
      "Esperienza lavorativa 1",
      "Esperienza lavorativa 2"
    ],
    competenze: [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  };
  
  // Inserimento dati nel DOM
  document.getElementById("nome").innerText = cv.nome;
  
  document.getElementById("contatti").innerText =
    `Email: ${cv.email} | Tel: ${cv.telefono}`;
  
  document.getElementById("profilo").innerText = cv.profilo;
  
  // Esperienze
  const listaEsperienze = document.getElementById("esperienze");
  cv.esperienze.forEach(esperienza => {
    const li = document.createElement("li");
    li.innerText = esperienza;
    listaEsperienze.appendChild(li);
  });
  
  // Competenze
  const listaCompetenze = document.getElementById("competenze");
  cv.competenze.forEach(competenza => {
    const li = document.createElement("li");
    li.innerText = competenza;
    listaCompetenze.appendChild(li);
  });
  