import React from 'react';
import { Component } from 'react';
import Head from 'next/head';
import ClockSelect from '@components/ClockSelect';
import ColorInput from '@components/ColorInput';
import styles from '@styles/modules/generator.module.scss';
import type { GeneratorState } from '@typings/Generator';
import { Paper, Button, FormGroup } from '@material-ui/core';

export default class Generator extends Component<null, GeneratorState> {
  constructor(props: null) {
    super(props);
    this.state = {
      timeFormat: 'h:mm:ss A',
      fgColor: '000',
      bgColor: 'FFF',
    };

    this.handleGenerate = this.handleGenerate.bind(this);
  }

  handleGenerate(e: React.MouseEvent<HTMLButtonElement>): void {
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
        ? this.state.bgColor || 'fff'
        : `**${clockSelect.value}**`
    );

    clockUrl.searchParams.append('color', this.state.fgColor || '000');

    clockUrl.searchParams.append(
      'format',
      this.state.timeFormat || 'h:mm:ss A'
    );

    // Saves the url to clipboard
    navigator.clipboard.writeText(clockUrl.href);

    // Opens this url in a new tab
    window.open(clockUrl.href, '_self');
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
              valueFG={this.state.fgColor}
              valueBG={this.state.bgColor}
              onChangeFG={e => {
                if (!(e.target.value.length > 8))
                  this.setState({ fgColor: e.target.value });
              }}
              onChangeBG={e => {
                if (!(e.target.value.length > 8))
                  this.setState({ bgColor: e.target.value });
              }}
              onChange={e => this.setState({ timeFormat: e.target.value })}
              timeFormat={this.state.timeFormat}
            />

            <Button
              onClick={this.handleGenerate} /* className={styles.genButton} */
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
