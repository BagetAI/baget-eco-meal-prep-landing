import { NextApiRequest, NextApiResponse } from 'next';

// In-memory storage for testimonials (for prototype simplicity)
// In production, use DB or external storage

let testimonials = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, testimonial } = req.body;

    if (!email || !testimonial) {
      res.status(400).json({ message: 'Missing email or testimonial' });
      return;
    }

    testimonials.push({ id: testimonials.length + 1, email, testimonial, createdAt: new Date() });

    res.status(201).json({ message: 'Testimonial received' });
  } else if (req.method === 'GET') {
    // Return all testimonials
    res.status(200).json(testimonials);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
