import React, { Component } from 'react';
import Head from 'next/head';
import ClockSelect from '@components/ClockSelect';
import ColorInput from '@components/ColorInput';
import styles from '@styles/modules/generator.module.scss';
import type { GeneratorState } from '@typings/Generator';
import type { CustomChangeEvent } from '@typings/ColorInput';
import { Paper, Button, FormGroup } from '@material-ui/core';

export default class Generator extends Component<null, GeneratorState> {
  constructor(props: null) {
    super(props);
    this.state = {
      config: { timeFormat: 'h:mm:ss A', bgColor: 'FFF', fgColor: '000' },
    };

    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }

  async handleGenerate(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    e.preventDefault();
    const clockUrl = new URL(window.location.href);
    clockUrl.pathname = '/clock/';

    // Var definitions
    const clockSelect = document.getElementById(
      'clock-selector'
    ) as HTMLSelectElement;

    clockUrl.searchParams.append(
      'bgColor',
      clockSelect.value === 'custom'
        ? this.state.config.bgColor || 'fff'
        : `**${clockSelect.value}**`
    );

    clockUrl.searchParams.append('color', this.state.config.fgColor || '000');

    clockUrl.searchParams.append(
      'format',
      this.state.config.timeFormat || 'h:mm:ss A'
    );

    // Saves the url to clipboard
    navigator.clipboard.writeText(clockUrl.href);

    // Opens this url in a new tab
    window.open(clockUrl.href, '_self');
  }

  async handleColorChange(
    e: CustomChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): Promise<void> {
    if (!(e.target.value.length > 8)) {
      const config = { ...this.state.config };
      config[e.ground === 'bg' ? 'bgColor' : 'fgColor'] = e.target.value;
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

  render(): JSX.Element {
    return (
      <Paper className={styles.clockGenerator} variant='elevation'>
        <main>
          <Head>
            <title>Clock Generator</title>
          </Head>
          <FormGroup>
            <ClockSelect clocks={['custom', 'pride', 'transparent']} />

            <ColorInput
              valueFG={this.state.config.fgColor}
              valueBG={this.state.config.bgColor}
              timeFormat={this.state.config.timeFormat}
              onChangeColor={this.handleColorChange}
              onChangeFormat={this.handleFormatChange}
            />

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
