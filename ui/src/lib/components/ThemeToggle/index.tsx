import { Switch } from '@nextui-org/react';
import { FaMoon, FaSun } from 'react-icons/fa';

type ThemeToggleProps = {
  onClick: () => void;
  theme: string;
};

export function ThemeToggle({ theme, onClick }: ThemeToggleProps) {
  theme = theme ?? 'light';

  return (
    <Switch
      defaultSelected={theme === 'light'}
      size="lg"
      color="success"
      onChange={onClick}
      startContent={<FaSun />}
      endContent={<FaMoon />}
    ></Switch>
  );
}
