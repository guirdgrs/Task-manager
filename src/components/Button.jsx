function Button (props){
    return <button 
        {...props}
        className="bg-slate-400 p-2 rounded-md text-white">
        {props.children}
        {/* Using the children prop to render the icon inside the button */}
    </button>
}

export default Button;