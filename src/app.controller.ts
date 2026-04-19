import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getRoot() {
        return {
        message: 'The House of Mamink API is running 🚀',
        endpoints: [
            '/gallery',
            '/activity',
            '/profile',
            '/auth',
        ],
        };
    }
}