import Image from "next/image";

const Header = () => {
    return(
    <header className="flex items-center justify-between px-4 py-6">
        <Image src="/logo.png" alt="Aparatus Logo"/>


    </header>)
}

export default Header;