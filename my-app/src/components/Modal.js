function Modal(props) {
    return (
      <div className='modal'>
        <p>{props.text}</p>
        <button className='btn btn--alt' onClick={props.onClose}>
          Peruuta
        </button>
        <button className='btn' onClick={props.onClose}>
          Vahvista
        </button>
      </div>
    );
  }
  
  export default Modal;
  