import { add } from "@autospacce/sample-lib";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return `Let's keep it ${add(98, 2)}!`;
  }
}
