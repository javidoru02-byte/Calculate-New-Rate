/**
 * Обчислює новий рейтинг переможця.
 * @param {number} winer - рейтинг переможця
 * @param {number} loser - рейтинг програвшого
 * @returns {number} - повертає оновлений рейтинг переможця
 */

function winnerRatinCount(winer, loser) {
  if (
    typeof winer !== "number" ||
    typeof loser !== "number" ||
    !isFinite(winer) ||
    !isFinite(loser) ||
    winer < 0 ||
    loser < 0
  ) {
    return -1;
  } else {
    if (winer >= loser && winer !== 0 && loser !== 0) {
      let ratingDifference = winer - loser;
      if (ratingDifference >= 0 && ratingDifference <= 2) {
        return winer + 2;
      } else if (ratingDifference > 2 && ratingDifference < 20) {
        return winer + 1;
      } else if (ratingDifference >= 20) {
        return winer;
      }
    } else if (winer <= loser && winer !== 0 && loser !== 0) {
      let rating = (loser - winer + 5) / 3;
      return rating + winer;
    } else if (winer === 0) {
      return loser;
    } else {
      return winer;
    }
  }
}

const WINERRATING = 4;
const LOSERRATING = 15;
let newRating = winnerRatinCount(WINERRATING, LOSERRATING).toFixed(1);

switch (winnerRatinCount(WINERRATING, LOSERRATING)) {
  case -1:
    console.log("Введено не коректні данні");
    break;
  default:
    console.log(`Оновлений рейтинг переможця: ${newRating}`);
}
