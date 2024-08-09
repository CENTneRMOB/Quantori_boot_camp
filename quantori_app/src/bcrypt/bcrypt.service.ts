import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class BcryptService {
  bcrypt: typeof bcrypt;
  salt: number;
  constructor() {
    this.bcrypt = bcrypt;
    this.salt = 10;
  }

  public async hash(
    password: string,
  ): Promise<string> {
    return await this.bcrypt.hash(
      password,
      this.salt,
    );
  }

  public async compare(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return await this.bcrypt.compare(
      password,
      hash,
    );
  }
}
