import { User } from './models';

export const fetchUsers = async () => {
    try {
        const users = await User.find();
        return users;
    }
    catch (err) {
        log.error(err);
        throw new Error("error in fetching users");
    }
}   