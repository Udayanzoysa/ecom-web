import React from 'react';

const CustomInput = (props) => {
    const { type, name, placeholder, classname,onChange} = props;
  return (
    <div>
        <input type={type}
               onChange={onChange}
            name={name} 
            placeholder={placeholder}
            className={"form-control ${classname}"} />
    </div>
  );
};

export default CustomInput;