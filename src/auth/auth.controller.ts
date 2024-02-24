import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth-payload.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() authPayload: AuthPayloadDto) {
    // console.log('authPayload', authPayload);
    const user = await this.authService.validateUser(authPayload);

    // if (!user) throw new HttpException('Invalid Credentials', 401);
    
    return user;
  }
}
