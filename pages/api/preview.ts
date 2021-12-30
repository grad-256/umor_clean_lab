/**
 * api/preview
 * @package pages
 */
import { NextApiResponse, NextApiRequest } from 'next'
/* config */
// import globalAxios from '@/config/globalAxios'

/**
 * constant
 */
const BASE_URL = `${
  'https://256-anything.site/' || 'https://localhost:4300/'
}/pictures/`

/**
 * プレビューAPI
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns
 */
const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.slug) {
    return res.status(404).end()
  }

  const content = await fetch(`${BASE_URL}${req.query.slug}`)
  console.log({ content })

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // res.setPreviewData({
  //   blogId: content.data.id,
  //   draftKey: req.query.draftKey,
  // })
  // res.writeHead(307, { Location: `/${content.id}` })
  res.end('Preview mode enabled')
}

export default preview
