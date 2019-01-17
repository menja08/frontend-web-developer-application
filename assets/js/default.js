

function runImageSlider() {

    // get image slider
    let itemContainer = document.getElementById("itemContainer");
    var sliderLength = itemContainer.children.length;
    let itemContainerChildren = itemContainer.children;
	// for mobile
    let screenSize = window.outerWidth;
	if (screenSize < 401) {
		for(let i=0; i < sliderLength; i++) {
			 itemContainerChildren[i].style.display = "none";
			 itemContainerChildren[0].style.display = "flex";
		}

		// first image shown on loading
		var currentImage = 0;

		// the click function
		function leftArrowClicked() {
			let leftArrow = document.getElementById("leftArrow");
			leftArrow.addEventListener("click", function() {
				//first image
				if(currentImage <= sliderLength) {
				    let prev = currentImage - 1;
				    currentImage--;
				    if(prev < 0) {
				        prev = sliderLength - 1;
				        currentImage = sliderLength - 1;
                    }
					itemContainerChildren[prev].style.display = "flex";

					// loop over the rest of elements and hide them
					for(let i=0; i < sliderLength; i++) {
						if(i !== prev) {
							itemContainerChildren[i].style.display = "none";
						}
					}
				}

			});

		}

		leftArrowClicked();

		//rightArrow
		function rightArrowClicked() {
			let rightArrow = document.getElementById("rightArrow");

			rightArrow.addEventListener("click", function() {

				//first image
				if(currentImage <= sliderLength) {
					let next = currentImage + 1;
					currentImage++;
					if(next === sliderLength) {
						next = 0;
						currentImage = 0;
					}
					itemContainerChildren[next].style.display = "flex";

					// loop over elements and hide them
					for(let i=0; i < sliderLength; i++) {
						if(i !== next) {
							itemContainerChildren[i].style.display = "none";
						}
					}
				}

			});
		}
		rightArrowClicked();
	} // end of screenSize if statement

    // select the counter
    counter = document.getElementById("counter");
    var itemCounter = 0;

    // all three items
	/*var allItems = {};*/

	// the total
	let total = document.getElementById("total");

	var totalPrice = 0;
	/*var totalHTC = 0;
	var totalHuawei = 0;
	var totalSamsung = 0;*/

	// cartValues
	let cartValues = document.getElementById("cartValues");
	let htc = document.getElementById("htc");
	let huawei = document.getElementById("huawei");
	let samsung = document.getElementById("samsung");

    // add button1 to cart
	var buttonItem1 = {value: 0};
    var button1Counter = 0;
    let button1 = document.getElementById("button1");
    button1.addEventListener("click", addedButton1);

	function addedButton1() {
		// button1.style.backgroundColor = "green";
		button1Counter++;
		// add value of button1Counter to buttonItem1
		buttonItem1.value = button1Counter;
		itemCounter++;
		// allItems[buttonItem1] = buttonItem1.value;
		counter.innerHTML = itemCounter;
		htc.innerHTML = buttonItem1.value;
		// totalHTC = allItems[buttonItem1] * 2500;

	}

    // remove button1 from cart
    let removeButton1 = document.getElementById("removeButton1");
    removeButton1.addEventListener("click", removesButton1);

	function removesButton1 () {
        if(button1Counter > 0){
            itemCounter--;
            button1Counter--;
        }
        if(itemCounter < 0) {
            itemCounter = 0;
        }
        if(button1Counter < 0) {
            button1Counter = 0;
        }
        buttonItem1.value = button1Counter;
        htc.innerHTML = buttonItem1.value;
        // allItems[buttonItem1] = buttonItem1.value;
        counter.innerHTML = itemCounter;
	}

	// item2
	// add button2 to cart
	var buttonItem2 = {value: 0};
	var button2Counter = 0;
	let button2 = document.getElementById("button2");
	button2.addEventListener("click", addedButton2);

	function addedButton2() {
		// button2.style.backgroundColor = "green";
		button2Counter++;
		itemCounter++;
		buttonItem2.value = button2Counter;
		counter.innerHTML = itemCounter;
		huawei.innerHTML = buttonItem2.value;
		// allItems[buttonItem2] = buttonItem2.value;
		// totalHuawei = allItems[buttonItem2] * 3500;
	}

	// remove button2 from cart
	let removeButton2 = document.getElementById("removeButton2");
	removeButton2.addEventListener("click", removesButton2);

	function removesButton2 () {
		if(button2Counter > 0){
            itemCounter--;
            button2Counter--;
        }

        if(itemCounter < 0) {
            itemCounter = 0;
        }
        if(button2Counter < 0) {
            button2Counter = 0;
        }
		counter.innerHTML = itemCounter;
		buttonItem2.value = button2Counter;
		huawei.innerHTML = buttonItem2.value;
		// allItems[buttonItem2] = buttonItem2.value;
	}


	// item3
	// add button3 to cart
	var buttonItem3 = {value: 0};
	var button3Counter = 0;
	let button3 = document.getElementById("button3");
	button3.addEventListener("click", addedButton3);

	function addedButton3() {
		button3Counter++;
		itemCounter++;
		buttonItem3.value = button3Counter;
		counter.innerHTML = itemCounter;
		samsung.innerHTML = buttonItem3.value;
		// allItems[buttonItem3] = buttonItem3.value;
		// totalSamsung = allItems[buttonItem3] * 4500;
	}

	// remove button3 from cart
	let removeButton3 = document.getElementById("removeButton3");
	removeButton3.addEventListener("click", removesButton3);

	function removesButton3 () {
        if(button3Counter > 0){
            itemCounter--;
            button3Counter--;
        }

        if(itemCounter < 0) {
            itemCounter = 0;
        }
        if(button3Counter < 0) {
            button3Counter = 0;
        }
		counter.innerHTML = itemCounter;
		buttonItem3.value = button3Counter;
		samsung.innerHTML = buttonItem3.value;
		// allItems[buttonItem3] = buttonItem3.value;
	}

	total.addEventListener("click", totalNumberOfItems);
	function totalNumberOfItems() {
		// let myArray = Object.keys(allItems);
		let numberOfButton1 = buttonItem1.value;
		let numberOfButton2 = buttonItem2.value;
		let numberOfButton3 = buttonItem3.value;
		let priceOfButton1 = numberOfButton1 * 2500;
		let priceOfButton2 = numberOfButton2 * 3500;
		let priceOfButton3 = numberOfButton3 * 4500;
		totalPrice = priceOfButton1 + priceOfButton2 + priceOfButton3;
		total.innerHTML = totalPrice;
	}


	// deleteAll
	let deleteAll = document.getElementById("deleteAll");
	deleteAll.addEventListener("click", deleteAllItems);

	function deleteAllItems() {
		itemCounter = 0;
		totalPrice = 0;
		button1Counter = 0;
		button2Counter = 0;
		button3Counter = 0;
		htc.innerHTML = button1Counter;
		huawei.innerHTML = button2Counter;
		samsung.innerHTML = button3Counter;
        total.innerHTML = totalPrice;
        counter.innerHTML = itemCounter;

	}

}

runImageSlider();
