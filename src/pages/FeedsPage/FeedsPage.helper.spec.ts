import { sortByDate } from './FeedsPage.helper';

import type { DisplayableArticle } from './FeedsPage.types';

describe('sortByDate', () => {
  it('should sort articles in descending order by date', () => {
    const articles: DisplayableArticle[] = [
      { date: '2025-02-20T12:00:00Z', title: 'Article 1' },
      { date: '2025-02-21T15:00:00Z', title: 'Article 2' },
      { date: '2025-02-19T08:30:00Z', title: 'Article 3' },
    ] as DisplayableArticle[];

    const sortedArticles = sortByDate([...articles]);

    expect(sortedArticles[0].date).toBe('2025-02-21T15:00:00Z'); // Most recent first
    expect(sortedArticles[1].date).toBe('2025-02-20T12:00:00Z');
    expect(sortedArticles[2].date).toBe('2025-02-19T08:30:00Z'); // Oldest last
  });

  it('should return an empty array if input is empty', () => {
    expect(sortByDate([])).toEqual([]);
  });

  it('should not modify the original array', () => {
    const articles: DisplayableArticle[] = [
      { date: '2025-02-20T12:00:00Z', title: 'Article 1' },
      { date: '2025-02-21T15:00:00Z', title: 'Article 2' },
    ] as DisplayableArticle[];

    const originalArticles = [...articles];
    sortByDate(articles);

    expect(articles).toEqual(originalArticles);
  });

  it('should handle articles with the same date correctly', () => {
    const articles: DisplayableArticle[] = [
      { date: '2025-02-20T12:00:00Z', title: 'Article A' },
      { date: '2025-02-20T12:00:00Z', title: 'Article B' },
    ] as DisplayableArticle[];

    const sortedArticles = sortByDate([...articles]);

    expect(sortedArticles).toHaveLength(2);
    expect(new Set(sortedArticles)).toEqual(new Set(articles)); // Ensure no article is lost
  });
});
