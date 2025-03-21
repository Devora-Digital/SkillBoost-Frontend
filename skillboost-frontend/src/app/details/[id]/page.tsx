export default function DetailsPage({ params }: { params: { id: string } }) {
  return <h1>Detail: {params.id}</h1>
}
