const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


// Per ogni elemento dell'array icons assegno al colore la variabile che genera un colore random
icons.forEach((element) => {
	element.color = randomColor();
})

// Variabile che richiama il container all'interno el dom
const boxContainer = document.querySelector('.container');
drawElementDom(icons);

// Variabile che richiama il select nel dom
const selectCategory = document.getElementById('category');


// ------------
// EVENT FUNCTION
// ------------

selectCategory.addEventListener('change', 
	function () {
		const currentValue = this.value;
		boxContainer.innerHTML = '';
		
		if(currentValue !== 'all') {
			const filterIcons = icons.filter((element) => {
				return element.type === currentValue;
			})

			drawElementDom(filterIcons)

		} else {

			drawElementDom(icons)
		}
	}
)


// ------------
// FUNCTION
// ------------


// Funzione che appende ogni elemento all'interno dell'array indicato come argomento nella funzione
function drawElementDom (iconsArray) {

	// per ogni elemento all'interno dell'array appendo un template nel dom
	iconsArray.forEach((element) => {
		const {name, prefix, type, family, color} = element; //Destrutturazione dell'array
		// Template
		const iconsTemplate = `
		<div class="box" style="color: ${color}">
			<i class="${family} + ${prefix}${name}"></i>
			<div class="name">${name}</div>
		</div>`;
		// Appendo il template nel boxContainer
		boxContainer.innerHTML += iconsTemplate;
	})
}


// Funzione che genera un colore random
function randomColor () {
	// Colore che inizia con #
	let color = '#';
	// Tutti i possibili simboli utilizzabili
	const symbols = '0123456789ABCDEF';

	for(let i = 0; i < 6; i++) {
		const randomIndex = getRndInteger(0, symbols.length - 1);
		const randomSymbol = symbols[randomIndex];
		color += randomSymbol
	}

	return color;
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
  }