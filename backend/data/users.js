import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    mobile_number: '0771234567',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mathujan',
    mobile_number: '0766702604',
    email: 'mathujan@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ajith Kumar',
    mobile_number: '0776785432',
    email: 'ajith@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users