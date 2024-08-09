import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserDto } from "./dto/index";

@Injectable()
export class UsersService {
  constructor(
    private prismaService: PrismaService,
  ) {}

  async getUserByEmail(
    email: string,
  ): Promise<UserDto> {
    const user =
      await this.prismaService.user.findFirst({
        where: { email: email },
      });

    return user ? user : null;
  }

  async getUserByToken(
    token: string,
  ): Promise<UserDto> {
    const user =
      await this.prismaService.user.findFirst({
        where: {
          token: token,
        },
      });

    return user ? user : null;
  }
}
