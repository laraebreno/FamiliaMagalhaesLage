/* Código para deixar a barra de navegação com toggle icon */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*Código para alterar a class active da nav bar de acordo com a parte da página que está sendo acessada*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*Código para colocar uma linha embaixo da nav bar dependendo da parte do site que tiver*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*Código para remover o toggle da nav bar quando clicar em um link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*Códio da Contagem regressiva*/
const dataEvento = new Date("May 31, 2025 15:30:00").getTime();

    // Atualize a contagem regressiva a cada 1 segundo
    const intervalo = setInterval(function() {
      const agora = new Date().getTime(); // Hora atual
      const tempoRestante = dataEvento - agora; // Tempo restante

      // Cálculos de tempo
      const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

      // Exibe os resultados
      document.getElementById("dias").textContent = dias;
      document.getElementById("horas").textContent = horas;
      document.getElementById("minutos").textContent = minutos;
      document.getElementById("segundos").textContent = segundos;

      // Se o tempo acabar, mostra a mensagem
      if (tempoRestante <= 0) {
        clearInterval(intervalo);
        document.querySelector(".tempo").innerHTML = "O evento começou!";
      }
    }, 1000);

// Selecionando todos os links da navbar e as seções
navLinks = document.querySelectorAll('header nav a');
sections = document.querySelectorAll('.presentes-conteudo .sec'); // Ajuste para as divs com a classe "sec"

// Adicionando um ouvinte de eventos para cada link da navbar
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        // Obtendo o ID do link clicado
        const targetId = link.getAttribute('href').substring(1); // Pega a parte após # do href
        const targetSection = document.getElementById(targetId); // Seleciona a seção pelo ID

        // Rolando até a seção com um efeito suave
        window.scrollTo({
            top: targetSection.offsetTop - 100, // Ajuste para deixar um pequeno espaço acima
            behavior: 'smooth'
        });

        // Atualizando a classe 'active' na navbar
        navLinks.forEach(link => link.classList.remove('active')); // Remove 'active' de todos os links
        link.classList.add('active'); // Adiciona 'active' ao link clicado
    });
});

// Código para adicionar a classe 'active' nas seções visíveis ao rolar a página (similar ao que você já tem)
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === id) {
                    link.classList.add('active');
                }
            });
        }
    });
};