import { IsEmail, IsNotEmpty, IsStrongPassword, MaxLength, MinLength } from 'class-validator'


export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(15)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(15)
  @IsStrongPassword()
  password: string;

}
