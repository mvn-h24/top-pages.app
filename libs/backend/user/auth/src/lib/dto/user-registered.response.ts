import { UserInterface } from '@top-pages.app/backend/user/mongo';

export type UserRegisteredResponse = Pick<UserInterface, 'email'>;
