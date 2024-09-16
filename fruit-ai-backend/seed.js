const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Faq = require('./models/Faq');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedFaqs = async () => {
  await connectDB();

  const faqs = [
    { question: 'What is a fruit?', answer: 'A fruit is the mature ovary of a flowering plant, usually containing seeds.' },
    { question: 'How do I store fruits?', answer: 'Most fruits should be stored in a cool, dry place. Some fruits, like apples, should be kept in the refrigerator.' },
    { question: 'What are the benefits of eating fruits?', answer: 'Fruits are rich in vitamins, minerals, and fiber. They can help improve digestion, reduce the risk of chronic diseases, and boost overall health.' },
    { question: 'Can I freeze fruits?', answer: 'Yes, many fruits can be frozen to preserve their freshness. Make sure to wash and dry them thoroughly before freezing.' },
  ];

  try {
    await Faq.deleteMany({}); // Clear existing FAQs
    await Faq.insertMany(faqs); // Add default FAQs
    console.log('FAQs seeded');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedFaqs();
