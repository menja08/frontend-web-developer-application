
// for mobile
function runImageSlider() {

    // get image slider
    let itemContainer = document.getElementById("itemContainer");
    
    let sliderLength = itemContainer.children.length;
    let itemContainerChildren = itemContainer.children;
   
    itemContainer.style.backgroundColor = "lightblue";
    for(let i=1; i < sliderLength; i++) {
	itemContainerChildren[i].style.display = "none";
    }
    
    // first image shown on loading
    let currentImage = itemContainerChildren[0];

    // the click function
    function leftArrowClicked() {
	leftArrow = document.getElementById("leftArrow");

	leftArrow.addEventListener("click", function() {

	    leftArrow.style.backgroundColor = "red";
	    console.log("clicked");

	    //first image

	    if(currentImage === itemContainerChildren[0]) {

		//currentImage.style.display = "none";
		currentImage = itemContainerChildren[sliderLength-1];
		currentImage.style.display = "flex";

		// loop over the rest of elements and hide them
		for(let i=0; i < sliderLength; i++) {
		    if(itemContainerChildren[i] !== currentImage) {
			itemContainerChildren[i].style.display = "none";
			console.log("one");
		    }
		}

		// clicked image was not first image
		// display previous image
	    } else {
		currentImage = itemContainerChildren[i-1];
		currentImage.style.display = "flex";

		// loop over the rest of the elements and hide them
		for(let i=0; i < sliderLength; i++) {
		    if(itemContainerChildren[i] !== currentImage) {
			itemContainerChildren[i].style.display = "none";
			console.log("one");
		    }
		}
	    }

	    // is this line necessary
	    return currentImage;
	});

    }

    leftArrowClicked();

    //rightArrow
    function rightArrowClicked() {
	rightArrow = document.getElementById("rightArrow");

	rightArrow.addEventListener("click", function() {

	    rightArrow.style.backgroundColor = "red";
	    console.log("clicked");

	    //first image

	    if(currentImage === itemContainerChildren[0]) {

		//currentImage.style.display = "none";
		currentImage = itemContainerChildren[sliderLength-1];
		currentImage.style.display = "flex";

		// loop over elements and hide them
		for(let i=0; i < sliderLength; i++) {
		    if(itemContainerChildren[i] !== currentImage) {
			itemContainerChildren[i].style.display = "none";
			console.log("one");
		    }
		}
		
	    }

	    // is this line necessary
	    return currentImage;
	});
    }
    rightArrowClicked();
    
}


runImageSlider();
