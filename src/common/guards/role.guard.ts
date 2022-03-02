import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly Reflector: Reflector) {};

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.Reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true
    };

    const request = context.switchToHttp().getRequest();
    const { user } = request.query;

    return !!roles.find(col => col === user);
  }
}