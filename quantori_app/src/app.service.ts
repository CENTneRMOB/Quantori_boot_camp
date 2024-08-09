import {
  Injectable,
  ForbiddenException,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "./users/users.service";
import { BcryptService } from "./bcrypt/bcrypt.service";

@Injectable()
export class AppService {
  constructor(
    private usersService: UsersService,
    private bcryptService: BcryptService,
  ) {}

  async getProfile(token: string) {
    const user =
      await this.usersService.getUserByToken(
        token,
      );

    if (!user) {
      throw new ForbiddenException(
        "No such user",
      );
    }

    return {
      email: user.email,
      username: user.username,
    };
  }

  async logIn(body: {
    email: string;
    password: string;
  }): Promise<string | null> {
    const user =
      await this.usersService.getUserByEmail(
        body.email,
      );

    if (!user) {
      throw new ForbiddenException(
        "No such user",
      );
    }

    const isPassValid =
      await this.bcryptService.compare(
        body.password,
        user.hash,
      );

    if (!isPassValid) {
      throw new UnauthorizedException(
        "Invalid password",
      );
    }

    return user.token;
  }
}
