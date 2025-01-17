const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Seleziono gli elementi Html
const content = document.getElementById('content')

// Variabile "d'appoggio"

let iteam = ""

// Ciclo l'array d'oggetti
for (let i = 0; i < teamMembers.length; i++) {
  // Seleziono ogni proprietà dell'oggetto
  let elements = teamMembers[i];

  console.log(elements);


  // Seleziono le prioprietà e le associo ad una variabile
  const { name, role, email, img } = elements;

  console.log(name, role, email, img);

  // Creo i tag 
  iteam += `
  <div class="team">

      <div class="imgBox">
        <img class="pictures" src="${img}" alt="${name}">
      </div>

      <div class="elementBox">

        <h2 class"person-name">${name}</h2>

        <p class="role">${role}</p>
        
        <a href="#" class="email">${email}</a>

      </div>
  </div>
            `
}

// Stampo a schermo

content.innerHTML = iteam;



