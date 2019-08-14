(() => {
  console.log('yadayada');

  //CONSTANTS
  const cassetteIcons = document.querySelector(".parent_container"),
        boomBox = document.querySelector(".boom_box"),
        dropZones = document.querySelectorAll(".drop-zone"),
        resetButton = document.querySelector(".fa-redo-alt");

  let draggableIcons = cassetteIcons.querySelectorAll("img"),
      audio11 = document.querySelector(".audio11"),
      greenLT = document.querySelector("#greenLT"),
      audio12 = document.querySelector(".audio12"),
      blueLT = document.querySelector("#blueLT"),
      skyLT = document.querySelector("#skyLT"),
      audio13 = document.querySelector(".audio13"),
      yellowLT = document.querySelector("#yellowLT"),
      audio14 = document.querySelector(".audio14"),

      greenLB = document.querySelector("#greenLB"),
      blueLB = document.querySelector("#blueLB"),
      skyLB = document.querySelector("#skyLB"),
      yellowLB = document.querySelector("#yellowLB"),
      audio21 = document.querySelector(".audio21"),
      audio22 = document.querySelector(".audio22"),
      audio23 = document.querySelector(".audio23"),
      audio24 = document.querySelector(".audio24"),

      greenRB = document.querySelector("#greenRB"),
      blueRB = document.querySelector("#blueRB"),
      skyRB = document.querySelector("#skyRB"),
      yellowRB = document.querySelector("#yellowRB"),
      audio31 = document.querySelector(".audio31"),
      audio32 = document.querySelector(".audio32"),
      audio33 = document.querySelector(".audio33"),
      audio34 = document.querySelector(".audio34"),

      greenRT = document.querySelector("#greenRT"),
      blueRT = document.querySelector("#blueRT"),
      skyRT = document.querySelector("#skyRT"),
      yellowRT = document.querySelector("#yellowRT"),
      audio41 = document.querySelector(".audio41"),
      audio42 = document.querySelector(".audio42"),
      audio43 = document.querySelector(".audio43"),
      audio44 = document.querySelector(".audio44");

//FUNCTIONS
  draggableIcons.forEach(piece => {
    piece.addEventListener("dragstart", function(e) {
		    console.log('draggin...');


          e.dataTransfer.setData("text/plain", this.id);
		});
	});

  dropZones.forEach(zone => {
	zone.addEventListener("dragover", function(e) {
		console.log('dragged sumpin over me');
      e.preventDefault();

});

  zone.addEventListener("drop", function(e) {
  	e.preventDefault();
  	console.log("you dropped sumpin on me");

    if (this.childElementCount == 1) {
      console.log('sorry, already taken!!');
      return; }

  	let draggedElement = e.dataTransfer.getData("text/plain");


  	console.log('you dragged: ', draggedElement);

  	//add the image to the drop zone
  	e.target.appendChild(document.querySelector(`#${draggedElement}`));

    // find the element in the DOM and get the data-audio reference
    let targetAudio = document.querySelector(`#${draggedElement}`).dataset.key;

    let currentAudio = document.querySelector(`audio[data-key=targetAudio]`);
    currentAudio.play();

	});
})


//reset button
  function resetCassettes() {
    if (dropZones.forEach.childElementCount > 0) {
      console.log('bye everyone');
      reset; }
  }

//AUDIO FUNCTIONS

  function playAudio11() {
    audio11.currentTime = 0;
    audio11.play();
  }

  function stopAudio11() {
    audio11.pause();
  }

  function playAudio12() {
    audio12.currentTime = 0;
    audio12.play();
  }

  function stopAudio12() {
    audio12.pause();
  }

  function playAudio13() {
    audio13.currentTime = 0;
    audio13.play();
  }

  function stopAudio13() {
    audio13.pause();
  }

  function playAudio14() {
    audio14.currentTime = 0;
    audio14.play();
  }

  function stopAudio14() {
    audio14.pause();
  }



  function playAudio21() {
    audio21.currentTime = 0;
    audio21.play();
  }

  function stopAudio21() {
    audio21.pause();
  }


  function playAudio22() {
    audio22.currentTime = 0;
    audio22.play();
  }

  function stopAudio22() {
    audio22.pause();
  }

  function playAudio23() {
    audio23.currentTime = 0;
    audio23.play();
  }

  function stopAudio23() {
    audio23.pause();
  }

  function playAudio24() {
    audio24.currentTime = 0;
    audio24.play();
  }

  function stopAudio24() {
    audio24.pause();
  }


  function playAudio31() {
    audio31.currentTime = 0;
    audio31.play();
  }

  function stopAudio31() {
    audio31.pause();
  }

  function playAudio32() {
    audio32.currentTime = 0;
    audio32.play();
  }

  function stopAudio32() {
    audio32.pause();
  }

  function playAudio33() {
    audio33.currentTime = 0;
    audio33.play();
  }

  function stopAudio33() {
    audio33.pause();
  }

  function playAudio34() {
    audio34.currentTime = 0;
    audio34.play();
  }

  function stopAudio34() {
    audio34.pause();
  }


  function playAudio41() {
    audio41.currentTime = 0;
    audio41.play();
  }

  function stopAudio41() {
    audio41.pause();
  }

  function playAudio42() {
    audio42.currentTime = 0;
    audio42.play();
  }

  function stopAudio42() {
    audio42.pause();
  }

  function playAudio43() {
    audio43.currentTime = 0;
    audio43.play();
  }

  function stopAudio43() {
    audio43.pause();
  }

  function playAudio44() {
    audio44.currentTime = 0;
    audio44.play();
  }

  function stopAudio44() {
    audio44.pause();
  }

//AUDIO EVENTS
  greenLT.addEventListener("mouseover", playAudio11);
  greenLT.addEventListener("mouseout", stopAudio11);

  blueLT.addEventListener("mouseover", playAudio12);
  blueLT.addEventListener("mouseout", stopAudio12);

  skyLT.addEventListener("mouseover", playAudio13);
  skyLT.addEventListener("mouseout", stopAudio13);

  yellowLT.addEventListener("mouseover", playAudio14);
  yellowLT.addEventListener("mouseout", stopAudio14);


  greenLB.addEventListener("mouseover", playAudio21);
  greenLB.addEventListener("mouseout", stopAudio21);

  blueLB.addEventListener("mouseover", playAudio22);
  blueLB.addEventListener("mouseout", stopAudio22);

  skyLB.addEventListener("mouseover", playAudio23);
  skyLB.addEventListener("mouseout", stopAudio23);

  yellowLB.addEventListener("mouseover", playAudio24);
  yellowLB.addEventListener("mouseout", stopAudio24);


  greenRB.addEventListener("mouseover", playAudio31);
  greenRB.addEventListener("mouseout", stopAudio31);

  blueRB.addEventListener("mouseover", playAudio32);
  blueRB.addEventListener("mouseout", stopAudio32);

  skyRB.addEventListener("mouseover", playAudio33);
  skyRB.addEventListener("mouseout", stopAudio33);

  yellowRB.addEventListener("mouseover", playAudio34);
  yellowRB.addEventListener("mouseout", stopAudio34);


  greenRT.addEventListener("mouseover", playAudio41);
  greenRT.addEventListener("mouseout", stopAudio41);

  blueRT.addEventListener("mouseover", playAudio42);
  blueRT.addEventListener("mouseout", stopAudio42);

  skyRT.addEventListener("mouseover", playAudio43);
  skyRT.addEventListener("mouseout", stopAudio43);

  yellowRT.addEventListener("mouseover", playAudio44);
  yellowRT.addEventListener("mouseout", stopAudio44);


  //reset button
  resetButton.addEventListener("click", resetCassettes);


})();
