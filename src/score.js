const scoreList = document.getElementById('scores');

const add = async (score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/L5KWB7dBUtngsInWODu0/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};

const disScores = (scores) => {
    scoreList.innerHTML = '';
    scores.forEach((score) => {
      const list = `<li class="list">${score.user}: ${score.score}</li>`;
      scoreList.insertAdjacentHTML('beforeend', list);
    });
  };
  
  export { add, disScores };