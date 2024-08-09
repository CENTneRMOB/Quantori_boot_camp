import { Strategy } from "passport-http-bearer";
import { PassportStrategy } from "@nestjs/passport";
import {
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class BearerStrategy extends PassportStrategy(
  Strategy,
  "bearer",
) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(token: string): Promise<any> {
    if (!token) {
      throw new UnauthorizedException(
        "No token in authorization header",
      );
    }

    const user =
      await this.authService.validateToken(token);
    if (!user) {
      throw new UnauthorizedException(
        "Invalid token",
      );
    }

    return user;
  }
}
