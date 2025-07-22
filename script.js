// Update time every second
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('time-display').textContent = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000);
updateTime();

// Menu sliding logic
const menuBtn = document.getElementById('menuBtn');
const menuPanel = document.getElementById('menuPanel');
const menuOverlay = document.getElementById('menuOverlay');
menuBtn.addEventListener('click', e => {
  e.stopPropagation();
  menuPanel.classList.add('open');
  menuOverlay.style.display = 'block';
});
menuOverlay.addEventListener('click', () => {
  menuPanel.classList.remove('open');
  menuOverlay.style.display = 'none';
});

// Close menu with Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    menuPanel.classList.remove('open');
    menuOverlay.style.display = 'none';
  }
});

// Context menu for screen area
const contextMenu = document.createElement('div');
contextMenu.className = 'context-menu';
contextMenu.innerHTML = `
  <button>Wallpapers</button>
  <button>Widgets</button>
  <button>Home Settings</button>
`;
document.body.appendChild(contextMenu);

const screenArea = document.getElementById('screen-area');
screenArea.addEventListener('contextmenu', e => {
  e.preventDefault();
  contextMenu.style.left = `${e.pageX}px`;
  contextMenu.style.top = `${e.pageY}px`;
  contextMenu.style.display = 'block';
});

document.addEventListener('click', () => {
  contextMenu.style.display = 'none';
});

