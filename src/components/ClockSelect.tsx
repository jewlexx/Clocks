import React, { Component, useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import type { ClockSelectProps, ClockSelectState } from '@typings/ClockSelect';

export default class ClockSelect extends Component<
  ClockSelectProps,
  ClockSelectState
> {
  constructor(props: ClockSelectProps) {
    super(props);

    this.state = {
      clock: 'custom',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ): void {
    const el = document.getElementById('background-color-picker');
    if (el) {
      el.hidden = e.target.value !== 'custom';
    }

    this.setState({
      clock: e.target.value as string,
    });
  }

  render(): JSX.Element {
    return (
      <Select
        value={this.state.clock}
        onChange={this.handleChange}
        variant='filled'
        id='clock-selector'
        title='Select your clock'
      >
        {this.props.clocks.map((item, i) => {
          const itemName = item.substr(0, 1).toUpperCase() + item.substr(1);
          return (
            <MenuItem key={i} value={item}>
              {itemName}
            </MenuItem>
          );
        })}
      </Select>
    );
  }
}
