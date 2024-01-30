const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// partie 2 ecoute du cick des fleches droite et gauche
let arrowLeft = document.querySelector('.arrow_left')
arrowLeft.addEventListener('click', () => {
    console.log('Flèche gauche cliquée!')
})

let arrowRight = document.querySelector('.arrow_right')
arrowRight.addEventListener('click', () => {
    console.log('Flèche droite cliquée!')
})

// partie 3 comptage et affichage des points par slide

let banner = document.getElementById('banner')
let dots = document.createElement('div')
dots.classList.add('dots')
banner.appendChild(dots)


let numberOfSlides = slides.length
let currentIndex = 0
for (let i = 0; i < numberOfSlides; i++) {
    let dot = document.createElement('span')
    dot.classList.add('dot')

    if (i === currentIndex) {
        dot.classList.add('dot_selected')
    }

    dots.appendChild(dot)
}

// partie 4 Modification slide au click

updateSlide()

function updateSlide() {
    // Mettre à jour le bullet point actif
    updateActiveDot()

    // Mettre à jour l'image
    let imagePath = `./assets/images/slideshow/${slides[currentIndex].image}`
    banner.querySelector('.banner-img').src = imagePath

    // Mettre à jour le texte
    let tagLine = slides[currentIndex].tagLine
    banner.querySelector('p').innerHTML = tagLine
}

function updateActiveDot() {
    // Accéder directement aux éléments avec la classe .dot
    let dots = banner.querySelectorAll('.dot')
    dots.forEach(dot => dot.classList.remove('dot_selected'))
    dots[currentIndex].classList.add('dot_selected')
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % numberOfSlides
    updateSlide()
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + numberOfSlides) % numberOfSlides
    updateSlide()
}

// Ajouter les event listeners pour les flèches
document.querySelector('.arrow_right').addEventListener('click', nextSlide)
document.querySelector('.arrow_left').addEventListener('click', prevSlide)
