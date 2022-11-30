const form = document.querySelector('.quiz-form');
const correctAnswers = ['A', 'A', 'C', 'A', 'C', 'B', 'B', 'B', 'A', 'C'];
const showResult = document.querySelector('.result'); 


/* Pegando respostas e colocando as que o usuário marcou em um array */
let score = 0;

const getUserAnswers = () => {
	const userAnswers = correctAnswers.map((_, index) => {
		 return form[`inputQuestion${index + 1}`].value;
	});
	return userAnswers;
}

/* Calculando score */
const calculateScore = userAnswers => {
	userAnswers.forEach((userAnswer, index) => {
		if(userAnswer === correctAnswers[index]){
			score += 10;
		}
	});
}

/* Pegar o counter e comparar ao score. Atribuir o textContent do span o valor do counter */
const animateFinalScore = () => {
	let counter = 0;

	const timer = setInterval(() => {
		if(counter === score){
			clearInterval(timer);
		}

		showResult.querySelector('span').textContent = `${counter}%`;
		counter++;
	}, 40);
}

/* Exibir score final para o usuário */
const showFinalScore = () => {
	scrollTo({
		top: 0, 
		left: 0,
		behavior: 'smooth'
	});
	showResult.classList.remove('d-none');
}



form.addEventListener('submit', event => {
	event.preventDefault(); 
	const userAnswers = getUserAnswers();
	calculateScore(userAnswers);
	animateFinalScore();
	showFinalScore();
})



