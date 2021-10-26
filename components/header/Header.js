import Image from "next/image"
import HeaderItem from "../headerItem/HeaderItem"
function Header() {
    return (
        <header className="">
        <div>
            <HeaderItem/>
        </div>
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
