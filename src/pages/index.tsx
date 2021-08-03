import React, { useState } from 'react';
import Head from 'next/head';
import styles from '@styles/modules/generator.module.scss';
import type { ClockType, GeneratorConfig } from '@typings/Generator';
import {
  Paper,
  Button,
  FormGroup,
  InputLabel,
  Input,
  Select,
  MenuItem,
} from '@material-ui/core';

export default function Generator(): JSX.Element {
  const clocks = ['custom', 'pride', 'transparent'];

  const [config, setConfig] = useState<GeneratorConfig>({
    clock: 'custom',
    timeFormat: 'h:mm:ss A',
    bgColor: 'FFF',
    fgColor: '000',
  });

  async function handleGenerate(
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> {
    e.preventDefault();
    const clockUrl = new URL(window.location.href);
    clockUrl.pathname = '/clock/';

    for (const key in config) {
      // This is needed to make typescript SHUT UP :)
      const configKey = key as 'clock' | 'timeFormat' | 'bgColor' | 'fgColor';
      clockUrl.searchParams.append(key, config[configKey]);
    }

    // Saves the url to clipboard
    navigator.clipboard.writeText(clockUrl.href);

    // Opens this url in a new tab
    window.open(clockUrl.href, '_self');
  }

  async function handleColorChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ground: 'bg' | 'fg'
  ): Promise<void> {
    if (!(e.target.value.length > 8)) {
      const oldConfig = { ...config };
      config[ground === 'bg' ? 'bgColor' : 'fgColor'] = e.target.value;
      setConfig(oldConfig);
    }
  }

  async function handleFormatChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> {
    const oldConfig = { ...config };
    config.timeFormat = e.target.value;

    setConfig(oldConfig);
  }

  async function handleChangeClock(
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ): Promise<void> {
    const oldConfig = { ...config };

    console.log(e.target.value);

    config.clock = e.target.value as ClockType;

    setConfig(oldConfig);
  }

  return (
    <Paper className={styles.clockGenerator} variant='elevation'>
      <main>
        <Head>
          <title>Clock Generator</title>
        </Head>
        <FormGroup>
          <Select
            value={config.clock}
            onChange={handleChangeClock}
            variant='filled'
            title='Select your clock'
          >
            {clocks.map((item, i) => {
              const itemName = item.substr(0, 1).toUpperCase() + item.substr(1);
              return (
                <MenuItem key={i} value={item}>
                  {itemName + ' Clock'}
                </MenuItem>
              );
            })}
          </Select>

          <InputLabel>
            Time Color: #
            <Input
              type='text'
              value={config.fgColor}
              onChange={e => handleColorChange(e, 'fg')}
            />
          </InputLabel>
          {config.clock === 'custom' && (
            <InputLabel id='background-color-picker'>
              Background Color: #
              <Input
                type='text'
                value={config.bgColor}
                onChange={e => handleColorChange(e, 'bg')}
              />
            </InputLabel>
          )}
          <InputLabel>
            Time Format:{' '}
            <Input
              type='text'
              value={config.timeFormat}
              onChange={handleFormatChange}
            />{' '}
            <a
              href='https://day.js.org/docs/en/display/format'
              target='_blank'
              rel='noreferrer'
              className={styles.link}
            >
              For more info click here
            </a>
          </InputLabel>

          <Button onClick={handleGenerate} variant='contained' color='primary'>
            Generate URL
          </Button>
        </FormGroup>
      </main>
    </Paper>
  );
}
