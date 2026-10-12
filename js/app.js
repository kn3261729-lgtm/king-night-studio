const $=s=>document.querySelector(s);
const captions=["بحبك يا روحي 💗","القمر ليا أنا 🌙","إنتِ حتة من قلبي 🫶","يا سكر أيامي 🍯","ضحكتك دنيا ✨","يا بنت قلبي ❤️","إنتِ الحكاية 🥹","روحي فيكي 💋","يا أجمل صدفة 🌸","قلبي اختارك 💞"];
const lines=["بحبك يا روحي، يا أحلى حاجة في أيامي 💗","القمر ليا أنا، والدنيا كلها شاهدة 🌙","إنتِ حتة من قلبي ومكانك جواه 🫶","يا سكر أيامي وضحكة سنيني 🍯","ضحكتك عندي بالدنيا وما فيها ✨","يا بنت قلبي يا فرحة قلبي ❤️","إنتِ الحكاية الحلوة اللي مش عايزها تخلص 🥹","روحي بتناديكي حتى وإنتِ قدامي 💋","يا أجمل صدفة وأحن قلب 🌸","قلبي اختارك من وسط الدنيا كلها 💞","وجودك لوحده بيطمن قلبي 🕊️","يا قمر، نورك مش محتاج سما 🌙"];
let pass="love";
const photos=Array.from({length:10},(_,i)=>`assets/images/maryam-${String(i+1).padStart(2,"0")}.jpg`);
function buildGallery(){const box=$("#collage");photos.forEach((src,i)=>{let card=document.createElement("div");card.className="photo-card";card.innerHTML=`<img src="${src}" alt="صورة مريوما ${i+1}" loading="lazy"><div class="caption">${captions[i]}</div>`;card.addEventListener("click",()=>openPhoto(src,captions[i]));box.appendChild(card);});}
function openPhoto(src,caption){$("#largePhoto").src=src;$("#largeCaption").textContent=caption;$("#lightbox").classList.add("open");}
let bgIndex=0, bgTimerStarted=false;
function startBackgroundSlideshow(){
  const bg=$(".bg-photo"); if(!bg)return;
  bg.style.backgroundImage=`url('${photos[0]}')`;
  if(bgTimerStarted)return; bgTimerStarted=true;
  setInterval(()=>{bgIndex=(bgIndex+1)%photos.length;bg.style.backgroundImage=`url('${photos[bgIndex]}')`;},5000);
}
$("#closeLightbox").addEventListener("click",()=>$("#lightbox").classList.remove("open"));
$("#lightbox").addEventListener("click",e=>{if(e.target===$("#lightbox"))$("#lightbox").classList.remove("open")});
$("#passForm").addEventListener("submit",async e=>{e.preventDefault();if($("#pass").value.trim().toLowerCase()===pass){$("#gate").classList.add("hidden");$("#site").classList.remove("hidden");document.body.classList.add("unlocked");startBackgroundSlideshow();window.scrollTo(0,0);const audio=$("#song");try{audio.volume=0.8;await audio.play();$("#music").textContent="♫ الموسيقى شغالة";}catch(err){$("#music").textContent="♫ شغّلي الموسيقى";}}else{$("#error").style.display="block";$("#pass").value="";$("#pass").focus();}});
$("#newLine").addEventListener("click",()=>{$("#surpriseText").textContent=lines[Math.floor(Math.random()*lines.length)];});
$("#music").addEventListener("click",async()=>{const audio=$("#song");try{if(audio.paused){await audio.play();$("#music").textContent="♫ الموسيقى شغالة";}else{audio.pause();$("#music").textContent="♫ الموسيقى";}}catch(e){alert("ضيف ملف الموسيقى باسم song.mp3 داخل مجلد assets/audio عشان تشتغل.");}});
const loader=$("#loader");window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("done"),2400));setTimeout(()=>loader.classList.add("done"),4500);
// Love counter: elapsed time since the selected relationship/story start date.
const storyStart=new Date("2024-01-01T00:00:00");
function updateLoveTimer(){
  const start=storyStart;
  const now=new Date();
  if(Number.isNaN(start.getTime())||start>now){["years","days","hours","minutes","seconds"].forEach(id=>document.getElementById(id).textContent="--");return;}
  let years=now.getFullYear()-start.getFullYear();
  let anniversary=new Date(start);anniversary.setFullYear(start.getFullYear()+years);
  if(anniversary>now)years--;
  anniversary=new Date(start);anniversary.setFullYear(start.getFullYear()+years);
  let rest=Math.floor((now-anniversary)/1000);
  const days=Math.floor(rest/86400);rest%=86400;
  const hours=Math.floor(rest/3600);rest%=3600;
  const minutes=Math.floor(rest/60);const seconds=rest%60;
  document.querySelector("#years").textContent=String(years).padStart(2,"0");
  document.querySelector("#days").textContent=String(days).padStart(3,"0");
  document.querySelector("#hours").textContent=String(hours).padStart(2,"0");
  document.querySelector("#minutes").textContent=String(minutes).padStart(2,"0");
  document.querySelector("#seconds").textContent=String(seconds).padStart(2,"0");
}
setInterval(updateLoveTimer,1000);updateLoveTimer();
buildGallery();
// Rotate the supplied photos behind the password screen with a slow cinematic crossfade.
(function cinematicGateSlideshow(){
  const shots=Array.from(document.querySelectorAll(".gate-shot"));
  if(!shots.length)return;
  let current=0;
  shots.forEach((shot,i)=>{shot.style.transitionDelay="0s";});
  setInterval(()=>{
    shots[current].classList.remove("active");
    current=(current+1)%shots.length;
    shots[current].classList.add("active");
  },4800);
})();

// Decorative drifting stars / hearts
const canvas=$("#stars"),ctx=canvas.getContext("2d");let w,h,particles=[];
function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight;particles=Array.from({length:65},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+0.5,s:Math.random()*.45+.12,a:Math.random()*.65+.15,heart:Math.random()>.82}));}
function draw(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.y-=p.s;if(p.y< -10){p.y=h+10;p.x=Math.random()*w}ctx.globalAlpha=p.a;ctx.fillStyle=p.heart?"#ff75a7":"#ffe5ef";if(p.heart){ctx.font=`${p.r*6+5}px Arial`;ctx.fillText("♥",p.x,p.y)}else{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}});ctx.globalAlpha=1;requestAnimationFrame(draw)}
addEventListener("resize",resize);resize();draw();
