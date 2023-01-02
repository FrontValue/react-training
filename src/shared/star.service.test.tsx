import { createStars } from './star.service';

describe('StarService', () => {
  it('should create a perfect rating ', () => {
    expect(createStars(5)).toEqual([1, 1, 1, 1, 1]);
  });

  it('should create a bad rating ', () => {
    expect(createStars(1)).toEqual([1, 0, 0, 0, 0]);
  });

  it('should create a rounded down rating ', () => {
    expect(createStars(3.24)).toEqual([1, 1, 1, 0, 0]);
  });
  it('should create a rounded up to half rating ', () => {
    expect(createStars(3.25)).toEqual([1, 1, 1, 0.5, 0]);
  });

  it('should create a rounded down to half rating ', () => {
    expect(createStars(3.74)).toEqual([1, 1, 1, 0.5, 0]);
  });

  it('should create a rounded up rating ', () => {
    expect(createStars(3.75)).toEqual([1, 1, 1, 1, 0]);
  });
});
