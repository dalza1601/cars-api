import { IsString, IsUUID, IsOptional } from 'class-validator';
export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  readonly brand?: string;

  @IsString()
  readonly model?: string;
}
