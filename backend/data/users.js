import bcrypt from 'bcrypt';

const users = [
    {
        name: 'Admin kevin',
        email: 'kemen95@hotmail.com',
        password: bcrypt.hashSync('socrates95', 10),
        isAdmin: true
    },
    {
        name: 'alito',
        email: 'alito@hotmail.com',
        password: bcrypt.hashSync('socrates95', 10),
        isAdmin: false
    },
    {
        name: 'karen',
        email: 'karen@hotmail.com',
        password: bcrypt.hashSync('socrates95', 10),
        isAdmin: false
    }


]

export default users;