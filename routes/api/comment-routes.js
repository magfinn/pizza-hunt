const router = require('express').Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require('../../controllers/comment-controller');

//add comment
//POST /api/comments/:pizzaId
router.route('/:pizzaId').post(addComment);

//remove comment
//DELETE /api/comments/:pizzaId/:commentId
router.route('/:pizzaId/:commentId').put(addReply).delete(removeComment);

//remove reply
// /:pizzaId/:commentId/:replyId
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;
