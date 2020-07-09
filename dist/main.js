"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const fs = require("fs");
const helmet = require("helmet");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions: {
            key: fs.readFileSync('/home/AzureUser/ssl/server.key.pem'),
            cert: fs.readFileSync('/home/AzureUser/ssl/ngao_tech.pem')
        }
    });
    app.use(helmet());
    const options = {
        "origin": ["https://23.97.77.60", "https://ngao.tech", "http://localhost:3000"],
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 200,
        "credentials": false,
        "allowedHeaders": "Content-Type, Accept,Authorization",
    };
    app.use(cors(options));
    app.setGlobalPrefix('/api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map