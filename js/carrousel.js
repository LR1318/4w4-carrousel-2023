(function(){
  console.log('Début du carrousel')
  let carrousel__ouvrir = document.querySelector('.carrousel__ouvrir')
  let carrousel = document.querySelector('.carrousel')
  let carrousel__x = document.querySelector('.carrousel__x')
  let carrousel__figure = document.querySelector('.carrousel__figure')
  let carrousel__form = document.querySelector('.carrousel__form')
  console.log(carrousel__form.tagName)

  let galerie = document.querySelector('.galerie')
  let galerie__img = galerie.querySelectorAll('img')

  

  // for (const elem of galerie__img){
  // galerie__img.addEventListener('mousedown', function(){
  //   carrousel.classList.add('carrousel--activer')

  //   ajouter_les_images_de_galerie()
  // })
    
// }
  carrousel__ouvrir.addEventListener('mousedown', function(){
     carrousel.classList.add('carrousel--activer')
     document.addEventListener("keydown", function(event) {
      if (event.key == "ArrowLeft"){
         alert("Left key");
      } else if (event.key == "ArrowRight"){
         alert("Up key");
      }
    });
     ajouter_les_images_de_galerie()
  })

  carrousel__x.addEventListener('mousedown', function(){
     carrousel.classList.remove('carrousel--activer')
     document.addEventListener("keydown")
  })

/**
 * Pour chaque image de la galerie l'ajouter dans le carrousel
 */
let position = 0
let index = 0
let ancienIndex = null

function ajouter_les_images_de_galerie()
{
  for (const elem of galerie__img){
    if(ancienIndex==null){

      ajouter_une_image_dans_carrousel(elem)
      ajouter_un_radio_bouton_dans_carrousel()
    }
  }
}
/**
 * Création dynamique d'une image pour le carrousel
 * @param {*} elem une image de la galerie
 */
function ajouter_une_image_dans_carrousel(elem){
  let img = document.createElement('img')
     img.classList.add('carrousel__img')
     img.src = elem.src
     // console.log(img.src)
     carrousel__figure.appendChild(img);
}


function ajouter_un_radio_bouton_dans_carrousel(){

  let rad = document.createElement('input')
  rad.setAttribute('type','radio')
  rad.setAttribute('name','carrousel__rad')
  rad.classList.add('carrousel__rad')
  rad.dataset.index = position
  rad.addEventListener('mousedown', function(){
    index = this.dataset.index
    affiche_image_carrousel();

  })
  position++
  carrousel__form.append(rad)

}
/**
 * Permet d'afficher la nouvelle image de carrousel
 */
function affiche_image_carrousel(){
  if (ancienIndex != null){
    carrousel__figure.children[ancienIndex].style.opacity = "0"
    // carrousel__figure.children[ancienIndex].classList.remove('carrousel__img--activer');

  }
  // console.log(this.dataset.index)
  carrousel__figure.children[index].style.opacity = "1"

  // carrousel__figure.children[ancienIndex].classList.add('carrousel__img--activer');


  ancienIndex = index
}

})()

// pour changer l'image de gauche l'index va diminuer
function changer_image_gauche(){

}

// pour changer l'image de gauche l'index va augmenter
function changer_image_droite(){

}