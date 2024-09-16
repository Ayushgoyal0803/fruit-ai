const express = require('express');
const {
  getFaqs,
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq,
} = require('../controllers/faqController');

const router = express.Router();

router.route('/').get(getFaqs).post(createFaq);
router.route('/:id').get(getFaqById).put(updateFaq).delete(deleteFaq);

module.exports = router;
