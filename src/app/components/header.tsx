import Image from "next/image";
import Breadcrumbs from "./common/breadcrumbs";


export default function Header() {
    return (
        <main className="header flex justify-start items-center space-x-1 border-b-2">
            <div className="mt-3 mr-2 mb-4 ml-4 p-1 border-2 border-gray-300 rounded-md">
                <Image
                    src="/query-stats.svg"
                    alt="Tasks Dashboard"
                    width={30}
                    height={30}
                />
            </div>
            <Breadcrumbs />
        </main>
    )
}