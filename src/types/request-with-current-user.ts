import { User } from 'src/users/user.entity';

export interface RequestWithCurrentUser extends Request {
  currentUser: User | null;
  session: { userId: number };
}
