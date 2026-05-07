const menuItems = [
  // Gâteaux & Pâtisseries
  { id:1, name:"Pots Gâteaux", cat:"gateau", price:"2 500 FCFA", icon:"fas fa-jar", desc:"Verrines gourmandes en pot individuel, décorées à la main. Choisissez votre parfum.", img:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80&fit=crop" },
  { id:2, name:"Gâteau Anniversaire", cat:"gateau", price:"Sur devis", icon:"fas fa-birthday-cake", desc:"Pièce unique sur mesure, décoration personnalisée, ganaches et fruits frais.", img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80&fit=crop" },
  { id:3, name:"Petit Four", cat:"gateau", price:"4 500 FCFA / doz", icon:"fas fa-cookie-bite", desc:"Assortiment raffiné de petites bouchées sucrées, idéal pour vos réceptions.", img:"https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80&fit=crop" },
  { id:4, name:"Pain au Lait Chocolat", cat:"gateau", price:"800 FCFA", icon:"fas fa-bread-slice", desc:"Pain au lait moelleux, cœur fondant de chocolat noir, cuit à la perfection.", img:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80&fit=crop" },
  { id:5, name:"Pain Chocolat au Beurre", cat:"gateau", price:"1 000 FCFA", icon:"fas fa-cookie", desc:"Feuilletage pur beurre AOP, deux bâtons de chocolat fondant à l'intérieur.", img:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80&fit=crop" },
  { id:6, name:"Quiche au Jambon", cat:"gateau", price:"3 000 FCFA", icon:"fas fa-circle", desc:"Appareil crème–œufs, jambon fumé, emmental fondu sur pâte brisée maison.", img:"https://images.unsplash.com/photo-1612477491914-a2f46ef8586e?w=600&q=80&fit=crop" },
  { id:7, name:"Quiche au Poulet", cat:"gateau", price:"3 200 FCFA", icon:"fas fa-circle", desc:"Poulet effiloché, poivrons, crème fraîche, herbes de Provence sur pâte brisée.", img:"https://images.unsplash.com/photo-1608855725042-e95ffd4ca487?w=600&q=80&fit=crop" },
  // Crêpes
  { id:8, name:"Crêpe Simple", cat:"crepe", price:"500 FCFA", icon:"fas fa-circle-notch", desc:"Fine pâte à crêpe dorée, servie nature ou avec sucre & citron.", img:"https://images.unsplash.com/photo-1630362137311-ca837e790e47?w=600&q=80&fit=crop" },
  { id:9, name:"Crêpe au Beurre", cat:"crepe", price:"700 FCFA", icon:"fas fa-circle-notch", desc:"Crêpe dorée généreusement beurrée, parfumée à la fleur d'oranger.", img:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=80&fit=crop" },
  { id:10, name:"Crêpe au Chocolat", cat:"crepe", price:"1 000 FCFA", icon:"fas fa-circle-notch", desc:"Nappée de ganache chocolat noir fondue, agrémentée de noisettes concassées.", img:"https://images.unsplash.com/photo-1695654392959-ad28b91be6d1?w=600&q=80&fit=crop" },
  { id:11, name:"Crêpe Panée", cat:"crepe", price:"1 200 FCFA", icon:"fas fa-circle-notch", desc:"Crêpe garnie, roulée et panée croustillante, façon street-food gourmand.", img:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&fit=crop" },
  // Snacks & Friture
  { id:12, name:"Rissol", cat:"snack", price:"500 FCFA", icon:"fas fa-drumstick-bite", desc:"Chausson frit croustillant garni de viande hachée épicée et légumes sautés.", img:"https://images.unsplash.com/photo-1512685076844-4161e436c4f5?w=600&q=80&fit=crop" },
  { id:13, name:"Néme", cat:"snack", price:"600 FCFA", icon:"fas fa-scroll", desc:"Nems croustillants à la viande et aux vermicelles, sauce pimentée maison.", img:"https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80&fit=crop" },
  { id:14, name:"Tacos Simple", cat:"snack", price:"2 000 FCFA", icon:"fas fa-utensils", desc:"Tortilla garnie de salade, tomates, fromage fondu et sauces maison.", img:"https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&q=80&fit=crop" },
  { id:15, name:"Tacos Pané", cat:"snack", price:"2 500 FCFA", icon:"fas fa-utensils", desc:"Tortilla généreuse, poulet pané croustillant, cheddar fondu, sauce fromagère.", img:"https://images.unsplash.com/photo-1613514785940-daed07835eb3?w=600&q=80&fit=crop" },
  { id:16, name:"Poulet Pané", cat:"snack", price:"3 000 FCFA", icon:"fas fa-drumstick-bite", desc:"Blanc de poulet mariné, pané maison, frit à l'or, servi avec sauce tomate.", img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80&fit=crop" },
  { id:17, name:"Frites", cat:"snack", price:"1 000 FCFA", icon:"fas fa-grip-lines", desc:"Pommes de terre fraîches coupées maison, frites dorées, assaisonnement maison.", img:"https://images.unsplash.com/photo-1688978181542-87a886a16fbe?w=600&q=80&fit=crop" },
  // Pizzas
  { id:18, name:"Pizza Simple", cat:"pizza", price:"4 000 FCFA", icon:"fas fa-pizza-slice", desc:"Sauce tomate maison, mozzarella fondante, basilic frais. La classique.", img:"https://images.unsplash.com/photo-1571407970349-c4d61d400f8f?w=600&q=80&fit=crop" },
  { id:19, name:"Pizza Chorizo", cat:"pizza", price:"5 500 FCFA", icon:"fas fa-pizza-slice", desc:"Chorizo pimenté, poivrons colorés, olives noires, mozzarella bien fondante.", img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop" },
  { id:20, name:"Pizza à l'Ananas", cat:"pizza", price:"5 000 FCFA", icon:"fas fa-pizza-slice", desc:"Jambon de qualité, ananas frais caramélisé, mozzarella — l'alliance sucrée-salée.", img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80&fit=crop" },
  // Plats chauds
  { id:21, name:"Riz Cantonnais", cat:"plat", price:"3 500 FCFA", icon:"fas fa-bowl-rice", desc:"Riz sauté aux œufs, petits pois, carottes, crevettes et sauce soja.", img:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80&fit=crop" },
  { id:22, name:"Poulet Rôti", cat:"plat", price:"6 000 FCFA", icon:"fas fa-drumstick-bite", desc:"Poulet fermier entier rôti lentement, herbes fraîches et jus de viande.", img:"https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?w=600&q=80&fit=crop" },
  { id:23, name:"Gratin Pommes de Terre", cat:"plat", price:"3 000 FCFA", icon:"fas fa-fire-burner", desc:"Pommes de terre fondantes en couches, crème, emmental gratiné à la perfection.", img:"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80&fit=crop" },
  { id:24, name:"Gratin de Spaghetti", cat:"plat", price:"3 500 FCFA", icon:"fas fa-fire-burner", desc:"Spaghetti fondants, béchamel maison, fromage gratiné, légèrement épicé.", img:"https://images.unsplash.com/photo-1621996346565-ead9b6f25b52?w=600&q=80&fit=crop" },
  { id:25, name:"Spaghetti Bolognaise", cat:"plat", price:"3 500 FCFA", icon:"fas fa-bowl-food", desc:"Pâtes al dente, sauce bolognaise mijotée 3h, parmesan râpé à table.", img:"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80&fit=crop" },
  { id:26, name:"Riz Pilaf au Poisson", cat:"plat", price:"4 500 FCFA", icon:"fas fa-fish", desc:"Riz pilaf parfumé, lotte fraîche à la sénégalaise, légumes du marché.", img:"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80&fit=crop" },
  { id:27, name:"Viande de Bœuf Braisé", cat:"plat", price:"7 000 FCFA", icon:"fas fa-drumstick-bite", desc:"Pièce de bœuf braisée lentement au four, jus de viande réduit, légumes fondants et herbes aromatiques.", img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&fit=crop" },
];

const galleryPhotos = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1612477491914-a2f46ef8586e?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1688978181542-87a886a16fbe?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1630362137311-ca837e790e47?w=600&q=80&fit=crop",
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80&fit=crop",
];

let cart = [];

// Three.js animation
(function initThree(){
  const canvas = document.getElementById('hero-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const count = 180;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  for(let i = 0; i < count; i++){
    pos[i*3] = (Math.random() - .5) * 18;
    pos[i*3+1] = (Math.random() - .5) * 12;
    pos[i*3+2] = (Math.random() - .5) * 8;
    sizes[i] = Math.random() * 3 + 1;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  const mat = new THREE.PointsMaterial({ color: 0xC8942A, size: 0.04, sizeAttenuation: true, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false });
  const particles = new THREE.Points(geo, mat);
  scene.add(particles);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.003, 8, 120), new THREE.MeshBasicMaterial({ color: 0xC8942A, transparent: true, opacity: 0.12 }));
  scene.add(ring);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.8, 0.002, 8, 120), new THREE.MeshBasicMaterial({ color: 0xE8B84B, transparent: true, opacity: 0.08 }));
  scene.add(ring2);
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => { mouseX = (e.clientX / window.innerWidth - .5) * 2; mouseY = -(e.clientY / window.innerHeight - .5) * 2; });
  window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });
  const clock = new THREE.Clock();
  (function animate(){
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    particles.rotation.y = t * 0.04 + mouseX * 0.1;
    particles.rotation.x = t * 0.02 + mouseY * 0.05;
    ring.rotation.z = t * 0.08; ring.rotation.x = Math.sin(t * 0.3) * 0.2;
    ring2.rotation.z = -t * 0.05; ring2.rotation.y = t * 0.1;
    renderer.render(scene, camera);
  })();
})();

// Parallax et navigation
const parallaxBg = document.getElementById('parallaxBg');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  parallaxBg.style.transform = `scale(1.12) translateY(${y * 0.3}px)`;
  document.getElementById('mainNav').classList.toggle('scrolled', y > 60);
});

// Curseur personnalisé
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
document.addEventListener('mousemove', e => {
  dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px';
  ring.style.left = e.clientX + 'px'; ring.style.top = e.clientY + 'px';
});

// Révélation au scroll
const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.12 });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

