export default function FormContainer({children, formTitle, onSubmit}) {
    return (
        <form className="card card-border bg-base-100 sm:w-80 md:w-full" onSubmit={onSubmit} noValidate>
            <div className="card-body">
                <h2 className="card-title">{formTitle}</h2>
                <p>Provide all required values to make sth happen</p>
                {
                    children
                }
            </div>
        </form>
    );
}