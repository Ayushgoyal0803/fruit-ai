import axios from 'axios';
import React, { useState, useEffect } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/faqs')
      .then((response) => {
        setFaqs(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the FAQs!', error);
      });
  }, []);

  return (
    <div>
      <h1>FAQ</h1>
      <ul>
        {faqs.map((faq) => (
          <li key={faq._id}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
