import ConeImg from "@/assets/figures/cone.jpg";
import CubeImg from "@/assets/figures/cube.jpg";
import CuboidImg from "@/assets/figures/cuboid.jpg";
import SphereImg from "@/assets/figures/sphere.jpg";
import FigureCard from "../components/figure-card/FigureCard";
import Header from "../components/header/Header";


const possibleFigures = [
    {
        title: "Cone",
        description: "Calculate basic stuff for the cone",
        bgSrc: ConeImg,
    },
    {
        title: "Cube",
        description: "Calculate basic stuff for the cube",
        bgSrc: CubeImg,
    },
    {
        title: "Cuboid",
        description: "Calculate basic stuff for the cuboid",
        bgSrc: CuboidImg,
    },
    {
        title: "Sphere",
        description: "Calculate basic stuff for the sphere",
        bgSrc: SphereImg,
    }
];


export default function Main() {
    return (
        <div className="flex flex-row flex-wrap gap-4 w-full h-full justify-center py-16 pt-32">
            <Header/>
            {
                possibleFigures.map((f, index) => {
                    return (
                        <FigureCard key={index} {...f} />
                    );
                })
            }
        </div>
    );
}