export default function CoursePage({ params }: { params: { id: string } }) {
  return <h1>Course detail: {params.id}</h1>
}
