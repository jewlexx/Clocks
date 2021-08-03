import React, { Component } from 'react';
import Head from 'next/head';
import styles from '@styles/modules/generator.module.scss';
import type { ClockType, GeneratorState } from '@typings/Generator';
import {
  Paper,
  Button,
  FormGroup,
  InputLabel,
  Input,
  Select,
  MenuItem,
} from '@material-ui/core';

export default class Generator extends Component<null, GeneratorState> {
  clocks = ['custom', 'pride', 'transparent'];

  constructor(props: null) {
    super(props);
    this.state = {
      config: {
        clock: 'custom',
        timeFormat: 'h:mm:ss A',
        bgColor: 'FFF',
        fgColor: '000',
      },
    };

    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.handleChangeClock = this.handleChangeClock.bind(this);
  }

  async handleGenerate(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    e.preventDefault();
    const clockUrl = new URL(window.location.href);
    clockUrl.pathname = '/clock/';

    for (const key in this.state.config) {
      clockUrl.searchParams.append(key, this.state.config[key]);
    }

    // Saves the url to clipboard
    navigator.clipboard.writeText(clockUrl.href);

    // Opens this url in a new tab
    window.open(clockUrl.href, '_self');
  }

  async handleColorChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ground: 'bg' | 'fg'
  ): Promise<void> {
    if (!(e.target.value.length > 8)) {
      const config = { ...this.state.config };
      config[ground === 'bg' ? 'bgColor' : 'fgColor'] = e.target.value;
      this.setState({ config });
    }
  }

  async handleFormatChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> {
    const config = { ...this.state.config };
    config.timeFormat = e.target.value;

    this.setState({ config });
  }

  async handleChangeClock(
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ): Promise<void> {
    const config = { ...this.state.config };

    console.log(e.target.value);

    config.clock = e.target.value as ClockType;

    this.setState({ config });
  }

  render(): JSX.Element {
    return (
      <Paper className={styles.clockGenerator} variant='elevation'>
        <main>
          <Head>
            <title>Clock Generator</title>
          </Head>
          <FormGroup>
            <Select
              value={this.state.config.clock}
              onChange={this.handleChangeClock}
              variant='filled'
              title='Select your clock'
            >
              {this.clocks.map((item, i) => {
                const itemName =
                  item.substr(0, 1).toUpperCase() + item.substr(1);
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
                value={this.state.config.fgColor}
                onChange={e => this.handleColorChange(e, 'fg')}
              />
            </InputLabel>
            {this.state.config.clock === 'custom' && (
              <InputLabel id='background-color-picker'>
                Background Color: #
                <Input
                  type='text'
                  value={this.state.config.bgColor}
                  onChange={e => this.handleColorChange(e, 'bg')}
                />
              </InputLabel>
            )}
            <InputLabel>
              Time Format:{' '}
              <Input
                type='text'
                value={this.state.config.timeFormat}
                onChange={this.handleFormatChange}
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

            <Button
              onClick={this.handleGenerate}
              variant='contained'
              color='primary'
            >
              Generate URL
            </Button>
          </FormGroup>
        </main>
      </Paper>
    );
  }
}
