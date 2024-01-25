import { Section, Item } from "../interfaces/dropdown.interface"

export const extractElements = (sections: Section[]): Item[] => {
    const items: Item[] = sections
        .map((section: Section) => section?.items || [])
        .flat()
    return items || []
}
