import { render, screen } from '@testing-library/react';
import { PageTitleWrapper } from '../PageTitleWrapper';
import { expect, jest } from '@jest/globals';

jest.mock('../../hooks/usePageTitle.ts', () => ({
  usePageTitle: jest.fn(),
}));

describe('PageTitleWrapper', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render children with the correct props', () => {
    const route = { pageTitle: 'Test page' };

    render(
      <PageTitleWrapper title={route.pageTitle}>
        <div>Content</div>
      </PageTitleWrapper>,
    );

    // TODO: Fix TS error
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
