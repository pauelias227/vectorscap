'use strict';
const C={crema:'#F8F5ED',carbon:'#252927',verde:'#238174',rojo:'#a12d2d',azul:'#83a6c8',amar:'#fdf9b4'};
const COLORS=[['Crema',C.crema],['Carbón',C.carbon],['Verde petróleo',C.verde],['Rojo',C.rojo],['Azul',C.azul],['Amarillo',C.amar]];
const GROUPS=[['body','Gorra'],['brim','Visera'],['emb','Bordado']];
const PRODUCTS=[
{id:1,n:'Trucker Montseny',t:'trucker',p:54,c:{body:C.crema,brim:C.verde,emb:C.rojo}},
{id:2,n:'Clásica Carbón',t:'beisbol',p:52,c:{body:C.carbon,brim:C.carbon,emb:C.amar}},
{id:3,n:'Retro Anime Noche',t:'retro',p:58,c:{body:C.azul,brim:C.carbon,emb:C.amar}},
{id:4,n:'Dad Hat Petróleo',t:'beisbol',p:50,c:{body:C.verde,brim:C.verde,emb:C.crema}},
{id:5,n:'Retro Arcade',t:'retro',p:56,c:{body:C.amar,brim:C.rojo,emb:C.carbon}},
{id:6,n:'Trucker Barbería',t:'trucker',p:60,c:{body:C.carbon,brim:C.crema,emb:C.rojo}}];
const TYPES={todas:'Todas',trucker:'Trucker',beisbol:'Béisbol',retro:'Retro'};
const REVIEWS=[['Reseña de ejemplo','Texto provisional: aquí irá la opinión real de un cliente sobre su gorra personalizada.','Cliente 1'],['Reseña de ejemplo','Texto provisional: aquí irá la opinión de un tatuador o barbero sobre su merchandising.','Cliente 2'],['Reseña de ejemplo','Texto provisional: aquí irá la opinión de un ilustrador sobre el bordado de su diseño.','Cliente 3']];
const POSTS=[
{s:'como-elegir-tu-gorra',t:'Cómo elegir la gorra para tu diseño',d:'Artículo provisional',cat:'Guías',x:['Texto provisional. Aquí irá un artículo real sobre cómo elegir forma, color de tela y color de bordado.','Sustituye este contenido editando el archivo app.js, en la lista POSTS.']},
{s:'del-boceto-al-bordado',t:'Del boceto al bordado',d:'Artículo provisional',cat:'Proceso',x:['Texto provisional. Aquí se contará cómo una ilustración se convierte en un bordado profesional.']},
{s:'merchandising-pequenas-tiradas',t:'Merchandising en tiradas cortas',d:'Artículo provisional',cat:'Negocio',x:['Texto provisional. Aquí se explicará por qué las tiradas cortas funcionan para artistas, barberos y tatuadores.']}];
const $=(s,r=document)=>r.querySelector(s);
function cap(b,v,e){return `<svg viewBox="0 0 300 200" role="img" aria-label="Gorra"><path d="M38 132C38 62 90 24 150 24s108 38 110 108z" fill="${b}" stroke="rgba(0,0,0,.2)" stroke-width="2"/><path d="M150 24v108M110 30c-14 30-18 62-16 102M190 30c14 30 18 62 16 102" stroke="rgba(0,0,0,.14)" fill="none"/><circle cx="150" cy="24" r="8" fill="${v}" stroke="rgba(0,0,0,.2)"/><path d="M26 132c70 20 170 20 250-6 18-4 24 14 6 24-80 30-190 34-256 8-8-6-6-22 0-26z" fill="${v}" stroke="rgba(0,0,0,.2)" stroke-width="2"/><circle cx="150" cy="84" r="26" fill="${e}"/><path d="M138 90c10-22 28-26 34-22-12 2-18 12-20 24z" fill="${b}"/></svg>`}
const logoSVG=`<svg width="38" height="38" viewBox="0 0 38 38" aria-hidden="true"><circle cx="19" cy="19" r="19" fill="${C.rojo}"/><g transform="translate(5 8) scale(.093 .093)"><path d="M26 132C26 62 78 24 150 24s120 38 124 108c-60 24-180 24-248 0z" fill="${C.crema}"/></g></svg>`;
const NAV=[['inicio','Inicio'],['tienda','Tienda'],['sobre-mi','Sobre mí'],['resenas','Reseñas'],['contacto','Contacto'],['blog','Blog']];
const cfgs={};
function conf(id,c){cfgs[id]={...c};return `<div class="conf" id="${id}"><div class="cp">${cap(c.body,c.brim,c.emb)}</div>${GROUPS.map(([k,l])=>`<div class="grp"><b>${l}</b>${COLORS.map(([n,h])=>`<button class="sw" data-k="${k}" data-v="${h}" style="background:${h}" aria-label="${l}: ${n}" aria-pressed="${c[k]===h}"></button>`).join('')}</div>`).join('')}</div>`}
const cname=h=>(COLORS.find(c=>c[1]===h)||[h])[0];
function pedido(name,c,notas){return `Pedido de gorra personalizada (Vectors Cap)\nModelo: ${name}\nColor de gorra: ${cname(c.body)}\nColor de visera: ${cname(c.brim)}\nColor de bordado: ${cname(c.emb)}\nNotas / diseño de referencia: ${notas||'(sin notas)'}\n`}
function show(title,note,text){$('#mt').textContent=title;$('#mn').textContent=note;$('#mx').value=text;$('#m').showModal()}
function card(p){return `<article class="card"><div class="cp">${cap(p.c.body,p.c.brim,p.c.emb)}</div><div class="in"><h3>${p.n}</h3><span class="price">Desde ${p.p} €</span><div class="row"><button class="btn" data-ped="${p.id}">Personalizar</button></div></div></article>`}
const V={
inicio:()=>`<div class="wrap"><section class="hero"><div><h1>Gorras personalizadas, desde una sola unidad</h1><p>Convierte tu ilustración, tu marca o tu cultura favorita en una gorra con acabado de coleccionista. Sin pedidos masivos.</p><div class="row"><a class="btn" href="#tienda">Ver la tienda</a><a class="btn ghost" href="#sobre-mi">Conocer el proyecto</a></div></div>${conf('hero',PRODUCTS[0].c)}</section>
<div class="perks"><div><h3>Calidad premium</h3><p>Materiales y bordado de alta gama.</p></div><div><h3>Personalización total</h3><p>Tu diseño, tus colores.</p></div><div><h3>Desde 1 unidad</h3><p>Producción bajo demanda.</p></div><div><h3>Envío rápido</h3><p>Plazos por confirmar.</p></div></div>
<h2>Colecciones destacadas</h2><div class="note">Productos de ejemplo: nombres y precios provisionales.</div><div class="grid">${PRODUCTS.slice(0,3).map(card).join('')}</div>
<div class="band"><div><h2>¿Tienes un diseño en mente?</h2><p>Cuéntanoslo y lo convertimos en bordado.</p></div><a class="btn" href="#contacto">Escribir un mensaje</a></div></div>`,
tienda:()=>`<div class="wrap"><h1>Tienda</h1><div class="note">Productos de ejemplo. De momento no hay pago online: el botón prepara el texto de tu pedido.</div><div class="filters" id="fl">${Object.entries(TYPES).map(([k,l])=>`<button data-f="${k}" aria-pressed="${k==='todas'}">${l}</button>`).join('')}</div><div class="grid" id="pg">${PRODUCTS.map(card).join('')}</div></div>`,
'sobre-mi':()=>`<div class="wrap two"><div class="ph"><div>Aquí irá tu foto<br>(provisional)</div></div><div><h1>Sobre mí</h1><div class="note">Texto provisional: sustitúyelo por tu historia.</div><p>Vectors Cap es una marca digital de gorras personalizadas de alta gama, pensada para creativos y emprendedores que quieren llevar su propia estética.</p><h3>Qué hacemos</h3><p>Merchandising de calidad en tiradas cortas para artistas, barberos y tatuadores. Diseños exclusivos de cultura pop y retro. Consultoría para convertir una ilustración en un bordado profesional.</p></div></div>`,
resenas:()=>`<div class="wrap"><h1>Reseñas</h1><div class="note">Reseñas de ejemplo provisionales. No son opiniones de clientes reales.</div><div class="grid">${REVIEWS.map(r=>`<article class="card"><div class="in"><span class="stars" aria-label="5 estrellas">★★★★★</span><p>${r[1]}</p><b>${r[2]}</b><span class="meta">${r[0]}</span></div></article>`).join('')}</div></div>`,
contacto:()=>`<div class="wrap two"><div><h1>Contacto</h1><div class="info"><div><b>Email</b><br><span>Próximamente</span></div><div><b>Instagram</b><br><span>Próximamente</span></div><div><b>Ubicación</b><br><span>Barcelona</span></div></div></div><form id="cf"><div class="note">Aún no hay email activo. El formulario prepara el texto para que lo copies y lo envíes cuando haya un canal de contacto.</div><label>Nombre<input name="n" required></label><label>Motivo<select name="m"><option>Gorra personalizada</option><option>Merchandising para mi negocio</option><option>Consultoría de bordado</option><option>Otro</option></select></label><label>Mensaje<textarea name="t" rows="5" required></textarea></label><button class="btn" type="submit">Preparar mensaje</button></form></div>`,
blog:()=>`<div class="wrap"><h1>Blog</h1><div class="note">Artículos de ejemplo provisionales.</div><div class="grid">${POSTS.map(p=>`<article class="card"><div class="in"><span class="meta">${p.cat} · ${p.d}</span><h3>${p.t}</h3><a href="#blog-${p.s}">Leer artículo</a></div></article>`).join('')}</div></div>`};
function route(){let h=location.hash.slice(1)||'inicio',v=V[h],post;
 if(!v&&h.startsWith('blog-')){post=POSTS.find(p=>'blog-'+p.s===h);if(post)v=()=>`<div class="wrap post"><a href="#blog">← Volver al blog</a><h1>${post.t}</h1><p class="meta">${post.cat} · ${post.d}</p>${post.x.map(t=>`<p>${t}</p>`).join('')}</div>`}
 if(!v){h='inicio';v=V.inicio}
 $('#app').innerHTML=v();const sec=h.startsWith('blog-')?'blog':h;
 $('#nav').innerHTML=NAV.map(([k,l])=>`<a href="#${k}"${k===sec?' aria-current="page"':''}>${l}</a>`).join('');
 document.title=(post?post.t:(NAV.find(n=>n[0]===h)||[,'Inicio'])[1])+' · Vectors Cap';window.scrollTo(0,0)}
