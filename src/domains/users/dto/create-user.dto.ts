import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    documentNumber: string;

    @IsString()
    @IsOptional()
    typeDocument?: string;

    @IsEmail()
    email: string;

    @IsBoolean()
    @IsOptional()
    keepSessionActive?: boolean;

    @IsString()
    @IsOptional()
    role?: string;

    @IsString()
    @IsOptional()
    course?: string;

    @IsString()
    avatar: string;
}