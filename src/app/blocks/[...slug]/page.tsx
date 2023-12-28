export default function SlugPage({ params }: { params: { slug: string[] } }) {
  return <>Este es el slug {params.slug.join('/')}</>
}