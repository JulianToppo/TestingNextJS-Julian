export async function generateMetadata({params}){
  return {
    "title":`Hello ${params.name}`
  }
}

export default function HelloPage({ params }) {
    return <h1>Hello, {params.name}!</h1>;
  }
  