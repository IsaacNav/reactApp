import { render, screen, fireEvent } from '@testing-library/react';
import SwitchTheme from './index';
import { ProviderTest } from '../../utils';

const Test = ({ onClick }) => {
  return (
    <ProviderTest>
      <SwitchTheme onClick={onClick} />
    </ProviderTest>
  );
};

describe('SwitchTheme', () => {
  test('SwitchTheme should be rendered', () => {
    const handleClick = jest.fn();
    const wrapper = render(<Test onClick={handleClick} />);
    expect(wrapper).toBeTruthy();
    const [element] = screen.getAllByRole('checkbox');
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
