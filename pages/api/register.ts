import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).end('TODO')
}
