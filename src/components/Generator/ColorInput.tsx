import React from 'react';

interface ColorInputProps {
	valueBG: string | undefined;
	valueFG: string | undefined;
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
