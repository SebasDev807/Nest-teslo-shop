import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";

export const getHeaders = createParamDecorator(
    (data: string, context: ExecutionContext) => {
        const req = context.switchToHttp().getRequest();
        const headers = req.rawHeaders;

        if(!headers) {
            throw new InternalServerErrorException('No headers');
        }

        return headers;
    }
)