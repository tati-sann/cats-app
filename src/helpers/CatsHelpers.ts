export const convertCatsListData = (cats: []) => {
  return cats.map((cat: any) => {
    return {
      id: cat.id,
      name: cat.name,
      description: cat.description,
      img: cat.image?.url,
    }
  })
}