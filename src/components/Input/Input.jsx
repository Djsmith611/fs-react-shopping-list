import "./Input.css";

function Input({input, index}){
    return(
        <div className="Input" key={index}>
            <h2 className="Input-head">{input.head && input.head}</h2>
            <input 
                className={input.class} 
                type={input.type} 
                value={input.value} 
                onChange={input.onChange ? input.onChange : null}
                placeholder={input.placeholder}
            />
        </div>
    )
}

export default Input;