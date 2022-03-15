import users from './users';
import addUser from './addUser';

const admin = () => ({
    namespaced: true,
    modules: {
        users: users(),
        addUser: addUser()
    }
})

export default admin