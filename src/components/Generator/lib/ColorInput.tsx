import React from 'react';

interface ColorInputProps {
	valueBG: string;
	valueFG: string;
	onChangeFG: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeBG: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ColorInput({
	valueBG,
	valueFG,
	onChangeFG,
	onChangeBG,
}: ColorInputProps) {
	return (
		<div id='color-inputs'>
			<label className='color-input'>
				Time Color{': #'}
				<input
					type='text'
					id='fg-color-input'
					value={valueFG}
					onChange={onChangeFG}
				/>
			</label>
			<br></br>
			<label id='background-color-input-label'>
				Background Color{': #'}
				<input
					type='text'
					id='bg-color-input'
					value={valueBG}
					onChange={onChangeBG}
				/>
			</label>
		</div>
	);
}
