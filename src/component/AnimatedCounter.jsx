import React, { useEffect, useState } from "react";

function AnimatedCounter({ target, duration = 2000, Icon, ...props }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const stepTime = 50;
        const steps = duration / stepTime;
        const increment = target / steps;

        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(counter);
            } else {
                setCount(Math.ceil(start));
            }
        }, stepTime);

        return () => clearInterval(counter);
    }, [target, duration]);

    // Format number with commas
    const formattedCount = count.toLocaleString();

    return (
        <div className="flex flex-col items-center text-purple-600" {...props}>
            {Icon && <Icon size={48} className="mb-2"  />}
            <div className="text-4xl font-bold">{formattedCount}</div>
        </div>
    );
}

export default AnimatedCounter;
