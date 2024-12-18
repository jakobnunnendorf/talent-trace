declare global {
  // ======================
  // Testimonial Types
  // ======================
  interface Testimonial {
    title: string
    text: string
    author: string
    position: string
  }

  // ======================
  // News Types
  // ======================
  interface NewsPost {
    imageLink: string
    title: string
    summary: string
    date: string
    blogPostLink: string
    author: string
    featured: boolean
  }

  // ======================
  // Category Types
  // ======================
  interface CategoryObject {
    categoryName: string
    icon: string
    image: string
    id: string
  }

  interface CategoryEntry {
    object: 'page'
    id: string
    created_time: string
    last_edited_time: string
    created_by: NotionUser
    last_edited_by: NotionUser
    cover: null
    icon: null
    parent: {
      type: 'database_id'
      database_id: string
    }
    archived: boolean
    in_trash: boolean
    properties: {
      Keywords: {
        id: string
        type: 'multi_select'
        multi_select: Array<{
          id: string
          name: string
          color: string
        }>
      }
      Icon: {
        id: string
        type: 'files'
        files: Array<{
          name: string
          type: 'file'
          file: {
            url: string
            expiry_time: string
          }
        }>
      }
      Text: {
        id: string
        type: 'rich_text'
        rich_text: NotionRichText[]
      }
      Image: {
        id: string
        type: 'files'
        files: Array<{
          name: string
          type: 'file'
          file: {
            url: string
            expiry_time: string
          }
        }>
      }
      Category: {
        id: string
        type: 'title'
        title: Array<{
          type: 'text'
          text: {
            content: string
            link: null | string
          }
          annotations: {
            bold: boolean
            italic: boolean
            strikethrough: boolean
            underline: boolean
            code: boolean
            color: string
          }
          plain_text: string
          href: null | string
        }>
      }
    }
    url: string
    public_url: string
  }

  // ======================
  // Company Types
  // ======================
  interface Company {
    logo: string
    name: string
  }

  // ======================
  // Notion API Types
  // ======================
  type NotionResponse = {
    object: 'list'
    results: any[]
    next_cursor: null | string
    has_more: boolean
  }

  // Add more Notion specific types here
  interface NotionUser {
    object: 'user'
    id: string
  }

  interface NotionRichText {
    type: 'text'
    text: {
      content: string
      link: null | string
    }
    annotations: {
      bold: boolean
      italic: boolean
      strikethrough: boolean
      underline: boolean
      code: boolean
      color: string
    }
    plain_text: string
    href: null | string
  }
}

// This export is necessary to make the file a module
export {}
