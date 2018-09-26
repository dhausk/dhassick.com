const projectTile = document.querySelectorAll('.project');
const projImages = document.querySelectorAll('.project-image');
const projDesc = document.querySelector('.project-description');
projectTile.forEach(project => {
  project.addEventListener('mouseenter', (event) => {
    showProjDescription(event.target.id);
  })
  project.addEventListener('mouseleave', (event) => {
    hideProjectDescription(event.target.id);
  })
})
function showProjDescription(proj) {
  switch (proj) {
    case "1":
      swapHidden(0);
      break;
    case "2":
      console.log(proj);
      break;
    case "3":
      console.log(proj);
      break;
  };
}
function hideProjectDescription(proj) {
  switch (proj) {
    case "1":
      console.log(proj);
      break;
    case "2":
      console.log(proj);
      break;
    case "3":
      console.log(proj);
      break;
  };
}
function swapHidden(currentClass){
  console.log(currentClass);
  
}