const scoreList = document.getElementById('scores');

const disScores = (scores) => {
  scoreList.innerHTML = '';
  scores.forEach((score) => {
    const list = `<li class="list">${score.user}: ${score.score}</li>`;
    scoreList.insertAdjacentHTML('beforeend', list);
  });
};

const scoObj = {
  scores: [],
};

const add = (score) => {
  scoObj.scores.push(score);
};

export { add, disScores, scoObj };