export type product = {
  _id: string
  title: string
  slug: {
    current: string
  }
  price: number
  description: string
  image?: {
    asset?: {
      url: string
    }
  }
}