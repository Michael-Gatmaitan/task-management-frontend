'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen">
            <Navigation user={user} />

            <main className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">{children}</main>
        </div>
    )
}

export default AppLayout
