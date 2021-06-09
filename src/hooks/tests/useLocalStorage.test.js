import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from '../useLocalStorage';

describe('useLocalStorage', () => {
  test('useLocalStorage should be return expected values', () => {
    const text = 'Texto que se guarda en la sesión';
    const updatedText = 'Nuevo texto';

    const { result } = renderHook(() => useLocalStorage('text', text));
    const [currentState, setState] = result.current;
    expect(currentState).toBe(text);
    expect(setState).toBeTruthy();

    act(() => {
      setState(updatedText);
    });

    expect(result.current[0]).toBe(updatedText);
  });
});
