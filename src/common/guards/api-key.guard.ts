import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Response>();
    const authHeader = request.header('Authorization');

    return (authHeader as unknown) === process.env.API_KEY;
  }
}
