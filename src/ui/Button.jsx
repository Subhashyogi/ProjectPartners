import React from "react";
import classNames from "classnames";

export function Button({ children, className, size = "md", ...props }) {
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={classNames(
                "bg-[#0e172b] hover:bg-[#0e172b] text-white font-semibold rounded-xl shadow transition duration-300",
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
