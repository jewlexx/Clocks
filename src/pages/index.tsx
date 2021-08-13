import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '@styles/modules/generator.module.scss';
import type { GeneratorConfig, ClockConfig } from '@typings/Generator';
import {
  Paper,
  Button,
  FormGroup,
  InputLabel,
  Input,
  Select,
  MenuItem,
  Divider,
} from '@material-ui/core';
import { Save, Done, CheckCircleOutline } from '@material-ui/icons';
import { setStorageObj, getStorageObj } from '../lib/storage';
import defaultConfig from '../lib/config';

export default function Generator(): JSX.Element {
  const [configNameError, setConfigNameError] = useState(false);
  const clocks = ['custom', 'pride', 'transparent'];
  const router = useRouter();
  const [savedConfigs, setSavedConfigs] = useState<ClockConfig[]>([]);
  const [justSaved, setJustSaved] = useState<boolean>(false);
  const [config, setConfig] = useState<GeneratorConfig>(defaultConfig);
  const [configName, setConfigName] = useState<string>('');

  useEffect(() => {
    const docRoot = document.getElementById('__next');
    if ('timer' in window) {
      window.clearInterval(window.timer);
    }

    if (docRoot !== null) docRoot.className = '';
    document.body.className = '';

    setSavedConfigs(getStorageObj('jamesinaxx:Clocks:configs') || []);
  }, []);

  async function handleGenerate(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    e.preventDefault();
    const clockUrl = new URL(window.location.href);
    clockUrl.pathname = '/clock/';

    Object.keys(config).forEach((key) => {
      // This is needed to make typescript SHUT UP :)
      const configKey = key as 'clock' | 'timeFormat' | 'bgColor' | 'fgColor';
      clockUrl.searchParams.append(key, config[configKey]);
    });

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

    oldConfig.clock = e.target.value as string;

    setConfig(oldConfig);
  }

  async function saveConfig(
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement | MouseEvent>,
  ): Promise<void> {
    e.preventDefault();

    setJustSaved(true);
    window.setTimeout(() => {
      setJustSaved(false);
      setConfigNameError(true);
    }, 5000);

    if (savedConfigs.find((val) => val.name === configName) === undefined) {
      setConfigNameError(true);
    } else {
      setSavedConfigs(savedConfigs.concat([{ name: configName, config }]));
      setStorageObj('jamesinaxx:Clocks:configs', savedConfigs);
    }

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
                  // eslint-disable-next-line react/no-array-index-key
                  <MenuItem key={i} value={item}>
                    {`${itemName} Clock`}
                  </MenuItem>
                );
              })}
              {savedConfigs.length !== 0 && (
                <>
                  <Divider />
                  {savedConfigs.map((val: ClockConfig) => (
                    <MenuItem key={val.name} value={val.name} className={styles.customClock}>
                      {val.name}
                    </MenuItem>
                  ))}
                </>
              )}
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
            <hr />
            <div className={styles.buttonsWrapper}>
              <form className={styles.saveConfig} onSubmit={saveConfig}>
                <Input
                  placeholder="Config Name"
                  color="secondary"
                  type="text"
                  error={configNameError}
                  value={configName}
                  onChange={(e) => {
                    setConfigName(e.target.value);
                    setJustSaved(false);
                    setConfigNameError(false);
                  }}
                />
                <Button
                  color={justSaved ? 'primary' : 'secondary'}
                  variant="contained"
                  className={styles.saveConfig}
                  onClick={saveConfig}
                  title={justSaved ? 'Save Config' : 'Saved Config'}
                >
                  {justSaved ? <Done /> : <Save />}
                </Button>
                <Button
                  onClick={handleGenerate}
                  variant="contained"
                  color="primary"
                  fullWidth={false}
                  className={styles.generateButton}
                  title="Generate URL"
                >
                  <CheckCircleOutline />
                </Button>
              </form>
            </div>
          </FormGroup>
        </main>
      </Paper>
    </div>
  );
}