document.addEventListener('click',e=>{const t=e.target;
 if(t.classList.contains('sw')){const box=t.closest('.conf');cfgs[box.id][t.dataset.k]=t.dataset.v;const c=cfgs[box.id];$('.cp',box).innerHTML=cap(c.body,c.brim,c.emb);box.querySelectorAll(`.sw[data-k="${t.dataset.k}"]`).forEach(b=>b.setAttribute('aria-pressed',b===t))}
 if(t.dataset.f){document.querySelectorAll('#fl button').forEach(b=>b.setAttribute('aria-pressed',b===t));$('#pg').innerHTML=PRODUCTS.filter(p=>t.dataset.f==='todas'||p.t===t.dataset.f).map(card).join('')}
 if(t.dataset.ped){const p=PRODUCTS.find(x=>x.id==t.dataset.ped);show('Personaliza: '+p.n,'Elige colores y copia el pedido.','');
  $('#mn').innerHTML='';const box=document.createElement('div');box.innerHTML=conf('mod',p.c);$('#mn').appendChild(box);
  const upd=()=>{$('#mx').value=pedido(p.n,cfgs.mod,'')};upd();$('#mn').onclick=e2=>{if(e2.target.classList.contains('sw'))setTimeout(upd)}}
 if(t.id==='mc'){$('#mx').select();(navigator.clipboard?navigator.clipboard.writeText($('#mx').value):Promise.reject()).then(()=>t.textContent='Copiado',()=>document.execCommand('copy'));}
 if(t.id==='mk')$('#m').close()});
document.addEventListener('submit',e=>{if(e.target.id==='cf'){e.preventDefault();const f=new FormData(e.target);show('Tu mensaje','Copia este texto y envíalo cuando haya un canal de contacto.',`Nombre: ${f.get('n')}\nMotivo: ${f.get('m')}\nMensaje: ${f.get('t')}`)}});
$('#m').addEventListener('close',()=>{$('#mc').textContent='Copiar texto'});
$('#logo').innerHTML=logoSVG+'<span>Vectors Cap</span>';
window.addEventListener('hashchange',route);route();
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js').catch(()=>{});
