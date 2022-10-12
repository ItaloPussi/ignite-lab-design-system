import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps){
    return (
        <CheckboxPrimitive.Root 
            className="w-6 h-6 p-[2px] bg-gray-800 rounded"
        >
            <CheckboxPrimitive.Indicator asChild>
                <Check size={20} weight="bold" className='text-cyan-500' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}