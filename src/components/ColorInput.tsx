import React from 'react';
import type { ColorInputProps } from '@typings/ColorInput';

export default function ColorInput({
	valueBG,
	valueFG,
	onChangeFG,
	onChangeBG,
}: ColorInputProps) {
	return (
		<div>
			<label>
				Time Color{': #'}
				<input type='text' value={valueFG} onChange={onChangeFG} />
			</label>
			<br></br>
			<label>
				Background Color{': #'}
				<input type='text' value={valueBG} onChange={onChangeBG} />
			</label>
		</div>
	);
}