// Compteurs animés
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.target;
    let start = 0;
    const step = ts => { if(!start) start = ts; const p = Math.min((ts - start) / 1500, 1); el.textContent = Math.floor(p * target); if(p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// Rendu du menu
function renderMenu(filter = 'all'){
  const grid = document.getElementById('menuGrid');
  const filtered = filter === 'all' ? menuItems : menuItems.filter(i => i.cat === filter);
  grid.innerHTML = filtered.map((item, idx) => `
    <div class="menu-card reveal" style="transition-delay:${idx * .07}s">
      <div class="menu-card-inner">
        <div class="menu-front">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
          <div class="menu-front-overlay"></div>
          <div class="menu-front-info"><h3>${item.name}</h3><span class="price">${item.price}</span></div>
        </div>
        <div class="menu-back">
          <div class="menu-back-icon"><i class="${item.icon}"></i></div>
          <h3>${item.name}</h3><p>${item.desc}</p>
          <div class="price-big">${item.price}</div>
          <button class="menu-back-btn" onclick="addToCart(${item.id})">Ajouter au Panier</button>
        </div>
      </div>
    </div>`).join('');
  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
renderMenu();

// Filtres
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.filter);
  });
});

// Galerie défilante
const track = document.getElementById('galleryTrack');
track.innerHTML = [...galleryPhotos, ...galleryPhotos].map(src => `<div class="gallery-item"><img src="${src}" alt="O'Délice" loading="lazy"><div class="gallery-item-overlay"></div></div>`).join('');

