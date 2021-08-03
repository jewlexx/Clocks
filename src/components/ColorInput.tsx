import React from 'react';
import styles from '@styles/modules/generator.module.scss';
import { InputLabel, Input } from '@material-ui/core';
import type { ColorInputProps } from '@typings/ColorInput';

export default function ColorInput({
  valueBG,
  valueFG,
  onChangeFG,
  onChangeBG,
  timeFormat,
  onChange,
}: ColorInputProps): JSX.Element {
  return (
    <>
      <InputLabel>
        Time Color{': #'}
        <Input type='text' value={valueFG} onChange={onChangeFG} />
      </InputLabel>
      <InputLabel>
        Background Color{': #'}
        <Input type='text' value={valueBG} onChange={onChangeBG} />
      </InputLabel>
      <InputLabel>
        Time Format{': '}
        <Input type='text' value={timeFormat} onChange={onChange}></Input>
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
