"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const fs = require("fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: true,
        httpsOptions: {
            key: fs.readFileSync('/home/AzureUser/ssl/hostname.pem'),
            cert: fs.readFileSync('/home/AzureUser/ssl/hostname.pem')
        }
    });
    app.enableCors({ origin: "*" });
    app.setGlobalPrefix('/api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map