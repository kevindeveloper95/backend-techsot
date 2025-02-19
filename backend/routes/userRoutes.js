import express  from "express";
/* import products from '../data/products.js'; */
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUsersProfile,
    getUsers,
    deleteUser,
    getUsersById,
    updateUser,
} from '../controllers/userController.js';
import {protect, admin} from "../middlewares/authMiddleware.js"

const router = express.Router()



router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router.route('/profile').get(protect, getUserProfile).put( protect, updateUsersProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUsersById).put(protect, admin, updateUser)

export default router