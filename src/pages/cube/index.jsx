import { useForm } from "react-hook-form";
import FormContainer from "../../components/ui/FormContainer.jsx";
import FormInputField from "../../components/ui/FormInputFIeld.jsx";
import FormSubmitButton from "../../components/ui/FormSubmitButton.jsx";
import CubeWithAxes from "../../components/view/Cube";
import { cubeSurfaceArea, cubeVolume } from "../../utils/cube.js";
import { useState } from "react";
import FormCalculationResults from "../../components/ui/FormCalcultaionResults.jsx";


export default function Cube() {
  const [lines, setLines] = useState([]);
  const [height, setHeight] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const surfaceArea = cubeSurfaceArea(data.HEIGHT);
    const volume = cubeVolume(data.HEIGHT);

    setHeight(data.HEIGHT);

    setLines([`Surface area: ${surfaceArea}`, `Volume: ${volume}`]);
  };

  return (
    <div className="flex flex-col lg:flex-row  gap-0 w-screen h-full justify-center mt-20 overflow-hidden">
      <div className="w-full lg:w-[30%]">
        <FormContainer formTitle={"Calculations for the Cube"} onSubmit={handleSubmit(onSubmit)}>
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
          <FormSubmitButton text={"Calculate"}/>
        </FormContainer>

        <FormCalculationResults lines={lines}/>
      </div>

      <div className="w-full lg:w-[60%] min-h-full relative overflow-hidden overflow-y-auto max-w-full" style={{ overflowX: 'hidden' }}>
        <CubeWithAxes height={height}/>
      </div>
    </div>
  );
}
