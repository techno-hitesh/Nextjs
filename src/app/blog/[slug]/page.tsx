const page = ({ params }: { params: { slug: string }}) => {

  return (
    <h1> {params?.slug} Blog Page</h1>
  )
}

export default page