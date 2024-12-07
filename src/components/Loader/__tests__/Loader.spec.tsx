import { render, screen } from '@testing-library/react';
import { Loader } from '../Loader';

describe('Loader', () => {
  it('renders Loader', () => {
    render(<Loader />);

    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
  });
});
