import { useEffect, useState } from 'react';

export default function TestimonialShowcase() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch('/api/testimonials');
        if (res.ok) {
          const data = await res.json();
          setTestimonials(data);
        }
      } catch {}
      setLoading(false);
    }

    fetchTestimonials();
  }, []);

  if (loading) {
    return <p className="text-center py-4">Loading testimonials...</p>;
  }

  if (testimonials.length === 0) {
    return <p className="text-center py-4 text-gray-600">No testimonials yet. Be the first to share your feedback!</p>;
  }

  return (
    <section className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Early Customers Say</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <blockquote key={t.id} className="border p-4 rounded shadow-sm bg-white">
            <p className="text-gray-800">"{t.testimonial}"</p>
            <footer className="mt-2 text-sm text-gray-500">— {t.email}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
