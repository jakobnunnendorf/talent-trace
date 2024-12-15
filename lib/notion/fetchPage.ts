import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export const fetchCategoryPage = async (pageId: string) => {
  const response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  })
  return response
}

export const extractBlockContents = (blockArray: any) => {
  const blocks = blockArray.map((block: any) => {
    const blockType = block['type']
    const content = block[blockType].rich_text
      .map((element: any) => {
        return element.plain_text
      })
      .join('')
    return {
      type: blockType,
      content: content,
      className: returnClassName(blockType),
    }
  })
  return blocks
}