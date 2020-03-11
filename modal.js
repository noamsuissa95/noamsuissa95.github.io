
function closeModal() {
	// Allow the body to scroll again
	document.body.style.overflow = "scroll";

	// Remove the modal from the document
	const modalElement = document.getElementById("modal");
	modalElement.parentNode.removeChild(modalElement);
}

function createModal(src) {
	// Lock the body from scrolling
	document.body.style.overflow = "hidden";

	// Create the Modal element
	let modal = document.createElement("div");
	modal.onclick = closeModal;
	modal.id = "modal";

	// Create the iFrame element and pass the src
	let iFrame = document.createElement("iframe");
	iFrame.src = src;
	iFrame.className = "iframe";
	// iFrame.scrolling = "no";
	// iFrame.frameborder = "0";
	// iFrame.allowTransparency = "true";
	// iFrame.allowFullScreen = "true";

	// Append both elements
	document.body.appendChild(modal);
	modal.appendChild(iFrame);
}