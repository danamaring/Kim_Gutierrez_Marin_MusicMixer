(() => {
  //sub
console.log('fired!');

  //CONSTANTS:

const cassettesPieces = document.querySelector(".draggableIcons"),
		dropZone = document.querySelector(".musicMixer");
		
	

let draggablePieces = cassettesPieces.querySelectorAll("img");

draggablePieces.forEach(piece => {
	piece.addEventListener("dragstart", function(e) {
		console.log('draggin...');

			e.dataTransfer.setData("text/plain", this.id);
		});
	});
// HASTA AQUÍ TODO IBA BIEN...

dropZone.forEach(zone => {
	//allow user to drag over an element
	zone.addEventListener("dragover", function(e) {
		e.preventDefault();
		console.log("dragged sumpin over me");
});

zone.addEventListener("drop", function(e) {
	e.preventDefault();
	console.log("you dropped sumpin on me");

	let draggedElement = e.dataTransfer.getData("text/plain");
	console.log('you dragged: ', draggedElement);

	//add the image to the drop zone
	e.target.appendChild(document.querySelector(`#${draggedElement}`));
	});

})();
