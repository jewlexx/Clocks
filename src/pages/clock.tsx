import { useState, useEffect, FunctionComponent } from 'react';
import Head from 'next/head';
import dayjs from 'dayjs';
import styled from 'styled-components';
import styles from '@styles/modules/clock.module.scss';
import type { ClockState } from '@typings/Clock';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    timer: number;
  }
}

const Main = styled.main`
  font-family: $clock-font-family;
  background: none;
  background-color: transparent;
`;

const Clock: FunctionComponent = () => {
  const [config, setConfig] = useState<ClockState>({
    time: '00:00:00',
    color: '#000',
  });

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const timeFormat = urlParams.get('format') ?? 'h:mm:ss A';

    const docRoot = document.getElementById('__next') as HTMLDivElement;

    if (queryString !== '' || urlParams.get('clock') === 'default') {
      docRoot.classList.add(styles.clock);
    }

    if (urlParams.get('clock') !== 'custom') {
      docRoot.classList.add(styles[`${urlParams.get('clock')}-clock`]);
    } else {
      docRoot.style.backgroundColor = `#${urlParams.get('bgColor')}`;
    }

    let colorParam = urlParams.get('clock') !== 'black' ? '#000' : '#FFF';
    if (urlParams.has('color')) {
      colorParam = `#${urlParams.get('color')}`;
    }
    document.body.classList.add(styles.timeDiv);

    setConfig((old) => {
      const newConfig: ClockState = { ...old };
      newConfig.color = colorParam;
      newConfig.time = dayjs().format(timeFormat);
      return newConfig;
    });

    window.timer = window.setInterval(() => {
      setConfig((old) => {
        const newConfig: ClockState = { ...old };
        newConfig.time = dayjs().format(timeFormat);
        return newConfig;
      });
    }, 1000);
  }, []);

  return (
    <Main>
      <Head>
        <title>Clock - Embed this URL</title>
      </Head>
      <p style={{ color: config.color }}>{config.time}</p>
    </Main>
  );
};

export default Clock;
