
$(document).ready(function(){
	$('.scrollspy').scrollSpy();
});

var lines = "";

function start () {
	
	getCSV();
}

async function getCSV() {

  let obj;
  const res = await fetch('index.csv')
  obj = await res.text();

	lines = obj.split('\n');

	csvloaded();
	randomizeNames();
}

function randomizeNames () {
	let elems = document.getElementsByClassName('name');
	console.log(elems);
	for (let i = 0; i < elems.length; i++) {
		elems[i].innerText = names[Math.floor(Math.random()*names.length)];
	}
}

function csvloaded () {
	

	let titles = document.getElementsByClassName('title');
	let subtitles = document.getElementsByClassName('subtitle');
	let authors = document.getElementsByClassName('author');
	let programmes = document.getElementsByClassName('programme');
	let dates = document.getElementsByClassName('date');
	let descs = document.getElementsByClassName('desc');
	let keywords = document.getElementsByClassName('keywords');
	let types = document.getElementsByClassName('type');
	let smallkeywords = document.getElementsByClassName('smallkeywords');

	let currentauthor = 'blank';
	let authorplss = document.getElementsByClassName('authorpls');

	let abstracts = document.getElementsByClassName('abstract');
	let desctotitles = document.getElementsByClassName('desctotitle');

	console.log(titles.length,subtitles.length,authors.length,programmes.length,dates.length,descs.length,keywords.length,types.length);

	for (let i = 0; i < titles.length; i++) {
		let line = randomline('');
		let title = line[2].split(':')
		let author = line[3].split('(');

		if(titles[i])
			titles[i].innerText = title[0];
		if(subtitles[i])
			subtitles[i].innerText = title[1];
		if(subtitles[i])
			subtitles[i].innerText = subtitles[i].innerText.replace('undefined','')
		if(authors[i])
			authors[i].innerText = author[0];
		if(programmes[i])
			programmes[i].innerText = author[1].replace(')','');
		if(dates[i])
			dates[i].innerText = line[5];
		if(descs[i])
			descs[i].innerHTML = line[6].substring(0,400);
		if(keywords[i])
			keywords[i].innerHTML = ('<a href="Keyword.html"><div class="chip">'+line[7].replaceAll('; ','</div></a><a href="Keyword.html"><div class="chip">')+'</div></a>').replace('<div class="chip"></div>','');
		if(types[i])
			types[i].innerText = line[9].replace('bachelor','Bachelor').replace('master','Master');
		if(smallkeywords[i])
			smallkeywords[i].innerHTML = ('<a href="Keyword.html"><div class="smallchip">'+line[7].replaceAll('; ','</div></a><a href="Keyword.html"><div class="smallchip">')+'</div></a>').replace('<div class="smallchip"></div>','');

		if(abstracts[i])
			abstracts[i].innerHTML = line[6];
		if(desctotitles[i])
			desctotitles[i].setAttribute('title',line[6].replace('<br/>','\n'));

		if(currentauthor == 'blank')
			currentauthor = author[0].split(', ')[1]+' '+author[0].split(', ')[0];
	}

	for (let i = 0; i < authorplss.length; i++) {
		const element = authorplss[i];
		element.innerText = currentauthor;
	}

}

