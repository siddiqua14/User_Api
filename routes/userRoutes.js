const express = require('express');
const {
    getProfile,
    getAllProfiles,
    updateProfile,
    deleteProfile,
} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/profile', authMiddleware, getProfile);
router.get('/', authMiddleware, getAllProfiles);
router.put('/profile', authMiddleware, updateProfile);
router.delete('/profile', authMiddleware, deleteProfile);

module.exports = router;
