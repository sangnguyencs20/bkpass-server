const express = require('express');
const router = express.Router();

const getItemDetail = require('../controllers/item/getItemDetail');
const updateItem = require('../controllers/item/updateItem');
const postItem = require('../controllers/item/postItem');
const deleteItem = require('../controllers/item/deleteItem');

const markItem = require('../controllers/item/markItem');
const unmarkItem = require('../controllers/item/unmarkItem');

const authenticate = require('../middlewares/auth');
const optionalAuth = require('../middlewares/optionalAuth');

router.get('/:itemId', optionalAuth, getItemDetail);
router.post('', authenticate, postItem);
router.put("/:itemId", authenticate, updateItem);
router.delete("/:itemId", authenticate, deleteItem);

router.post('/:itemId/mark', authenticate, markItem);
router.delete("/:itemId/mark", authenticate, unmarkItem);

module.exports = router;