// Component to create an input field
function Input (props){
    return (
        <input className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
        {...props} // Spread operator to pass the props to the input element
        ></input>
    )
}

export default Input;