import React, { memo, useRef, useState } from 'react';

import { useIntl } from '@edx/frontend-platform/i18n';
import { Form } from '@openedx/paragon';
import { useQuery } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';

import { getPublishersOptions } from './data/queries';
import messages from './PublisherField.messages';

const MIN_INPUT_LENGTH = 3;
const MAX_INPUT_LENGTH = 240;

function MaxLengthInput(props) {
  return <components.Input {...props} maxLength={MAX_INPUT_LENGTH} />;
}

const SELECT_COMPONENTS = { Input: MaxLengthInput };

function PublisherField({
  value, fieldErrors, onChange, onBlur,
}) {
  const { formatMessage } = useIntl();
  const [searchText, setSearchText] = useState('');

  const isSearchEnabled = searchText.length >= MIN_INPUT_LENGTH;

  const { data, isLoading } = useQuery({
    ...getPublishersOptions(searchText),
    enabled: isSearchEnabled,
  });

  const handleSearchDebounced = useRef(
    debounce((text) => setSearchText(text), 300),
  ).current;

  const handleInputChange = (inputText) => {
    handleSearchDebounced(inputText);
  };

  const handleChange = (selectedOption, actionMeta) => {
    let formattedValue = null;
    if (selectedOption) {
      formattedValue = actionMeta.action === 'create-option'
        ? `${selectedOption.value} ${formatMessage(messages.newSuffix)}`
        : selectedOption.value;
    }
    const newValue = actionMeta.action === 'clear'
      ? null
      : { value: formattedValue, label: selectedOption?.value || null };

    onChange(newValue);
  };

  const isValidNewOption = (inputValue, newValue, options) => {
    if (
      options.find(
        (option) => option.label.localeCompare(inputValue, undefined, {
          sensitivity: 'accent',
        }) === 0,
      )
    ) {
      return false;
    }
    return inputValue.length >= MIN_INPUT_LENGTH;
  };

  const formatCreateLabel = (inputValue) => inputValue;

  const formatOptionLabel = ({ label, __isNew__ }) => (__isNew__ ? (
    <span>
      <strong>{formatMessage(messages.labelNewPrefix)}</strong> {label}
    </span>
  ) : (
    label
  ));

  const getLoadingOrPromptMessage = ({ inputValue }) => {
    if (inputValue.length < MIN_INPUT_LENGTH) {
      const remaining = MIN_INPUT_LENGTH - inputValue.length;
      return formatMessage(messages.enterMoreChars, { count: remaining });
    }
    return formatMessage(messages.searching);
  };

  return (
    <Form.Group isInvalid={!!fieldErrors.publisher_name}>
      <Form.Label>{formatMessage(messages.labelPublisher)}</Form.Label>
      <CreatableSelect
        placeholder=""
        options={data || []}
        isLoading={!!searchText && isLoading}
        isValidNewOption={isValidNewOption}
        getNewOptionData={(inputValue, optionLabel) => ({
          value: inputValue,
          label: optionLabel,
          __isNew__: true,
        })}
        formatCreateLabel={formatCreateLabel}
        formatOptionLabel={formatOptionLabel}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onBlur={() => onBlur('publisher_name', value)}
        value={value}
        classNamePrefix="react-select"
        noOptionsMessage={getLoadingOrPromptMessage}
        loadingMessage={getLoadingOrPromptMessage}
        components={SELECT_COMPONENTS}
        isClearable
      />
      {fieldErrors.publisher_name && (
        <Form.Control.Feedback
          type="invalid"
          className="form-text-size"
          hasIcon={false}
        >
          {fieldErrors.publisher_name}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

PublisherField.propTypes = {
  value: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  fieldErrors: PropTypes.shape({
    publisher_name: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

PublisherField.defaultProps = {
  onBlur: () => null,
};

export default memo(PublisherField);
