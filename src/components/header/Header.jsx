import HeaderCube from "@/assets/figures/header_cube.jpg";

export default function Header() {
    return (
        <div className="fixed top-0 left-0 w-full flex items-center justify-start bg-black p-5 shadow-xl gap-2 z-50">
            <div className="flex flex-row gap-2 items-center justify-center">
                <img src={HeaderCube} alt="header-logo" className="w-10 h-10"/>
                <span className="text-2xl font-bold">Geometrical Figures</span>
            </div>
        </div>
    );
}