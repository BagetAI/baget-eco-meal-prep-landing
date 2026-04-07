import TestimonialForm from '@/components/TestimonialForm';
import TestimonialShowcase from '@/components/TestimonialShowcase';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <section className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Eco-Friendly Meal Prep Delivery</h1>
        <p className="text-center text-lg mb-10">
          Fresh, nutritious, health-forward meals delivered in genuinely low-waste packaging.
          Join our early customers and help us shape a sustainable, convenient future.
        </p>

        <TestimonialForm />

        <TestimonialShowcase />
      </section>
    </main>
  );
}
