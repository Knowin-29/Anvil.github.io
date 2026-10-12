const read=(key)=>{try{return localStorage.getItem(key)}catch{return null}};
const save=(key,value)=>{try{localStorage.setItem(key,value)}catch{}};
let theme=read('anvil-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
function setTheme(value){theme=value;document.documentElement.dataset.theme=value;document.querySelector('#theme').setAttribute('aria-pressed',String(value==='dark'));save('anvil-theme',value)}
document.querySelector('#theme').addEventListener('click',()=>setTheme(theme==='light'?'dark':'light'));setTheme(theme);
const tabs=[...document.querySelectorAll('[role=tab]')];
function activatePanel(name,focus=false){tabs.forEach(tab=>{const active=tab.dataset.panel===name;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;document.getElementById(tab.getAttribute('aria-controls')).hidden=!active;if(active&&focus)tab.focus()})}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>activatePanel(tab.dataset.panel));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();activatePanel(tabs[next].dataset.panel,true)})});
document.querySelector('a[data-showcase="feedback"]').addEventListener('click',event=>{event.preventDefault();activatePanel('feedback');document.querySelector('#showcase').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});document.querySelector('#tab-feedback').focus({preventScroll:true})});
const dialog=document.querySelector('#lightbox');let trigger;
document.querySelectorAll('.zoom').forEach(button=>button.addEventListener('click',()=>{trigger=button;const img=document.querySelector('#lightbox-image');img.src=button.dataset.image;img.alt=button.querySelector('img').alt;document.querySelector('#lightbox-caption').textContent=button.dataset.caption;dialog.showModal();document.body.classList.add('modal-open')}));
document.querySelector('#close-lightbox').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');trigger?.focus()});
