import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import axios from 'axios'
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import Logo from "../Logo";

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    async function handleSignIn(e: FormEvent){
        e.preventDefault()

        await axios.post("/sessions", {
            email,
            password,
        })
        setIsUserSignedIn(true)
    }

    return (
        <div
            className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100"
        >
        <header className='flex flex-col items-center'>
            <Logo />
            <Heading size="lg" className='mt-2'>
            Ignite Lab
            </Heading>

            <Text size='lg' className='text-gray-400 mt-1'>
                Faça login e comece a usar!
            </Text>
        </header>

        <form onSubmit={handleSignIn} className="flex flex-col items-stretch mt-5 w-[90%] max-w-[400px] gap-4">
            { isUserSignedIn && <Text>Login realizado!</Text>}
            <label htmlFor='email' className='flex flex-col gap-3'>
            <Text className='font-semibold'>Endereço de e-mail:</Text>
            <TextInput.Root>
                <TextInput.Icon>
                <Envelope size={24}/>
                </TextInput.Icon>
                <TextInput.Input 
                    type="email" 
                    placeholder="johndoe@example.com" 
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </TextInput.Root>
            </label>

            <label htmlFor='password' className='flex flex-col gap-3'>
            <Text className='font-semibold'>Sua senha:</Text>
            <TextInput.Root>
                <TextInput.Icon>
                <Lock size={24}/>
                </TextInput.Icon>
                <TextInput.Input 
                    type="password" 
                    placeholder="************" 
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </TextInput.Root>
            </label>

            <label htmlFor="remember" className='flex items-center gap-2'>
            <Checkbox id="remember"/>
            <Text size="sm" className='text-gray-200'>
                Lembrar de mim por 30 dias
            </Text>
            </label>

            <Button type="submit" className='mt-4'>
                Entrar na plataforma
            </Button>
        </form>

        <footer className='flex flex-col items-center justify-center mt-4 gap-3'>
            <Text asChild size="sm">
            <a href="#" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
            </Text>
            <Text asChild size="sm">
            <a href="#" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
            </Text>
            </footer>
        </div>
    )
}