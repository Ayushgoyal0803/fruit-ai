import React, { useState, useEffect } from 'react';
import { fetchFaqs, createFaq, updateFaq, deleteFaq } from '../Api';
import './FAQ.css'; // Import the CSS file

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const getFaqs = async () => {
      try {
        const response = await fetchFaqs();
        setFaqs(response.data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };
    getFaqs();
  }, []);

  const handleAdd = async () => {
    try {
      const response = await createFaq({ question, answer });
      setFaqs([...faqs, response.data]);
      setQuestion('');
      setAnswer('');
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  };

  const handleEdit = async () => {
    try {
      const response = await updateFaq(editingId, { question, answer });
      setFaqs(faqs.map(faq => (faq._id === editingId ? response.data : faq)));
      setEditingId(null);
      setQuestion('');
      setAnswer('');
    } catch (error) {
      console.error('Error updating FAQ:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFaq(id);
      setFaqs(faqs.filter(faq => faq._id !== id));
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  return (
    <div>
      <h1>FAQ Management</h1>
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={editingId ? handleEdit : handleAdd}>
        {editingId ? 'Update FAQ' : 'Add FAQ'}
      </button>

      <ul>
        {faqs.map(faq => (
          <li key={faq._id}>
            <strong>{faq.question}</strong>: {faq.answer}
            <button onClick={() => {
              setQuestion(faq.question);
              setAnswer(faq.answer);
              setEditingId(faq._id);
            }}>
              Edit
            </button>
            <button onClick={() => handleDelete(faq._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
