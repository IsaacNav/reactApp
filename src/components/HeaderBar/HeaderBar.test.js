import { render, screen } from '@testing-library/react';
import HeaderBar from './index';
import { ProviderTest } from '../../utils';

const Test = () => {
  return (
    <ProviderTest>
      <HeaderBar />
    </ProviderTest>
  );
};

describe('HeaderBar', () => {
  test('HeaderBar should be rendered', () => {
    const wrapper = render(<Test />);
    expect(wrapper).toBeTruthy();
  });

  test('HeaderBar should have a Switch component', () => {
    render(<Test />);
    const element = screen.getByTestId('themeSwitch');
    expect(element).toBeTruthy();
    const switchComponent = element.querySelector('.MuiSwitch-root');
    expect(switchComponent).toBeTruthy();
  });
});
