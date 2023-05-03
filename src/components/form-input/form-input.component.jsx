import './form-input.styles.scss';


// OR as a separate object inputOptions
// then spreading it only within the input

// All of the input options then would have to be passed
// explicitly like so:
// inputOptions={{ required: true, name: 'someName', onChange: handleChange, type: 'text',}}


const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      { label && (
        <label
          className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;