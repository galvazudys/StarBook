import schema from './schema/loginUserSchema';
import Creator from './arrayModelCreator';

const loginUser = Creator('loginUser', schema);

export default loginUser;
