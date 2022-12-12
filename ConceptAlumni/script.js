function start () {
	var cloud = document.getElementById("imageCloud");
	var images = cloud.getElementsByTagName("img");
	images.forEach(element => {
		element.style.left = Math.random()*(cloud.style.width)+cloud.style.top+"px";
		element.style.top = Math.random()*(cloud.style.width-element.style.height)+cloud.style.left+"px";
	});

}


document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.carousel');
	var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
	$('.carousel').carousel()
	$('.carousel').duration(200);
});


const flavoursContainer = document.getElementById('mySlideShow');
const flavoursScrollWidth = flavoursContainer.scrollWidth;
var goingBack = false;

window.addEventListener('load', () => {
  self.setInterval(() => {
			
    if (goingBack == false) {
      flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
			if (flavoursContainer.scrollLeft >= flavoursScrollWidth)
				goingBack = true;
    } else {
			flavoursContainer.scrollTo(flavoursContainer.scrollLeft - 1, 0);
			if (flavoursContainer.scrollLeft <= 5)
				goingBack = false;
		}

  }, 15);
});


const flavoursContainer2 = document.getElementById('mySlideShow2');
const flavoursScrollWidth2 = flavoursContainer2.scrollWidth;
var goingBack2 = false;

window.addEventListener('load', () => {
	flavoursContainer2.scrollLeft = flavoursScrollWidth2
  self.setInterval(() => {
			
    if (goingBack2 == false) {
      flavoursContainer2.scrollTo(flavoursContainer2.scrollLeft + 1, 0);
			if (flavoursContainer2.scrollLeft >= flavoursScrollWidth2-300)
				goingBack2 = true;
    } else {
			flavoursContainer2.scrollTo(flavoursContainer2.scrollLeft - 1, 0);
			if (flavoursContainer2.scrollLeft <= 5)
				goingBack2 = false;
		}

  }, 15);
});

function showImage (imageSource) {
	$("#showerImage").attr("src", imageSource);
	//$("#showerImage").remove()
	//$('#imageShower').innerHTML += '<img id="showerImage" src="replaceme" class="showerImage" alt="">'.replace('replaceme',imageSource);
	$('#imageShower').fadeIn();
}