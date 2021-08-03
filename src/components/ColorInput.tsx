import React from 'react';
import styles from '@styles/modules/generator.module.scss';
import { InputLabel, Input } from '@material-ui/core';
import type { ColorInputProps, CustomChangeEvent } from '@typings/ColorInput';

export default function ColorInput({
  valueBG,
  valueFG,
  timeFormat,
  onChangeColor,
  onChangeFormat,
}: ColorInputProps): JSX.Element {
  const handleChangeEvent = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    g: 'fg' | 'bg'
  ) => {
    const event: CustomChangeEvent<HTMLTextAreaElement | HTMLInputElement> = {
      ground: g,
      ...e,
    };
    onChangeColor(event);
  };

  return (
    <>
      <InputLabel>
        Time Color: #
        <Input
          type='text'
          value={valueFG}
          onChange={e => handleChangeEvent(e, 'fg')}
        />
      </InputLabel>
      <InputLabel id='background-color-picker'>
        Background Color: #
        <Input
          type='text'
          value={valueBG}
          onChange={e => handleChangeEvent(e, 'bg')}
        />
      </InputLabel>
      <InputLabel>
        Time Format:{' '}
        <Input type='text' value={timeFormat} onChange={onChangeFormat}></Input>
        <a
          href='https://day.js.org/docs/en/display/format'
          target='_blank'
          rel='noreferrer'
          className={styles.link}
        >
          {' '}
          For more info click here
        </a>
      </InputLabel>
    </>
  );
}
