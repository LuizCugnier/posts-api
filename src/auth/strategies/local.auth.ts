import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { AuthPayloadDto } from '../dto/auth-payload.dto';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate({username, password}: AuthPayloadDto) {
    const user = await this.authService.validateUser({username, password});
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
