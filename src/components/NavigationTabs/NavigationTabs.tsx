'use client'

import { Tabs, Tab } from '@nextui-org/tabs';
import { Card, CardBody } from '@nextui-org/card'

export const NavigationTabs = ({
    tabs=[],
    isDisabled,
    disabledKeys,
    size='md',
    radius='md',
    color,
    variant,
    // No probado
    fullWidth,
    defaultSelectedKey,
    disableAnimation,
}: {
    tabs: Array<{
        id: string
        label: string
        content: string
        href?: string
    }>;
    isDisabled?: boolean;
    disabledKeys?: Array<string | number>;
    size?: 'sm' | 'md' | 'lg';
    radius?: 'full' | 'lg' | 'md' | 'sm' | 'none';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    variant?: 'solid' | 'underlined' | 'bordered' | 'light';
    // No probado
    fullWidth?: boolean;
    defaultSelectedKey?: string | number;
    disableAnimation?: boolean;
}) => {
    return (
        <div className='flex w-full flex-col'>
        <Tabs 
            aria-label='Dynamic tabs' 
            items={ tabs } 
            isDisabled={ isDisabled  }
            disabledKeys={ disabledKeys }
            size={ size }
            radius={ radius }
            color={ color }
            variant={variant}
            // No probado
            fullWidth={ fullWidth }
            defaultSelectedKey={ defaultSelectedKey }
            disableAnimation={ disableAnimation }>
            {tab => (
                <Tab 
                    key={ tab.id } 
                    title={ tab.label }
                >
                    <Card>
                        <CardBody>
                            {tab.content}
                        </CardBody>
                    </Card>  
                </Tab>
            )}
        </Tabs>
        </div>  
  )
}
