
export default function SignUpInput(props) {
    return (
        <input 
        type={props.type}
        className="block border border-neutral-300 w-full p-3 rounded mb-4"
        name={props.name}
        placeholder={props.placeholder} />
    )
}