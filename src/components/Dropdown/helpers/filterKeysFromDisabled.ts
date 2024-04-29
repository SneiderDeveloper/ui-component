import { extractElements } from './extractElements'
import { Section } from '../interfaces/dropdown.interface'

export const filterKeysFromDisabled = (sections: Section[]) => {
  const disabledElementKeys: any = extractElements(sections)
    .filter(item => item?.disabled === true)
    .map(item => String(item?.id))

  return disabledElementKeys
}