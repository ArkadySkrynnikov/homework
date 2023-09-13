export function getStarRating(averageRating) {
    const roundedRating = Math.round(averageRating);
    let starRating = '';
    for (let i = 0; i < 5; i++) {
      if (i < roundedRating) {
        starRating += '★';
      } else {
        starRating += '☆';
      }
    }
    
    return starRating;
}