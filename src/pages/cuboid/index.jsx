import { useForm } from "react-hook-form";
import FormContainer from "../../components/ui/FormContainer.jsx";
import FormInputField from "../../components/ui/FormInputFIeld.jsx";
import FormSubmitButton from "../../components/ui/FormSubmitButton.jsx";
import CuboidWithAxes from "../../components/view/Cuboid.jsx";
import { cuboidSurfaceArea, cuboidVolume } from "../../utils/cuboid.js";
import FormCalculationResults from "../../components/ui/FormCalcultaionResults.jsx";
import { useState } from "react";


export default function Cuboid() {
  const [lines, setLines] = useState([]);
  const [sizes, setSizes] = useState([1.2, 0.8, 1.6]); // width, height, depth

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const surfaceArea = cuboidSurfaceArea(data.DEPTH, data.WIDTH, data.HEIGHT);
    const volume = cuboidVolume(data.DEPTH, data.WIDTH, data.HEIGHT);

    setSizes([data.WIDTH, data.HEIGHT, data.DEPTH]);

    setLines([`Surface area: ${surfaceArea}`, `Volume: ${volume}`]);
  };

  return (
    <div className="flex flex-col lg:flex-row  gap-0 w-screen h-full justify-center mt-20 overflow-hidden">
      <div className="w-full lg:w-[30%]">
        <FormContainer formTitle={"Calculations for the Cuboid"} onSubmit={handleSubmit(onSubmit)}>
          <FormInputField 
            definition={"Height"} 
            placeholder={"Height value"} 
            inputProps={register("HEIGHT", { 
              required: { value: true, message: "Height is required" },
              min: { value: 0.1, message: "Min value must be 0.1" },
              valueAsNumber: true
            })} 
            error={errors.HEIGHT}
          />
          <FormInputField 
            definition={"Width"} 
            placeholder={"Width value"} 
            inputProps={register("WIDTH", { 
              required: { value: true, message: "Width is required" },
              min: { value: 0.1, message: "Min value must be 0.1" },
              valueAsNumber: true
            })} 
            error={errors.WIDTH}
          />
          <FormInputField 
            definition={"Depth"} 
            placeholder={"Depth value"} 
            inputProps={register("DEPTH", { 
              required: { value: true, message: "Depth is required" },
              min: { value: 0.1, message: "Min value must be 0.1" },
              valueAsNumber: true
            })} 
            error={errors.DEPTH}
          />
          <FormSubmitButton text={"Calculate"}/>
        </FormContainer>

        <FormCalculationResults lines={lines}/>
      </div>

      <div className="w-full lg:w-[60%] min-h-full relative overflow-hidden overflow-y-auto max-w-full" style={{ overflowX: 'hidden' }}>
        <CuboidWithAxes cuboidSize={sizes}/>
      </div>
    </div>
  );
}
