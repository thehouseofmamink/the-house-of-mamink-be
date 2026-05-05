import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    getRoot() {
        return {
            status: 'success',
            service: 'The House of Mamink API',
            owner: 'Vinus',
            message: '🚀 API is live and ready to serve!',
            version: '1.0.0',
            timestamp: new Date().toISOString(),
            endpoints: {
                gallery: '/gallery',
                activity: '/activity',
                profile: '/profile',
                auth: '/auth',
            },
        };
    }
}