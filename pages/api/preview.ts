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
  process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:4300/'
}/blogs/`

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

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // res.setPreviewData({
  //   blogId: content.data.id,
  //   draftKey: req.query.draftKey,
  // })
  // res.writeHead(307, { Location: `/${content.data.id}` })
  res.end('Preview mode enabled')
}

export default preview
