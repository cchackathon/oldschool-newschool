window.onload = function() {
	Array.from(document.querySelectorAll('.question_answer'))
		 .forEach(function(question_answer) {
		 	question_answer.addEventListener('click', (function(event) {
		 		if (question_answer.classList.contains('expanded')) {
		 			question_answer.classList.remove('expanded');
		 			$(this).find('.answer').remove();
		 		} else {
		 			question_answer.classList.add('expanded');
		 		}
		 	}));
		 });
}