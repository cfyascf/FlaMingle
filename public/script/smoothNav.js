let navButtons = document.querySelectorAll('.x');
let sections = document.querySelectorAll('section');

console.log(navButtons);
console.log(sections);

navButtons.forEach((link, index) => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        sections[index].scrollIntoView({behavior: 'smooth'});
    })
})

function toggleActive(event) {
    event.preventDefault();
    var links = document.querySelectorAll('.nav-bar a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
}