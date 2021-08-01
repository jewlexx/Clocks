import React from 'react';
import styles from '@styles/modules/generator.module.scss';
import type { TimeFormatProps } from '@typings/TimeFormat';

export default function TimeFormat({
  timeFormat,
  onChange,
}: TimeFormatProps): JSX.Element {
  return (
    <div>
      <label>
        Time Format{': '}
        <input type='text' value={timeFormat} onChange={onChange}></input>
        <a
          href='https://day.js.org/docs/en/display/format'
          target='_blank'
          rel='noreferrer'
          className={styles.link}
        >
          {' '}
          For more info click here
        </a>
      </label>
    </div>
  );
}
