interface DynamicsKeys {
  [key: string]: string
}

const phpVersion = 'version1'
const api = 'api/'

export const getApiVersion = (version: string): DynamicsKeys => {
  const apiVersion: DynamicsKeys = {
    'Iblog': `${api}iblog/v1`
  }

  //Agregar un switch si es necesario

  return apiVersion;
}

const apiVersion = getApiVersion(phpVersion)

export const REQUESTAPI: DynamicsKeys = {
  "Modules\\Iblog\\Repositories\\PostRepository": `${apiVersion.Iblog}/posts`
}