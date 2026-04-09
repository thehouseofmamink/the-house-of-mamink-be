import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
    @IsString()
    name!: string;

    @IsString()
    @IsOptional()
    region?: string;

    @IsString()
    @IsOptional()
    avatar?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    instagram?: string;

    @IsString()
    @IsOptional()
    description?: string;
}
