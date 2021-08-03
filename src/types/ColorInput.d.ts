import React from 'react';

export interface CustomChangeEvent<T = Element> extends React.ChangeEvent<T> {
  ground: 'fg' | 'bg';
}

export interface ColorInputProps {
  valueBG: string | undefined;
  valueFG: string | undefined;
  timeFormat: string | undefined;
  onChangeColor: (
    e: CustomChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onChangeFormat: (e: CustomChangeEvent<HTMLInputElement>) => void;
}
