export type Star = 0 | 0.5 | 1;

const EMPTY_STAR: Star = 0;
const HALF_STAR: Star = 0.5;
const FULL_STAR: Star = 1;

const AMOUNT_OF_STARS = 5;

export const createStars = (rating: number): Star[] => {
  const stars: Star[] = [];
  for (let star = 1; star <= AMOUNT_OF_STARS; star++) {
    stars.push(createStar(rating, star));
  }
  return stars;
};

const createStar = (rating: number, star: number): Star => {
  if (star <= rating) {
    return FULL_STAR;
  }
  // Half star check
  if (star - rating < 1) {
    const decimal = rating % 1;
    return decimal >= 0.75 ? FULL_STAR : decimal >= 0.25 ? HALF_STAR : EMPTY_STAR;
  }
  return EMPTY_STAR;
};
