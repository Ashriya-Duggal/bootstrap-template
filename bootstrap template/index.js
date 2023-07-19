
const images = [
    'images/pexels-photo-169789.jpeg',
    'images/pexels-photo-4100130.webp'
  ];
  
  let currentImageIndex = 0;
  
  function changeBackgroundImage() {
    const slideshowContainer = document.querySelector('.slideshow-container');
  

    slideshowContainer.style.backgroundImage = `url('${images[currentImageIndex]}')`;
  
    currentImageIndex++;
  
    if (currentImageIndex === images.length) {
      currentImageIndex = 0;
    }
    setTimeout(changeBackgroundImage, 5000);
  }
  
  changeBackgroundImage();

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  $(document).ready(function(){
    $("#allItemsTab").tab("show");
  });

function remove(){
  var element = document.getElementById("remove");
      element.classList.remove("rounded-pill");
}




