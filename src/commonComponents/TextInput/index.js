import Form from 'react-bootstrap/Form';
import './styles.css';
const TextInput =({label='', type, placeholder, state,stateKey})=>{
    return (
        <div className='input_container'>
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} onChange={(e)=>state((pre)=>({...pre, [stateKey]:e.target.value}))}/>
        </div>
    )
}

export default TextInput;