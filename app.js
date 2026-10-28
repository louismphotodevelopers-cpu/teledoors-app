'use strict';
const routes = new Map([
 ['home', 'Home'], ['windows', 'Windows'], ['doors', 'Doors'],
 ['garage-doors', 'Garage Doors'], ['how-to', 'How To']
]);
function showPage({focus=false}={}) {
 let route=location.hash.slice(1)||'home';
 if(!routes.has(route)){route='home';history.replaceState(null,'','#home');}
 document.querySelectorAll('.page').forEach(page=>{page.hidden=page.id!==route;});
 document.querySelectorAll('.bottom-nav a').forEach(link=>{
  if(link.hash==='#'+route)link.setAttribute('aria-current','page');
  else link.removeAttribute('aria-current');
 });
 document.title='TELE-DOORS | '+routes.get(route);
 window.scrollTo(0,0);
 if(focus)document.querySelector('#main').focus({preventScroll:true});
}
window.addEventListener('hashchange',()=>showPage({focus:true}));
// Also reset scroll when Home is tapped while Home is already selected.
document.addEventListener('click',event=>{
 const link=event.target.closest('a[href^="#"]');
 if(link&&link.hash===location.hash&&routes.has(link.hash.slice(1))){event.preventDefault();showPage({focus:true});}
});
showPage();
