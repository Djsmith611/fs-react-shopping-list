import Form from '../Form/Form.jsx';
import QuickList from '../QuickList/QuickList.jsx';
import "./Subheader.css"

function Subheader({ getItems, itemList}) {
    return(
        <div className="Subheader">
          <Form getItems={getItems} />
          <QuickList itemList={itemList}/>  
        </div>
    )
}

export default Subheader;