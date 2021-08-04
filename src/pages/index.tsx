import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '@styles/modules/generator.module.scss';
import type { ClockType, GeneratorConfig, ClockConfig } from '@typings/Generator';
import {
  Paper,
  Button,
  FormGroup,
  InputLabel,
  Input,
  Select,
  MenuItem,
  ButtonGroup,
} from '@material-ui/core';

declare global {
  interface Window {
    timer: number;
  }
}

function setStorageObj(key: string, obj: any) {
  return window.localStorage.setItem(key, JSON.stringify(obj));
}

function getStorageObj(key: string) {
  const item = window.localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  } else {
    return null;
  }
}

export default function Generator(): JSX.Element {
  const clocks = ['custom', 'pride', 'transparent'];
  const router = useRouter();

  const [oldConfigs, setOldConfigs] = useState<ClockConfig[]>([]);

  useEffect(() => {
    const docRoot = document.getElementById('__next');
    if ('timer' in window) {
      window.clearInterval(window.timer);
    }

    if (docRoot !== null) docRoot.className = '';
    document.body.className = '';

    setOldConfigs(getStorageObj('jamesinaxx:Clocks:configs') || []);
  }, []);

  const [config, setConfig] = useState<GeneratorConfig>({
    clock: 'custom',
    timeFormat: 'h:mm:ss A',
    bgColor: 'FFF',
    fgColor: '000',
  });

  const [configName, setConfigName] = useState<string>('');

  async function handleGenerate(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    e.preventDefault();
    const clockUrl = new URL(window.location.href);
    clockUrl.pathname = '/clock/';

    for (const key in Object.keys(config)) {
      // This is needed to make typescript SHUT UP :)
      const configKey = key as 'clock' | 'timeFormat' | 'bgColor' | 'fgColor';
      clockUrl.searchParams.append(key, config[configKey]);
    }

    // Saves the url to clipboard
    navigator.clipboard.writeText(clockUrl.href);

    // Opens this url in a new tab
    router.push(clockUrl.href);
  }

  async function handleColorChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ground: 'bg' | 'fg',
  ): Promise<void> {
    if (!(e.target.value.length > 8)) {
      const oldConfig = { ...config };
      oldConfig[ground === 'bg' ? 'bgColor' : 'fgColor'] = e.target.value;
      setConfig(oldConfig);
    }
  }

  async function handleFormatChange(e: React.ChangeEvent<HTMLInputElement>): Promise<void> {
    const oldConfig = { ...config };
    oldConfig.timeFormat = e.target.value;

    setConfig(oldConfig);
  }

  async function handleChangeClock(
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
  ): Promise<void> {
    const oldConfig = { ...config };

    console.log(e.target.value);

    oldConfig.clock = e.target.value as ClockType;

    setConfig(oldConfig);
  }

  async function saveConfig(
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement | MouseEvent>,
  ): Promise<void> {
    e.preventDefault();

    const currentConfig: ClockConfig = { name: configName, config };

    const oldConfigs: ClockConfig[] = getStorageObj('jamesinaxx:Clocks:configs') || [];

    oldConfigs.push(currentConfig);
    setStorageObj('jamesinaxx:Clocks:configs', oldConfigs);
    setOldConfigs(getStorageObj('jamesinaxx:Clocks:configs') || []);
    setConfigName('');
  }

  return (
    <div id="root">
      <Paper className={styles.clockGenerator} variant="elevation">
        <main>
          <Head>
            <title>Clock Generator</title>
          </Head>
          <FormGroup>
            <div>
              <h3>Saved Configs:</h3>
              <ButtonGroup>
                {oldConfigs.map((val: ClockConfig, i) => (
                  <Button key={i} onClick={() => setConfig(val.config)}>
                    {val.name}
                  </Button>
                ))}
              </ButtonGroup>
              <form className={styles.saveConfig} onSubmit={saveConfig}>
                <Input
                  placeholder="Config Name"
                  color="secondary"
                  type="text"
                  value={configName}
                  onChange={(e) => setConfigName(e.target.value)}
                />
                <Button
                  color="secondary"
                  variant="contained"
                  className={styles.saveConfig}
                  onClick={saveConfig}
                >
                  Save Config
                </Button>
              </form>
            </div>
            <br />
            <Select
              value={config.clock}
              onChange={handleChangeClock}
              variant="filled"
              title="Select your clock"
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
                type="text"
                value={config.fgColor}
                onChange={(e) => handleColorChange(e, 'fg')}
              />
            </InputLabel>
            {config.clock === 'custom' && (
              <InputLabel id="background-color-picker">
                Background Color: #
                <Input
                  type="text"
                  value={config.bgColor}
                  onChange={(e) => handleColorChange(e, 'bg')}
                />
              </InputLabel>
            )}
            <InputLabel>
              Time Format:{' '}
              <Input type="text" value={config.timeFormat} onChange={handleFormatChange} />{' '}
              <a
                href="https://day.js.org/docs/en/display/format"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                For more info click here
              </a>
            </InputLabel>

            <Button onClick={handleGenerate} variant="contained" color="primary">
              Generate URL
            </Button>
          </FormGroup>
        </main>
      </Paper>
    </div>
  );
}
