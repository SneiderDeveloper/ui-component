import {getBlockFetcher} from "@/services/blocks.service";
import {COMPONENTS} from "@/components/dynamicComponents";

export default async function Page() {
  const data = await getBlockFetcher('/api/ibuilder/v1/layouts/1')

  const getComponent = (path: string) => {
    return COMPONENTS[path]()
  }

  return (
    <main className="grid gap-10 p-4">
      <>{data && (
        <>
          {getComponent(data.blocks[0].component.systemName)}
          <pre>
            {JSON.stringify(data.blocks[0].attributes, null, 2)}
          </pre>
        </>
      )}</>
    </main>
  )
}
