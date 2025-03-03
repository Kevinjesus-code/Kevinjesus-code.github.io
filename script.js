const rightbtn = document.querySelector(".adelante");
const leftbtn = document.querySelector(".atras");

const content = document.querySelector(".slider");



document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const content = document.querySelector(".slider");

        if (content) {
            content.scrollLeft = 1633; 
        }
    }, 600);
});
rightbtn.addEventListener("click", ()=>{
    content.scrollLeft+=326 ;
})
leftbtn.addEventListener("click", ()=>{
    content.scrollLeft-=326;
})
const testimonios = [
    "Arigbi",  
    "Vanya",   
    "Ksenya",  
    "Chan",    
    "Dmitry",  
    "Alex",    
    "Alena",   
    "Victoria",
    "Pavel",   
    "Angel",   
    "Tony"     
];

let indiceActual = 5; 
function cambiarTestimonio(direccion) {
    let nuevoIndice = indiceActual + direccion;

    if (nuevoIndice >= 0 && nuevoIndice < testimonios.length) {
        indiceActual = nuevoIndice;

        let nameElement = document.getElementById("name");

       
        nameElement.style.opacity = -1;


        setTimeout(() => {
            nameElement.textContent = testimonios[indiceActual];

           
            nameElement.style.opacity = 1;
        }, 400);
    }


    document.querySelector(".atras").disabled = (indiceActual === 0);
    document.querySelector(".adelante").disabled = (indiceActual === testimonios.length - 1);
}
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetMenu = document.getElementById(button.getAttribute('data-target'));
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== targetMenu) menu.parentElement.classList.remove('open');
        });
        button.parentElement.classList.toggle('open');
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('open');
        });
    }
});
