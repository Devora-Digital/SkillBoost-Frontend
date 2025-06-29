export default function CategoryPage({ params }: { params: { id: string } }) {
  return <h1>Category: {params.id}</h1>
}
