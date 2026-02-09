import { useIntl } from '@edx/frontend-platform/i18n';
import { Form } from '@openedx/paragon';
import PropTypes from 'prop-types';
import { memo, useCallback, useState } from 'react';

import messages from './PhoneNumberField.messages';

export const UA_PHONE_MASK = "+38\0 (00) 000-00-00";

const PhoneNumberField = ({
  value,
  fieldErrors,
  mask,
  onChange,
  onBlur,
  onClick,
}) => {
  const { formatMessage } = useIntl();
  const [unmasked, setUnmasked] = useState(null);

  const handleMaskValue = useCallback((value) => {
    setUnmasked(value);
    onChange(value);
  });

  const handleOnBlur = () => {
    onBlur(unmasked);
  };

  return (
    <Form.Group isInvalid={!!fieldErrors.phoneNumber}>
      <Form.Label>{formatMessage(messages.labelPhoneNumber)}</Form.Label>
      <Form.Control
        name="phone_number"
        value={value}
        aria-invalid={!!fieldErrors.phoneNumber}
        inputMask={mask}
        unmask
        lazy={false}
        placeholderChar={'_'}
        onAccept={handleMaskValue}
        onBlur={handleOnBlur}
        onClick={onClick}
      />
      {fieldErrors.phoneNumber && (
        <Form.Control.Feedback
          id="phone-number-error"
          type="invalid"
          className="form-text-size"
          hasIcon={false}
        >
          {fieldErrors.phoneNumber}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

PhoneNumberField.propTypes = {
  value: PropTypes.string.isRequired,
  fieldErrors: PropTypes.shape({
    phoneNumber: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  mask: PropTypes.string,
};

PhoneNumberField.defaultProps = {
  onBlur: () => null,
  onClick: () => null,
  mask: UA_PHONE_MASK,
};

export default memo(PhoneNumberField);
