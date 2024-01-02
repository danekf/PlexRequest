import './requestNew.css';
import { useState, useEffect} from 'react';

const RequestNew = () => {
  const [state, setState] = useState({
    title: '',
    year: '',
    selector: '-',
  })

  const [confirmationMessage, setConfirmationMessage] = useState(null)

  const updateState = (event) => {    
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const submitForm = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: state.selector, 
        title: state.title,
        year:  state.year,
        status: 'incomplete',

      })
  };
  fetch('https://reqres.in/api/posts', requestOptions)
      .then(response => response.json())
      .then(data => {
        //reset to default values
        setState({
          title: '',
          year: '',
          selector: '-',
        })

        setConfirmationMessage(true)
      });
    
  }

  return (
    <div className="requestContainer">
      <h2>Request a new title</h2>
        <div className="dropdown">Movie or Show?</div>
            <select name='selector' id='selector' value={state.selector} onChange={(event) => {
              setConfirmationMessage(false);
              updateState(event);
            }}>
              <option value="-">-</option>
              <option value="Movie">Movie</option>
              <option value="Show">Show</option>
            </select> <br/>
        {state.selector !== '-' && 
          <form>
            <input type="text" value={state.title} title='Enter title' name='title' placeholder='Enter title' onChange={(event) => updateState(event)} required/> <br/>
            <input type='text' value={state.year} title='Enter year, helpful if there is more than one version.' name='year' placeholder= 'Enter year (optional)' onChange={(event) => updateState(event)}></input> <br/>
            <button onClick={event => submitForm(event)}>Submit Request</button>
          </form>
        }
        {confirmationMessage &&
          <div className='confirmationMessage'>Your request has been submitted. Please select from dropdown to request an additional title.</div>
        }
    </div>
  )
};

export default RequestNew;