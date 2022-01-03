import { NextApiRequest, NextApiResponse} from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, Name: 'Elan'},
    {id: 2, Name: 'Henrique'},
    {id: 1, Name: 'Elan'},
  ]

  return response.json(users);
}