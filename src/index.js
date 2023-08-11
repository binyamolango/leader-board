import './style.css';
import { disScores, add, scoObj } from './score.js';

const form1 = document.getElementById('form');
const name1 = document.getElementById('user');
const scoreId1 = document.getElementById('score');

const addValue = (e) => {
  e.preventDefault();
  if (!name1.value || !scoreId1.value) return;
  add({ user: name1.value, score: scoreId1.value });
  name1.value = '';
  scoreId1.value = '';
  disScores(scoObj.scores);
};

form1.addEventListener('submit', addValue);