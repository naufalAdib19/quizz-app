//algoritma fisher-yates
function arrayShuffler(correct_answer, incorrect_answer){
    const correctAnswer = correct_answer || '';
    const incorrectAnswer = incorrect_answer || [];
    const answers = [correctAnswer, ...incorrectAnswer];

    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
}

export default arrayShuffler;