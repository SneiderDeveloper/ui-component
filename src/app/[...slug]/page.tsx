import coreController, {getComponent} from '@/core/controller'
import React from 'react'
import { BlockWithData} from "@/interfaces/block.interface";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const data = await coreController(params.slug.join('/'))
  const component = (block: BlockWithData) => getComponent(block)

  return (
    <main className="grid gap-10 p-4">
      <>{data && (data.map((block: any) => (
          <React.Fragment key={block.id}>
            {component(block)}
          </React.Fragment>
        ))
      )}</>
    </main>
  )
}
