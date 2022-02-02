import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const { email, password } = req.body;
  // const existingUser = await User.findOne({ email }).exec();
  // const validPassword = await existingUser.validatePassword(password);
  // const token = generateToken(existingUser._id);
  // const user = existingUser;
  // if (!existingUser) {
  //   return res.status(401).json('Invalid email or password');
  // }
  // if (!validPassword) {
  //   return res.status(401).json('Invalid email or password');
  // }
  // return res.status(200).setHeader('x-auth-token', token).json({ user });
  return res.status(200).end('TODO')
}
