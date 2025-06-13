export default function FormSubmitButton({text}) {
    return (
        <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">{text}</button>
    );
}