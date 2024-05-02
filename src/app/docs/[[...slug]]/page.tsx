const Docs = ({params} : { params: {slug:String[]} }) => {
  if(params.slug?.length === 2){
    return(
      <h1>Viewing Docs for feature {params.slug[0]} & concept {params.slug[1]}</h1>
    );
  } else if(params.slug?.length === 1){
    return <h1> Viewing Docs for feature {params.slug[0]}</h1>;
  }
  return <h1>Docs Routing Page</h1>;
};

export default Docs;