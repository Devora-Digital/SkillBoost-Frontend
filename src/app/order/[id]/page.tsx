export default function OrderPage({ params }: { params: { id: string } }) {
  return <h1>Order detail: {params.id}</h1>
}
