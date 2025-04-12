import { MentorInfo } from "@/widgets/MentorInfo";

export default function MentorPage({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Mentor detail: {params.id}</h1>
      <MentorInfo />
    </>
  )
}
