import { renderHook, act } from '@testing-library/react-hooks';
import useTheme from '../useTheme';
import { ProviderTest } from '../../utils';

const Test = ({ children }) => {
  return <ProviderTest>{children}</ProviderTest>;
};

describe('useTheme', () => {
  test('useTheme should be return expected values', () => {
    const { result } = renderHook(() => useTheme(), { wrapper: Test });
    const initialState = { ...result.current };
    const { setTheme } = initialState;

    expect(typeof initialState.setTheme).toBe('function');
    expect(initialState.currentTheme).toBeTruthy();
    expect(initialState.currentTheme.backgroundColor).toBe('#ffffff');
    expect(initialState.whiteTheme).toBeTruthy();
    expect(initialState.blackTheme).toBeTruthy();

    act(() => {
      setTheme(initialState.blackTheme);
    });

    const updatedState = { ...result.current };

    expect(updatedState.currentTheme).toBeTruthy();
    expect(updatedState.currentTheme.backgroundColor).toBe('#212121');
  });
});
