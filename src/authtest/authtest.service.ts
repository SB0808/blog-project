import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthtestService {
    ping(){
        return "Auth Service ok!!";
    }
}
