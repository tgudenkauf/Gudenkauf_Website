function clicked(pic,name,noMembers) {
	document.getElementById("pic").src = pic;
	for (var i=0;i<7;i++) {
		document.getElementsByClassName('row')[i].style.display = "";}
	switch(name){
		case 'Karla':
			document.getElementById("frName").innerText = "Karla Gudenkauf";
			document.getElementById("frAge").innerText = "48";
			document.getElementById("frRel").innerText = "Aunt";
			break;
		case 'Ann':
			document.getElementById("frName").innerText = "Ann Gudenkauf";
			document.getElementById("frAge").innerText = "50";
			document.getElementById("frRel").innerText = "Aunt";
			break;
		case 'Dave':
			document.getElementById("frName").innerText = "Mireille Gudenkauf";
			document.getElementById("frAge").innerText = "51";
			document.getElementById("frRel").innerText = "Aunt";
			document.getElementById("srName").innerText = "Dave Gudenkauf";
			document.getElementById("srAge").innerText = "58";
			document.getElementById("srRel").innerText = "Uncle"
			break;
		case 'Kevin':
			document.getElementById("frName").innerText = "Kayla Gudenkauf";
			document.getElementById("frAge").innerText = "19";
			document.getElementById("frRel").innerText = "Sister";
			document.getElementById("srName").innerText = "Travis Gudenkauf";
			document.getElementById("srAge").innerText = "22";
			document.getElementById("srRel").innerText = "Myself"
			document.getElementById("trName").innerText = "Wesley Gudenkauf";
			document.getElementById("trAge").innerText = "24";
			document.getElementById("trRel").innerText = "Brother";
			document.getElementById("forName").innerText = "Alex Gudenkauf";
			document.getElementById("forAge").innerText = "25";
			document.getElementById("forRel").innerText = "Brother";
			document.getElementById("firName").innerText = "Kathleen Gudenkauf";
			document.getElementById("firAge").innerText = "52";
			document.getElementById("firRel").innerText = "Mother";
			document.getElementById("sirName").innerText = "Kevin Gudenkauf";
			document.getElementById("sirAge").innerText = "52";
			document.getElementById("sirRel").innerText = "Father";
			break;
		case 'Doug':
			document.getElementById("frName").innerText = "Kurt Gudenkauf";
			document.getElementById("frAge").innerText = "29";
			document.getElementById("frRel").innerText = "Cousin";
			document.getElementById("srName").innerText = "Carmen Fagan";
			document.getElementById("srAge").innerText = "32";
			document.getElementById("srRel").innerText = "Cousin";
			document.getElementById("trName").innerText = "Deb Gudenkauf";
			document.getElementById("trAge").innerText = "52";
			document.getElementById("trRel").innerText = "Aunt";
			document.getElementById("forName").innerText = "Doug Gudenkauf";
			document.getElementById("forAge").innerText = "57";
			document.getElementById("forRel").innerText = "Uncle";
			break;
		case 'Keith':
			document.getElementById("frName").innerText = "Julie Gudenkauf";
			document.getElementById("frAge").innerText = "29";
			document.getElementById("frRel").innerText = "Cousin";
			document.getElementById("srName").innerText = "Lisa Gudenkauf";
			document.getElementById("srAge").innerText = "30";
			document.getElementById("srRel").innerText = "Cousin"
			document.getElementById("trName").innerText = "Bob Gudenkauf";
			document.getElementById("trAge").innerText = "33";
			document.getElementById("trRel").innerText = "Cousin";
			document.getElementById("forName").innerText = "Jeff Gudenkauf";
			document.getElementById("forAge").innerText = "35";
			document.getElementById("forRel").innerText = "Cousin";
			document.getElementById("firName").innerText = "Bob Gudenkauf";
			document.getElementById("firAge").innerText = "37";
			document.getElementById("firRel").innerText = "Cousin";
			document.getElementById("sirName").innerText = "Cathy Gudenkauf";
			document.getElementById("sirAge").innerText = "52";
			document.getElementById("sirRel").innerText = "Aunt";
			document.getElementById("serName").innerText = "Keith Gudenkauf";
			document.getElementById("serAge").innerText = "55";
			document.getElementById("serRel").innerText = "Uncle";
			break;
	}
	for (var i=noMembers;i<7;i++) {
		document.getElementsByClassName('row')[i].style.display = "none";
}
}
