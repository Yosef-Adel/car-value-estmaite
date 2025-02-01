import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RequestWithCurrentUser } from 'src/types/request-with-current-user';

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    // Use the custom type when getting the request
    const request = context.switchToHttp().getRequest<RequestWithCurrentUser>();
    return request.currentUser;
  },
);

