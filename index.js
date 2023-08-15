let homeScore=0;
let guestScore=0;

const homeScoreEl = document.getElementById('basketball-counter__number__home')//.textContent = guestScore;
const guestScoreEl = document.getElementById('basketball-counter__number__guest')//.textContent = homeScore;

const homeTeamEl = document.getElementById('basketball-counter__home__team')//.textContent = guestScore;
const guestTeamEl = document.getElementById('basketball-counter__guest__team')//.textContent = homeScore;
console.log(guestTeamEl);


//Punkte für das Home Team hinzufügen
function addHomePoints(points){
  homeScore+=points;
  homeScoreEl.textContent = homeScore;

  if(homeScore > guestScore){
    guestTeamEl.classList.remove('score-highlighted')
    homeTeamEl.classList.add('score-highlighted')
  } else if (homeScore === guestScore) {
    guestTeamEl.classList.remove('score-highlighted')
    homeTeamEl.classList.remove('score-highlighted')
  }

  console.log('Home');
}


//Punkte für das Gästeteam hinzufügen
function addGuestPoints(points){
  guestScore+=points;
  guestScoreEl.textContent = guestScore;

  if(guestScore > homeScore){
    guestTeamEl.classList.add('score-highlighted')
    homeTeamEl.classList.remove('score-highlighted')
  } else if (guestScore === homeScore) {
    guestTeamEl.classList.remove('score-highlighted')
    homeTeamEl.classList.remove('score-highlighted')
  }

  console.log('Guests');
}


function newGame(){
  console.log('reset score');

  guestScore = 0;
  homeScore = 0;

  guestScoreEl.textContent = 0;
  homeScoreEl.textContent = 0;
  
  guestTeamEl.classList.remove('score-highlighted')
  homeTeamEl.classList.remove('score-highlighted')

}