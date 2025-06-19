import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (email === 'fabianbencinic@googlemail.com' && password === 'sillywilly1000') {
    return res.status(200).json({
      user: { id: '1', firstName: 'Test', lastName: 'User', email },
      token: 'fake-jwt-token',
    });
  }

  return res.status(401).json({ message: 'Invalid email or password' });
}
