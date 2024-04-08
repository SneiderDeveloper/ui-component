'use client'

import { ButtonGroup as ButtonGroupContainer} from "@nextui-org/button";
import { Button } from '@/components/Button/Button'

export const ButtonGroup = ({
    buttonList,
})=>{
    return (
        <ButtonGroupContainer>
            {
            buttonList.map(({attributes, children}) => (
                <Button
                 attributes={attributes}
                >
                    {children}
                </Button>
            ))
            }
        </ButtonGroupContainer>
    )
}