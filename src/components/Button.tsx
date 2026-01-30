import Link from "next/link";



export const Button = ({
    href,
    text,

}: Readonly<{
    href: string;
    text: string;
}>) => {
    return (
        <Link
            href={href
            }   
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-gray-500 transition"
        >
            {text}
        </Link>
    );
}
