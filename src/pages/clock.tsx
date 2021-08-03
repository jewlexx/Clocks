import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import dayjs from 'dayjs';
import styles from '@styles/modules/clock.module.scss';
import type { ClockState } from '@typings/Clock';

declare global {
  interface Window {
    timer: number;
  }
}

export default function Clock(): JSX.Element {
  const [config, setConfig] = useState<ClockState>({
    time: '00:00:00',
    color: '#000',
  });

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const timeFormat = urlParams.get('format') || 'h:mm:ss A';

    const docRoot = document.getElementById('__next') as HTMLDivElement;

    if (queryString !== '' || urlParams.get('clock') === 'default') {
      docRoot.classList.add(styles.clock);
    }

    if (urlParams.get('clock') !== 'custom') {
      docRoot.classList.add(styles[urlParams.get('clock') + '-clock']);
    } else {
      docRoot.style.backgroundColor = '#' + urlParams.get('bgColor');
    }

    let colorParam = urlParams.get('clock') !== 'black' ? '#000' : '#FFF';
    if (urlParams.has('color')) {
      colorParam = '#' + urlParams.get('color');
    }
    document.body.classList.add(styles.timeDiv);

    const newConfig: ClockState = { ...config };

    newConfig.color = colorParam;

    newConfig.time = dayjs().format(timeFormat);

    setConfig(newConfig);

    window.timer = window.setInterval(() => {
      const newTimeConfig: ClockState = { ...config };
      newTimeConfig.time = dayjs().format(timeFormat);
      setConfig(newTimeConfig);
    }, 1000);
  }, []);

  return (
    <main className={styles.clock}>
      <Head>
        <title>Clock - Embed this URL</title>
      </Head>
      <p className={styles.time} style={{ color: config.color }}>
        {config.time}
      </p>
    </main>
  );
}
