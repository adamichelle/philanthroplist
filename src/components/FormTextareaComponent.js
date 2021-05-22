import React from 'react';
import { FieldWrapper } from '@progress/kendo-react-form'
import { TextArea } from '@progress/kendo-react-inputs';
import {
    Label,
    Error,
    Hint
} from "@progress/kendo-react-labels";

function FormTextareaComponent (fieldRenderProps) {
    const {
      validationMessage,
      touched,
      label,
      id,
      valid,
      hint,
      disabled,
      optional,
      ...others
    } = fieldRenderProps;
  
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : "";
    const errorId = showValidationMessage ? `${id}_error` : "";
  
    return (
      <FieldWrapper>
        <Label editorId={id} editorValid={valid} optional={optional}>
          {label}
        </Label>
        <TextArea
          valid={valid}
          id={id}
          disabled={disabled}
          ariaDescribedBy={`${hintId} ${errorId}`}
          {...others}
        />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>
    );
};

export default FormTextareaComponent;