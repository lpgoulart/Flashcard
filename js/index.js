var count = 1;
var editing = "";
var title = "";
var content = "";

function newFlashCard() {
	const title = $("#cardTitle").val();
	const content = $("#cardText").val();

	var flashcard = document.createElement("div");
	flashcard.id = "cardId"+count;
	flashcard.classList.add("col-sm", "flashcard");
	flashcard.innerHTML = `<div class="card" style="width: 20rem;">
						  		<div class="card-block">
						    		<h4 class="card-title">
						    			<span id="cardTitle${+count}">${title}</span>
						    			<button type="button" class="close" aria-label="Close" onclick="removeCard(this)">
						    				<span aria-hidden="true">&times;</span>
						    			</button>
						    			<button type="button" class="close" data-toggle="modal" data-target="#editCard" onclick="edit(this)" style="float:left!important">
						    				<span aria-hidden="true">
						    					<i class="fa fa-pencil"></i>
						    				</span>
						    			</button>
						    		</h4> 
						    		<hr>
						    		<p class="card-text" id="cardContent${+count}">${content}</p> 
							  </div>
							</div>`     
	$("#board").append(flashcard);   
	count = count + 1;
}

function cleanModal() {
	$("#cardTitle").val("");
	$("#cardText").val("");	
	$("#cardTitleEdt").val("");
	$("#cardTextEdt").val("");		
}

function removeCard(remove) {
	const card = remove.parentElement.parentElement.parentElement.parentElement.id;
	var child = board.children;
	
	for (var i = 0; i < board.childElementCount; i++) {
		if ( card === child[i].id ) {
			board.removeChild(board.childNodes[i]);
		}
	}
}

function edit(edit) {
	cleanModal();
	edt(edit); 
}

function edt(edit) {
	const card = edit.parentElement.parentElement.parentElement.parentElement.id;
	editing = edit.parentElement.children;
	
	title = editing[0].id;

	editing = edit.parentElement.parentElement.children;

	content = editing[2].id;

	var oldTitle = document.getElementById(title).textContent;
	document.getElementById("cardTitleEdt").value = oldTitle;

	var oldContent = document.getElementById(content).textContent;
	document.getElementById("cardTextEdt").value = oldContent;
}

function save(edit) {
	
	// window.alert(content);
	var oldTitle = document.getElementById(title);
	var newTitle = document.getElementById("cardTitleEdt").value;

	var oldContent = document.getElementById(content);
	var newContent = document.getElementById("cardTextEdt").value;

	oldTitle.textContent = newTitle;
	oldContent.textContent = newContent;
}


