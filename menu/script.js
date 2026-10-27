/*Criando lista de elementos do menu*/

const listMenu = [
  {
    link: "#",
    icon: "boxicons:home-alt-2",
    name: "Início",
  },

  {
    link: "#",
    icon: "at-icons:shopping-cart",
    name: "Vendas",
  },

  {
    link: "#",
    icon: "akar-icons:shipping-box-02",
    name: "Estoque",
  },

  {
    link: "#",
    icon: "charm:sticky-note",
    name: "Cadastro",
  },

  {
    link: "#",
    icon: "bi-cash",
    name: "Faturamento",
  },
];

for (let index = 0; index < listMenu.length; index++) {
  let listTag = document.createElement("li");

  listTag.className = "menu-item";

  listTag.innerHTML = `
    <a href="${listMenu[index].link}" class="menu-link">
      <!--<span class="material-symbols-rounded"> ${listMenu[index].icon} </span> -->

      <iconify-icon icon="${listMenu[index].icon}"></iconify-icon>

      <span class="menu-label"> ${listMenu[index].name} </span>
    </a>
    `;

  let containerList = document.querySelector(".menu-list");

  containerList.appendChild(listTag);
}

/*Criando os ajustes de colapso do menu lateral */
const sidebar = document.querySelector(".sidebar");

const aplication = document.querySelector(".aplication");

const btnSidebarToggle = document.querySelector(".sidebar-toggle");

btnSidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");

  aplication.classList.toggle("collapsed");
});

/**/
let data = new Date();

const copyright = document.querySelector(".copyright");

copyright.innerHTML = `
    <p>Feito com &hearts; no 3º Semestre de Sistemas de Informação</p>
    <p>&COPY; 2026 - ${data.getFullYear()}</p>
    `;

const initialMessage = document.querySelector(
  ".aplication>.contaier-content>h1",
);

let typeDay = "";

if (data.getHours() < 23) {
  typeDay = "Bom dia! 🌞";
} else if (data.getHours() > 12 && data.getHours() < 18) {
  typeDay = "Boa tarde ⛅";
} else {
  typeDay = "Boa noite! 🌙";
}

initialMessage.textContent = "Olá, José! " + typeDay;
