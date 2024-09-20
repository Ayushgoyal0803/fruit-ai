const Faq = require('../models/Faq');

// Get all FAQs
const getFaqs = async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get FAQ by ID
const getFaqById = async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });
    res.status(200).json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new FAQ
const createFaq = async (req, res) => {
  const { question, answer } = req.body;
  const faq = new Faq({ question, answer });

  try {
    const newFaq = await faq.save();
    res.status(201).json(newFaq);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update FAQ
const updateFaq = async (req, res) => {
  const { question, answer } = req.body;

  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });

    faq.question = question || faq.question;
    faq.answer = answer || faq.answer;

    const updatedFaq = await faq.save();
    res.status(200).json(updatedFaq);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete FAQ
const deleteFaq = async (req, res) => {
  try {
    const result = await Faq.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) return res.status(404).json({ message: 'FAQ not found' });

    res.status(200).json({ message: 'FAQ deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFaqs,
  getFaqById,
  createFaq,
  updateFaq,
  deleteFaq,
};
