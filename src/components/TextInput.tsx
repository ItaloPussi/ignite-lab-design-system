import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
    children: ReactNode
}

function TextInputRoot({children}: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 py-3 px-4 rounded w-full h-12 bg-gray-800  focus-within:ring-2 ring-cyan-300'>
            {children}
        </div>
    )
}

TextInputRoot.displayName = "TextInput.Root"

export interface TextInputIconProps {
    children: ReactNode
}

function TextInputIcon({children}: TextInputIconProps){
    return (
        <Slot className="w-6 h-6 text-gray-400">
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = "TextInput.Icon"

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function TextInputInput({...rest}: TextInputInputProps){
    return (
        <input 
            className='bg-transparent outline-none flex-1 text-sx text-gray-100 placeholder:text-gray-400'
            {...rest}
        />
    )
}

TextInputInput.displayName = "TextInput.Input"

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}