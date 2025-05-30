import { useEffect } from "react";

export default function LiveChat() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://embed.tawk.to/68399a3ec59fde190c0c949f/1isgg51qb";
        script.async = true;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");
        document.body.appendChild(script);

        return () => {
            // Optional cleanup: remove the script if needed on unmount
            document.body.removeChild(script);
        };
    }, []);

    return null;
}
