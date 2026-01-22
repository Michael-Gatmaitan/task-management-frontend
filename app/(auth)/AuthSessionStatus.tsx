import type { ComponentProps } from "react";

interface StatusProp {
    status: string;
}

const AuthSessionStatus = ({ status, className, ...props }: StatusProp & ComponentProps<'div'>) => (
    <>
        {status && (
            <div
                className={`${className} font-medium text-sm text-green-600`}
                {...props}>
                {status}
            </div>
        )}
    </>
)

export default AuthSessionStatus
