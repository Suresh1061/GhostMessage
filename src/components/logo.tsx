import Image from "next/image"
import logo from "@/assets/ghostmessage.png"
import Link from "next/link"

type LogoProps = {
    className?: string
}

const Logo = ({ className = "w-48" }: LogoProps) => {
    return (
        <Link href={"/"}>
            <Image
                src={logo}
                alt="GhostMessage Logo"
                width={500}
                height={500}
                className={`${className}`}
                priority={true}
            />
        </Link>
    )
}

export default Logo