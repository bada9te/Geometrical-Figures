export default function FormInputField({ definition, placeholder, inputProps, error }) {
    return (
        <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">{definition}</legend>
            <input type="number" className="input w-full" placeholder={placeholder} {...inputProps}/>
            <p className="label text-red-500">{error && error.message}</p>
        </fieldset>
    );
}