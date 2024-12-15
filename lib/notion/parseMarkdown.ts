export const returnClassName = (blockType: string) => {
  switch (blockType) {
    case 'heading_1':
      return 'text-5xl font-bold pt-8 pb-4'
    case 'heading_2':
      return 'text-4xl font-bold pt-8 pb-4'
    case 'heading_3':
      return 'text-3xl font-bold pt-8 pb-4'
    case 'heading_4':
      return 'text-2xl font-bold pt-8 pb-4'
    case 'paragraph':
      return 'text-xl pt-3'
  }
}
