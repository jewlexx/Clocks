import React, { Component } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import type { ClockSelectProps, ClockSelectState } from '@typings/ClockSelect';

export default class ClockSelect extends Component<
  ClockSelectProps,
  ClockSelectState
> {
  constructor(props: ClockSelectProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <Select
        value={this.props.value}
        onChange={this.props.onChange}
        variant='filled'
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
