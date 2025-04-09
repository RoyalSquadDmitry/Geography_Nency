const carousel = document querySelector('.carousel');
const prevButton = document querySelector('.prev-button');
const nextButton = document querySelector('.next-button');

prevButton addEventListener('click', () => {
  carousel scrollBy({
    left: -130,
  });
}); 

nextButton addEventListener('click', () => {
  carousel scrollBy({
    left: 130,
  });
}); 
