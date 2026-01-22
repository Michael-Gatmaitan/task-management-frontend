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

            <main className="px-16 py-14">{children}</main>
        </div>
    )
}

export default AppLayout
