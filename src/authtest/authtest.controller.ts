import { Controller, Get } from '@nestjs/common';

@Controller('authtest')
export class AuthtestController {
    @Get()
    hello(){
        return "Auth Working!!";
    }
}
