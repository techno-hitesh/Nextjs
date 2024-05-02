const page = ({ params }: { params: { slug: string }}) => {

  return (
    <div> {params?.slug} Blog Page</div>
  )
}

export default page