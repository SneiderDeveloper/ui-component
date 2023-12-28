import {getBlockFetcher, getDataFetcher} from "@/services/blocks.service";
import {COMPONENTS} from "@/components/dynamicComponents";
import React from 'react'
import {REQUESTAPI} from "@/constants/requestApi";

export default async function Page() {
  const data = await getBlockFetcher('api/ibuilder/v1/layouts/1')

  const getComponent = (block: any) => {
    //Check if exist component
    const path = block?.component?.systemName || '';
    if(!COMPONENTS[path]) return <>{path}...</>

    //Check if exist entity to request
    const entity = block.entity
    let reqEntity = REQUESTAPI[entity.type] ?? ''
    if(!reqEntity) return <>Ups, no se de donde traer datos {entity.type}...</>

    return COMPONENTS[path]({...block.attributes, ...block.gridPosition, data: data, req: { path: reqEntity, params: entity.params}})
  }

  return (
    <main className="grid gap-10 p-4">
      <>{data && (data.blocks.map((block: any) => (
          <React.Fragment key={block.id}>
            {getComponent(block)}
            <br />
          </React.Fragment>
        ))
      )}</>
    </main>
  )
}
