const projectTile = document.querySelectorAll('.project-card');
const projImages = document.querySelectorAll('.project-image');
const projDesc = document.querySelectorAll('.project-description');

projectTile.forEach(project => {
  project.addEventListener('mouseenter', (event) => {
    showProjDescription(event.target.id);
  });
  project.addEventListener('mouseleave', (event) => {
    hideProjectDescription(event.target.id);
  });
});
function showProjDescription(projNum) {  
  projImages[projNum].classList.add('hidden');
  projDesc[projNum].classList.remove('hidden');  
}
function hideProjectDescription(projNum) {
  projImages[projNum].classList.remove('hidden');
  projDesc[projNum].classList.add('hidden'); 
}
