import React, { useEffect } from 'react';
import TextEditor from './TextEditor';

const TextEditorControl = ({ name, control, defaultValue }) => {
  const { field, fieldState, formState, setValue } = control;

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [name, defaultValue, setValue]);

  const handleChange = (value) => {
    setValue(name, value);
  };

  return (
    <div>
      <TextEditor value={field.value} onChange={handleChange} />
      {fieldState.error && <span>{fieldState.error.message}</span>}
    </div>
  );
};

export default TextEditorControl;
