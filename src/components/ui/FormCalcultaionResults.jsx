export default function FormCalculationResults({ lines }) {
    return (
        <div className="mockup-code w-full">
            {
                lines.length == 0 && <pre data-prefix="$"><code>Waiting for form completion...</code></pre>
            }
            {
                lines.map((line, index) => {
                    return (
                        <pre key={index} data-prefix="$"><code>{line}</code></pre>
                    );
                })
            }
        </div>
    );
}