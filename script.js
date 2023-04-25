
const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const box = document.querySelector('.box');
const overlay = document.querySelector('.overlay');
const dropdown = document.querySelectorAll('.dropdown');


const toggle = () =>{
  openMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('hidden');
  overlay.classList.toggle('show');
  box.classList.toggle('show');

}



for(const item of dropdown){
  item.addEventListener('click',() =>{
    item.classList.toggle('show-links');
  
  });
}

menu.addEventListener('click',toggle);
overlay.addEventListener('click',toggle);