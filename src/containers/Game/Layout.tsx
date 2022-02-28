import React, {ReactElement, ReactNode} from "react";

interface PropsWithChildren {
    children: ReactNode;
}

export default function Layout(props: PropsWithChildren): ReactElement {
    const { children } = props;
    return (
        <div className="relative flex-1 flex flex-row-reverse tablet:flex-col w-full pr-20 tablet:pr-0">
            {children}
        </div>
    );
}