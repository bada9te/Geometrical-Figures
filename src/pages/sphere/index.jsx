import { useForm } from "react-hook-form";
import FormContainer from "../../components/ui/FormContainer.jsx";
import FormInputField from "../../components/ui/FormInputFIeld.jsx";
import FormSubmitButton from "../../components/ui/FormSubmitButton.jsx";
import SphereWithAxes from "../../components/view/Sphere.jsx";
import { useState } from "react";
import FormCalculationResults from "../../components/ui/FormCalcultaionResults.jsx";
import { sphereSurfaceArea, sphereVolume } from "../../utils/sphere.js";


export default function Sphere() {
  const [lines, setLines] = useState([]);
  const [radius, setRadius] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const surfaceArea = sphereSurfaceArea(data.RADIUS);
    const volume = sphereVolume(data.RADIUS);

    setRadius(data.RADIUS);

    setLines([`Surface area: ${surfaceArea}`, `Volume: ${volume}`]);
  };

  return (
    <div className="flex flex-col lg:flex-row  gap-0 w-screen h-full justify-center mt-20 overflow-hidden">
      <div className="w-full lg:w-[30%]">
        <FormContainer formTitle={"Calculations for the Sphere"} onSubmit={handleSubmit(onSubmit)}>
            <FormInputField 
                definition={"Radius"} 
                placeholder={"Radius value"} 
                inputProps={register("RADIUS", { 
                required: { value: true, message: "Radius is required" }, 
                min: { value: 0.1, message: "Min value must be 0.1" },
                valueAsNumber: true
                })} 
                error={errors.RADIUS}
            />
          <FormSubmitButton text={"Calculate"}/>
        </FormContainer>

        <FormCalculationResults lines={lines}/>
      </div>

      <div className="w-full lg:w-[60%] min-h-full relative overflow-hidden overflow-y-auto max-w-full" style={{ overflowX: 'hidden' }}>
        <SphereWithAxes radius={radius}/>
      </div>
    </div>
  );
}
