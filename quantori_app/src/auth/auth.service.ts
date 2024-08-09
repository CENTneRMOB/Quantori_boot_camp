import {
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { BcryptService } from "../bcrypt/bcrypt.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private bcryptService: BcryptService,
  ) {}

  async validateToken(
    token: string,
  ): Promise<any> {
    const user =
      await this.usersService.getUserByToken(
        token,
      );

    if (!user) {
      throw new UnauthorizedException();
    }

    const isTokenValid =
      await this.bcryptService.compare(
        `${user.email}+${user.username}`,
        token,
      );
    if (!isTokenValid) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
