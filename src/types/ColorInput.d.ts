export interface ColorInputProps {
	valueBG: string | undefined;
	valueFG: string | undefined;
	onChangeFG: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeBG: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
