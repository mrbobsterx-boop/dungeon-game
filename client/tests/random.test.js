// Пример юнит-теста: детерминизм seeded RNG.
import { describe, it, expect } from 'vitest';
import { createSeededRandom } from '../src/utils/Random.js';

describe('createSeededRandom', () => {
  it('даёт одинаковую последовательность для одного seed', () => {
    const rngA = createSeededRandom(42);
    const rngB = createSeededRandom(42);
    expect(rngA()).toBe(rngB());
  });
});