function putline(div, query) {

	console.log('doin it');

	let titles = div.getElementsByClassName('title');
	let subtitles = div.getElementsByClassName('subtitle');
	let authors = div.getElementsByClassName('author');
	let programmes = div.getElementsByClassName('programme');
	let dates = div.getElementsByClassName('date');
	let descs = div.getElementsByClassName('desc');
	let keywords = div.getElementsByClassName('keywords');
	let types = div.getElementsByClassName('type');
	let smallkeywords = div.getElementsByClassName('smallkeywords');

	let currentauthor = 'blank';
	let authorplss = div.getElementsByClassName('authorpls');

	let abstracts = div.getElementsByClassName('abstract');
	let desctotitles = div.getElementsByClassName('desctotitle');

	for (let i = 0; i < titles.length; i++) {
		let line = searchline(query, 0);
		let title = line[2].split(':')
		let author = line[3].split('(');

		if(titles[i])
			titles[i].innerText = title[0];
		if(subtitles[i])
			subtitles[i].innerText = title[1];
		if(subtitles[i])
			subtitles[i].innerText = subtitles[i].innerText.replace('undefined','')
		if(authors[i])
			authors[i].innerText = author[0];
		if(programmes[i])
			programmes[i].innerText = author[1].replace(')','');
		if(dates[i])
			dates[i].innerText = line[5];
		if(descs[i])
			descs[i].innerHTML = line[6].substring(0,400);
		if(keywords[i])
			keywords[i].innerHTML = ('<a href="Keyword.html"><div class="chip">'+line[7].replaceAll('; ','</div></a><a href="Keyword.html"><div class="chip">')+'</div></a>').replace('<div class="chip"></div>','');
		if(types[i])
			types[i].innerText = line[9].replace('bachelor','Bachelor').replace('master','Master');
		if(smallkeywords[i])
			smallkeywords[i].innerHTML = ('<a href="Keyword.html"><div class="smallchip">'+line[7].replaceAll('; ','</div></a><a href="Keyword.html"><div class="smallchip">')+'</div></a>').replace('<div class="smallchip"></div>','');

		if(abstracts[i])
			abstracts[i].innerHTML = line[6];
		if(desctotitles[i])
			desctotitles[i].setAttribute('title',line[6].replace('<br/>','\n'));

		if(currentauthor == 'blank')
			currentauthor = author[0].split(', ')[1]+' '+author[0].split(', ')[0];
	}

	for (let i = 0; i < authorplss.length; i++) {
		const element = authorplss[i];
		element.innerText = currentauthor;
	}
}

function searchline(query, index = 0){

	console.log(lines);
	console.log(query);

	lines.forEach(line => {
		if(line.includes(query)) {
			console.log('FOUND IT');
			console.log(line);
			console.log(line.split('","'));
			return line.split('","');

			if(index == 0)
				return line.split('","');
			else
				index = index-1;
		}
	});

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		if(line.includes(query)) {

			if(index == 0)
				return line.split('","');
			else
				index = index-1;
		}
	}

	return ['aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaa (aaaa)','aaa, aaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa']
	
}

function randomline(programmeRequest){
	if(!programmeRequest)
		return lines[1+Math.floor(Math.random()*lines.length-1)].split('","');

	else{
		let curline = lines[1+Math.floor(Math.random()*lines.length-1)].split('","');
		while (!curline[3].includes(programmeRequest))
			curline = lines[1+Math.floor(Math.random()*lines.length-1)].split('","');
		return curline
	}
}

let names = ["Virginia Patterson","Cameron Hayes","Kenny Serrano","Angel Delacruz","Earl Weiss","Ashley Lopez","Keeley Hartley","Lucy Watts","Duncan Romero","Fatma Richmond","Evie Blackwell","Szymon Ponce","Niall Carver","Bonnie Horton","Kirsten Gordon","Cohen Rubio","Ann Berry","Christian Ho","Kaitlyn Barry","Stefan Bradford","Herbert Bates","Tobias Gibson","Amanda Miranda","Asma Green","Marwa Sherman","Kimberly Barker","Evangeline Terrell","Miah Buck","Elijah Mitchell","Isaiah Eaton","Gordon Rice","Chanelle Castillo","Pippa Fuller","Mahnoor Castaneda","Leanne Aguilar","Junaid Hewitt","Cole Bradshaw","Brooke Leonard","Daniyal Mora","Harvey Olsen","Mabel Crawford","Corey Beck","Minnie Sparks","Dean Gilbert","Christina Noble","Ellie-May Long","Aya Harrington","Owen Everett","Marc Miles","Mark Rodriguez","Erica Valdez","Marjorie York","Hiba Dickson","Donald Parks","Isobella Carney","Ilyas Mccall","Annie Villa","Xavier Norton","Yahya Fitzgerald","Julius Frank","Lacie Burgess","Elsie Frye","Ashleigh Ramsey","Lana Young","Gina Cabrera","Rex O'Reilly","Usman Riggs","Samantha Roth","Hari Rhodes","Kyan Rocha","Dylan Palmer","Keane Archer","Joshua Joseph","Rebekah Bean","Pauline Ellis","Wade Brandt","Aron Schaefer","Kayne Shepherd","Julia Ayers","Troy Gray","Tallulah Spence","Hana Graves","Asiya Lowery","Jonty Parsons","Elsa Nelson","Nicole Wang","Mia Perez","Molly Olson","Dillon Dale","Jean Arroyo","Yuvraj Heath","Roger Brock","Hayley Gallegos","Madeline Chambers","Livia Mckinney","Ethel Melton","Lila Randall","Allan Ferrell","Kabir Taylor","Flora Le"];