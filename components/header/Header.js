import Image from "next/image"
function Header() {
    return (
        <header className="">
            <Image
                 className="object-contain"
                src="https://links.papareact.com/ua6"
                height={100}
                width={200}
            />
        </header>
    )
}

export default Header
