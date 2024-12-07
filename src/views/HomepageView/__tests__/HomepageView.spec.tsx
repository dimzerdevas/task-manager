import { render, screen } from '@testing-library/react';
import { Providers } from '../../../test-helpers/Providers';
import { HomepageView } from '../HomepageView';

describe('Homepage', () => {
  it('renders with welcome message', () => {
    render(
      <Providers>
        <HomepageView />
      </Providers>,
    );

    const welcomeMessage = screen.getByRole('heading', {
      name: /welcome to the task manager app!/i,
    });

    expect(welcomeMessage).toBeInTheDocument();
  });
});
