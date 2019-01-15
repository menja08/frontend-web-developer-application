
// for mobile
function runImageSlider() {

    // get image slider
    let itemContainer = document.getElementById("itemContainer");
    
    let sliderLength = itemContainer.children.length;
    let itemContainerChildren = itemContainer.children;

    let screenSize = window.innerWidth;
    if (screenSize < 401) {
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
    } // end of screenSize if statement

    // select the counter
    counter = document.getElementById("counter");
    let itemCounter = 0;

    // add button1 to cart
    let button1Counter = 0;
    let button1 = document.getElementById("button1");
    button1.addEventListener("click", addedButton1);

    function addedButton1() {
	button1.style.backgroundColor = "green";
	button1Counter++;
	itemCounter++;
	counter.innerHTML = itemCounter;
    }

    // remove button1 from cart
    let removeButton1 = document.getElementById("removeButton1");
    removeButton1.addEventListener("click", removesButton1);

    function removesButton1 () {
	itemCounter--;
	button1Counter--;
	
	if(button1Counter === 0) {
	    counter.innerHTML = itemCounter;
	}
	if(itemCounter == 0) {
	    counter.innerHTML = itemCounter;
	}
	counter.innerHTML = itemCounter;
    }

    // item2
        // add button2 to cart
    let button2Counter = 0;
    let button2 = document.getElementById("button2");
    button2.addEventListener("click", addedButton2);

    function addedButton2() {
	button2.style.backgroundColor = "green";
	button2Counter++;
	itemCounter++;
	counter.innerHTML = itemCounter;
    }

    // remove button2 from cart
    let removeButton2 = document.getElementById("removeButton2");
    removeButton2.addEventListener("click", removesButton2);

    function removesButton2 () {
	itemCounter--;
	button2Counter--;
	
	if(button2Counter === 0) {
	    counter.innerHTML = itemCounter;
	}
	if(itemCounter == 0) {
	    counter.innerHTML = itemCounter;
	}
	counter.innerHTML = itemCounter;
    }


    // item3
        // add button3 to cart
    let button3Counter = 0;
    let button3 = document.getElementById("button3");
    button3.addEventListener("click", addedButton3);

    function addedButton3() {
	button3.style.backgroundColor = "green";
	button3Counter++;
	itemCounter++;
	counter.innerHTML = itemCounter;
    }

    // remove button3 from cart
    let removeButton3 = document.getElementById("removeButton3");
    removeButton3.addEventListener("click", removesButton3);

    function removesButton3 () {
	itemCounter--;
	button3Counter--;
	
	if(button3Counter === 0) {
	    counter.innerHTML = itemCounter;
	}
	if(itemCounter == 0) {
	    counter.innerHTML = itemCounter;
	}
	counter.innerHTML = itemCounter;
    }
}

runImageSlider();
