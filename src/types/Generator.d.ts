export interface GeneratorConfig {
  clock?: 'pride' | 'transparent';
  bgColor: string;
  fgColor: string;
  timeFormat: string;
}

export interface GeneratorState {
  config: GeneratorConfig;
}
