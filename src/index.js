import './style.css';
import { disScores, add } from './score.js';

const form1 = document.getElementById('form');
const name1 = document.getElementById('user');
const scoreId1 = document.getElementById('score');
const refBtn = document.getElementById('refresh');

const addValue = async (e) => {
  e.preventDefault();
  if (!name1.value || !scoreId1.value) return;
  await add({ user: name1.value, score: scoreId1.value });
  name1.value = '';
  scoreId1.value = '';
};

const disAPI = async () => {
  const fetchAPI = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/L5KWB7dBUtngsInWODu0/scores/');
  const data = await fetchAPI.json();
  disScores(data.result);
};

form1.addEventListener('submit', addValue);
refBtn.addEventListener('click', disAPI);