/** biome-ignore-all assist/source/organizeImports: <explanation> */
'use client'

import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { useAuth } from '@/hooks/auth'
import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'

const PasswordReset = () => {
    const searchParams = useSearchParams()

    const { resetPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState({
        email: [],
        password: [],
        password_confirmation: []
    });
    const [status, setStatus] = useState(null)

    const submitForm = (event: FormEvent) => {
        event.preventDefault()

        resetPassword({
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
            setStatus,
        })
    }

    useEffect(() => {
        const s = searchParams.get('email');
        if (s) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setEmail(s);
        }
    }, [searchParams])

    return (
        <>
            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />

            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div>
                    <Label className="text-black" htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="block mt-1 w-full"
                        // className="text-black"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError messages={errors.email} className="mt-2" />
                </div>

                {/* Password */}
                <div className="mt-4">
                    <Label
                        className="text-black"
                        htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                        required
                    />

                    <InputError
                        messages={errors.password}
                        className="mt-2"
                    />
                </div>

                {/* Confirm Password */}
                <div className="mt-4">
                    <Label className="text-black" htmlFor="passwordConfirmation">
                        Confirm Password
                    </Label>

                    <Input
                        id="passwordConfirmation"
                        type="password"
                        value={passwordConfirmation}
                        className="block mt-1 w-full"
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setPasswordConfirmation(event.target.value)
                        }
                        required
                    />

                    <InputError
                        messages={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="bg-blue-500">Reset Password</Button>
                </div>
            </form>
        </>
    )
}

export default PasswordReset
