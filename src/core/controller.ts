import { getLayout, getEntityData } from "@/core/service";
import {REQUESTAPI} from "@/constants/requestApi";
import {Block, BlockWithData} from "@/interfaces/block.interface";
import {COMPONENTS} from "@/components/dynamicComponents";
import React from "react";

export default async function CoreController(urlToGetData: string): Promise<BlockWithData[]> {
  const baseUrl = process.env.VERCEL_URL!
  const layout = await getLayout(`${baseUrl}/api/ibuilder/v1/layouts/1`)

  const dataPromises = layout.blocks.map(block => {
    return getInfoBlock(block, baseUrl)
  })

  // Wait for all promises to resolve
  return await Promise.all(dataPromises);
}


export const getInfoBlock = async (block: Block, baseUrl: string): Promise<BlockWithData> => {
  //Check if exist entity to request
  const entity = block.entity
  let reqEntity = REQUESTAPI[entity.type] ?? ''
  let mainEntityData = []

  if(reqEntity.length) {
    let params = entity.params
    if(!params) params = { filter: [], take: 12 }
    mainEntityData = await getEntityData(`${baseUrl}/${reqEntity}`, params)
  }

  return {
    ...block,
    mainEntityData
  }
}

export const getComponent = (block: BlockWithData) => {
  //Check if exist component
  const path = block?.component?.systemName || '';
  if(!COMPONENTS[path]) return COMPONENTS["undefined"]()

  return COMPONENTS[path](block)
}