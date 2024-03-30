import "./QuickList.css"
function QuickList({itemList}) {
    return(
        <div className="QuickList">
            <h2 className="QuickList-head">Quick View</h2>
            <ul>
               {
                itemList.map((item, index) => (
                    <li className="QuickList-item" key={index}>
                        <p>{item.name}</p>
                        
                        <span className={item.bought ? "bought": "not-bought"}> {item.bought ? "Bought": "Not Bought"}</span>
                    </li>
                ))
                } 
            </ul>
            
        </div>
    )
}

export default QuickList;