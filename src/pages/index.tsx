import { type FunctionComponent, useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import dayjs from 'dayjs';

const Main = styled.main`
  font-family: 'Courier New', Courier, monospace;
  background: none;
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  font-size: calc(10vw + 10vh);
  text-align: center;
  background: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const formatTime = (params: URLSearchParams): string =>
  dayjs().format(params.get('format') ?? 'h:mm:ss A');

const getColorParam = (params: URLSearchParams): string => {
  if (params.has('color')) {
    return `#${params.get('color')}`;
  }
  return params.get('clock') !== 'black' ? '#000' : '#FFF';
};

const Clock: FunctionComponent = () => {
  const [time, setTime] = useState('00:00:00');
  const [color, setColor] = useState('#000');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setColor(getColorParam(params));
    setTime(formatTime(params));

    const timer = setInterval(() => {
      setTime(formatTime(params));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <Main>
      <Head>
        <title>Simple, customizable clock</title>
      </Head>
      <p style={{ color }}>{time}</p>
    </Main>
  );
};

export default Clock;
