import { useState } from 'react';

export default function TestimonialForm() {
  const [email, setEmail] = useState('');
  const [testimonial, setTestimonial] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email || !testimonial) {
      setError('Please provide both your email and testimonial.');
      return;
    }

    // Basic email format check
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, testimonial }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit testimonial');
      }

      setSubmitted(true);
      setEmail('');
      setTestimonial('');
    } catch (err) {
      setError('There was an error submitting your testimonial. Please try again later.');
    }
  }

  if (submitted) {
    return (
      <div className="p-4 border rounded bg-green-50 text-green-700">
        Thank you for your feedback! We appreciate your support.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 border rounded shadow-sm bg-white">
      <h2 className="text-lg font-semibold text-center">Share Your Experience</h2>
      {error && <p className="text-red-600 text-sm">{error}</p>}

      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />

      <textarea
        placeholder="Your testimonial or feedback"
        value={testimonial}
        onChange={(e) => setTestimonial(e.target.value)}
        className="w-full border px-3 py-2 rounded min-h-[100px]"
        required
      />

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
