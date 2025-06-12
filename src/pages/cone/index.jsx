import ConeWithAxes from "../../components/view/Cone";
import CubeWithAxes from "../../components/view/Cube";
import CuboidWithAxes from "../../components/view/Cuboid.jsx";
import SphereWithAxes from "../../components/view/Sphere.jsx";

export default function Cone() {
  return (
    <div className="flex flex-col lg:flex-row  gap-0 w-screen h-full justify-center mt-20 overflow-hidden">
      <div className="w-full lg:w-[30%] min-h-[400px] bg-green-950" />

      <div className="w-full lg:w-[60%] min-h-full relative overflow-hidden overflow-y-auto max-w-full" style={{ overflowX: 'hidden' }}>
        <SphereWithAxes />
      </div>
    </div>
  );
}
