export type ClockType = 'pride' | 'transparent' | 'custom';

export interface GeneratorConfig {
  clock: ClockType;
  bgColor: string;
  fgColor: string;
  timeFormat: string;
}

export interface GeneratorState {
  config: GeneratorConfig;
}
