// Creates variable
const panels = document.querySelectorAll('.panel')

// Creates method and arrow function to listen for panel clicks 
panels.forEach(panel => {
  panel.addEventListener('click',() => {
    removeActiveClasses()
    panel.classList.add('active');
  })
})

// Creates function to remove active class (for line 7) for inactive panels
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  }) 
}