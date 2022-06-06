import React, { useState } from 'react';
import Questions from './quiz.json'
// import './Assessments.css';

export default function App() {
	

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='bodyAssess'>
			<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {Questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{Questions.length}
						</div>
						<div className='question-text'>{Questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{Questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='buttonAssess' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
			</div>
		</div>
	);
}
