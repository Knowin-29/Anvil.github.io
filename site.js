const read=(key)=>{try{return localStorage.getItem(key)}catch{return null}};
const save=(key,value)=>{try{localStorage.setItem(key,value)}catch{}};
let theme=read('anvil-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
function setTheme(value){theme=value;document.documentElement.dataset.theme=value;document.querySelector('#theme').setAttribute('aria-pressed',String(value==='dark'));save('anvil-theme',value)}
document.querySelector('#theme').addEventListener('click',()=>setTheme(theme==='light'?'dark':'light'));setTheme(theme);
document.querySelector('a[data-showcase="feedback"]').href='#panel-feedback';
const dialog=document.querySelector('#lightbox');let trigger;
document.querySelectorAll('.zoom').forEach(button=>button.addEventListener('click',()=>{trigger=button;const img=document.querySelector('#lightbox-image');img.src=button.dataset.image;img.alt=button.querySelector('img').alt;document.querySelector('#lightbox-caption').textContent=button.dataset.caption;dialog.showModal();document.body.classList.add('modal-open')}));
document.querySelector('#close-lightbox').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');trigger?.focus()});
