import Image from "next/image"
import HeaderItem from "../headerItem/HeaderItem";
import {
    HomeIcon, SearchIcon , CollectionIcon , UserIcon , LightningBoltIcon, BadgeCheckIcon
} from "@heroicons/react/outline"
function Header() {
    return (
        <header className="">
        <div>
            <HeaderItem title="HOME" Icon={HomeIcon}/>
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
