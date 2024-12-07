import { renderHook } from '@testing-library/react';
import { usePageTitle } from '../usePageTitle';

describe('usePageTitle', () => {
  it('render the title given', () => {
    const testTitle = 'Test Title';

    renderHook(() => usePageTitle(testTitle));
    expect(document.title).toBe('Test Title');
  });
});
