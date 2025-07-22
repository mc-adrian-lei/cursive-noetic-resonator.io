function updateTime(){
  const now=new Date();
  const hours=String(now.getHours()).padStart(2,'0');
  const minutes=String(now.getMinutes()).padStart(2,'0');
  document.getElementById('time-display').textContent=`${hours}:${minutes}`;
}
setInterval(updateTime,1000);
updateTime();

// Context menu
const contextMenu=document.getElementById('contextMenu');
const screenArea=document.getElementById('screen-area');
screenArea.addEventListener('contextmenu',e=>{
  e.preventDefault();
  contextMenu.style.left=`${e.pageX}px`;
  contextMenu.style.top=`${e.pageY}px`;
  contextMenu.style.display='block';
});
document.addEventListener('click',()=>{contextMenu.style.display='none';});

// Sliding menu
const menuBtn=document.getElementById('menuBtn');
const menuPanel=document.getElementById('menuPanel');
const menuOverlay=document.getElementById('menuOverlay');
menuBtn.addEventListener('click',e=>{
  e.stopPropagation();
  menuPanel.classList.add('open');
  menuOverlay.style.display='block';
});
menuOverlay.addEventListener('click',()=>{
  menuPanel.classList.remove('open');
  menuOverlay.style.display='none';
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    menuPanel.classList.remove('open');
    menuOverlay.style.display='none';
  }
});

// Resonance article
const resonanceLink=document.getElementById('resonanceLink');
const article=document.getElementById('resonance-content');
const closeArticle=document.getElementById('close-article');
if(resonanceLink){
  resonanceLink.addEventListener('click',e=>{
    e.preventDefault();
    article.style.display='block';
  });
}
if(closeArticle){
  closeArticle.addEventListener('click',()=>{
    article.style.display='none';
  });
}
