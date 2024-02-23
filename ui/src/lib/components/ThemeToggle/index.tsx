import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      }}
      isIconOnly
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </Button>
  );
}
