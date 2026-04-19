import { AuthGuard } from '@nestjs/passport';
import { Injectable, ExecutionContext } from '@nestjs/common';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        console.log('JWT GUARD HIT 🔐');
        return super.canActivate(context);
    }

    handleRequest(err, user) {
        console.log('JWT USER:', user);

        if (err || !user) {
        console.log('JWT ERROR:', err);
        return null; // ⬅️ sementara biarin lewat
        }

        return user;
    }
}