import { ClockType } from './Generator';

export interface ClockSelectProps {
  clocks: string[];
  value: ClockType;
  onChange: (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
}
export interface ClockSelectState {
  clock: string;
}
