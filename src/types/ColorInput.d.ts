export interface ColorInputProps {
  valueBG: string | undefined;
  valueFG: string | undefined;
  timeFormat: string | undefined;
  onChangeFG: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeBG: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
