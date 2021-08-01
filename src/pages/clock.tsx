import React from 'react';
import { Component } from 'react';
import Head from 'next/head';
import dayjs from 'dayjs';
import styles from '@styles/modules/clock.module.scss';
import type { ClockState } from '@typings/Clock';

export default class Clock extends Component<null, ClockState> {
  constructor(props: null) {
    super(props);
    this.state = {
      time: '00:00:00',
      color: '#000',
    };
  }

  componentDidMount(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const timeFormat = urlParams.get('format') || 'h:mm:ss A';

    this.setState({ time: dayjs().format(timeFormat) });

    const docRoot = document.getElementById('root') as HTMLDivElement;

    setInterval(
      () => this.setState({ time: dayjs().format(timeFormat) }),
      1000
    );

    if (queryString !== '') {
      docRoot.classList.add(styles.clock);
    }

    if (urlParams.has('bgColor')) {
      if ((urlParams.get('bgColor') as string).includes('**')) {
        docRoot.classList.add(
          styles[
            (urlParams.get('bgColor') as string).replace(/\*\*/g, '') + '-clock'
          ]
        );
      } else {
        docRoot.style.backgroundColor = '#' + urlParams.get('bgColor');
      }
    }

    let colorParam = urlParams.get('clock') !== 'black' ? '#000' : '#FFF';
    if (urlParams.has('color')) {
      colorParam = '#' + urlParams.get('color');
    }
    this.setState({ color: colorParam });

    document.body.classList.add(styles.timeDiv);
  }

  render(): JSX.Element {
    return (
      <div className={styles.clock}>
        <Head>
          <title>Clock - Embed this URL</title>
        </Head>
        <p className={styles.time} style={{ color: this.state.color }}>
          {this.state.time}
        </p>
      </div>
    );
  }
}
