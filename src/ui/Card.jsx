import React from "react";
import classNames from "classnames";

export function Card({ children, className, onClick, ...props }) {
    return (
        <div
            onClick={onClick}
            {...props}
            className={classNames(
                "bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200",
                className
            )}
        >
            {children}
        </div>
    );
}

export function CardContent({ children, className }) {
    return (
        <div className={classNames("p-6", className)}>
            {children}
        </div>
    );
}
