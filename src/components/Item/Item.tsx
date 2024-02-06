import React from "react";
import {BlockWithData} from "@/interfaces/block.interface";

export default async function List(data: BlockWithData) {
  return <pre>
    {JSON.stringify(data, null, 2)}
  </pre>
}
