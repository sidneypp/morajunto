import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InvalidEmailOrPasswordException } from '~/auth/exceptions/invalid-email-or-password.exception';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user) {
    if (err || !user) {
      throw new InvalidEmailOrPasswordException();
    }

    return user;
  }
}
