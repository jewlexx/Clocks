export interface GeneratorConfig {
  clock: string;
  bgColor: string;
  fgColor: string;
  timeFormat: string;
}

export interface GeneratorState {
  config: GeneratorConfig;
}

export interface ClockConfig {
  name: string;
  config: GeneratorConfig;
}
