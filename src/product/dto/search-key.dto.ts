import { IsNotEmpty } from 'class-validator';

export class SearchKeyDto {
  @IsNotEmpty()
  name: string;
}
