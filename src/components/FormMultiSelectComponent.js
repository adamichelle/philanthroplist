import React from 'react';
import { FieldWrapper } from '@progress/kendo-react-form'
import { MultiSelect } from '@progress/kendo-react-dropdowns';import {
    Label,
    Error,
    Hint
} from "@progress/kendo-react-labels";

function FormMultiSelectComponent (fieldRenderProps) {
    const {
      validationMessage,
      touched,
      label,
      id,
      valid,
      disabled,
      hint,
      wrapperStyle,
      ...others
    } = fieldRenderProps;
    const editorRef = React.useRef(null);
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : "";
    const errorId = showValidationMessage ? `${id}_error` : "";
    const labelId = label ? `${id}_label` : "";
  
    return (
      <FieldWrapper style={wrapperStyle}>
        <Label
          id={labelId}
          editorRef={editorRef}
          editorId={id}
          editorValid={valid}
          editorDisabled={disabled}
        >
          {label}
        </Label>
        <MultiSelect
          ariaLabelledBy={labelId}
          ariaDescribedBy={`${hintId} ${errorId}`}
          ref={editorRef}
          valid={valid}
          id={id}
          {...others}
        />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>
    );
};

export default FormMultiSelectComponent;