// Slider témoignages
let currentSlide = 0;
const sliderTrack = document.getElementById('sliderTrack');
const dots = document.querySelectorAll('.slider-dot');
function goSlide(n){
  currentSlide = n;
  sliderTrack.style.transform = `translateX(-${n * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === n));
}
setInterval(() => goSlide((currentSlide + 1) % 3), 5000);

// Panier & paiement
function addToCart(id){
  const item = menuItems.find(i => i.id === id);
  if(item){
    cart.push(item);
    showToast(`✓ ${item.name} ajouté au panier`);
  }
}
function payNow(method){
  if(cart.length === 0){
    showToast("⚠ Votre panier est vide !");
    return;
  }
  const total = cart.reduce((s, i) => s + parseInt(i.price.replace(/[^0-9]/g, '')), 0);
  let msg = "Bonjour O'Délice 👋\nCommande :\n";
  cart.forEach(i => msg += `- ${i.name} (${i.price})\n`);
  msg += `\nTotal : ${total.toLocaleString()} FCFA`;
  const url = method === 'wave'
    ? `https://pay.wave.com/sen?amount=${total}&note=${encodeURIComponent(msg)}`
    : `https://om.sn/pay?amount=${total}&note=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// Toast
function showToast(msg){ const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000); }

// Formulaire contact
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  showToast("✓ Message envoyé avec succès !");
  this.reset();
  setTimeout(() => this.submit(), 500);
});

// Navigation mobile
function toggleMobileNav(){ document.getElementById('mobileNav').classList.toggle('open'); }

// Effet 3D sur cartes témoignages
document.addEventListener('mousemove', e => {
  document.querySelectorAll('.temoignage-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width/2)) / rect.width;
    const dy = (e.clientY - (rect.top + rect.height/2)) / rect.height;
    card.style.transform = Math.abs(dx) < 1.2 && Math.abs(dy) < 1.2
      ? `perspective(1000px) rotateY(${dx*8}deg) rotateX(${-dy*6}deg) scale(1.01)`
      : '';
  });
});