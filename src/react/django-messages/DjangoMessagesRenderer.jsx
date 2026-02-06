import React from 'react';
import { Alert } from '@openedx/paragon';
import { CheckCircle, Info, WarningFilled } from '@openedx/paragon/icons';
import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';

import { DJANGO_MESSAGE_LEVEL_TO_PARAGON_VARIANT } from './constants';
import { getDjangoMessagesOptions } from './data/queries';

const PARAGON_VARIANT_TO_ICON = {
  info: Info,
  success: CheckCircle,
  warning: WarningFilled,
  danger: Info,
};

function DjangoMessagesRenderer({ tags }) {
  const {
    data: messages,
    isFetching,
    isError,
  } = useQuery({
    ...getDjangoMessagesOptions(),
    select: (data) => (tags.length
      ? data.filter((message) => message.tags.some((messageTag) => tags.includes(messageTag)))
      : data),
  });

  if (isFetching || isError || !messages) {
    return null;
  }

  return (
    <>
      {messages.map((message) => {
        const variant = DJANGO_MESSAGE_LEVEL_TO_PARAGON_VARIANT[message.level];
        const Icon = PARAGON_VARIANT_TO_ICON[variant] || null;

        return (
          <Alert variant={variant} icon={Icon}>
            {message.message}
          </Alert>
        );
      })}
    </>
  );
}

DjangoMessagesRenderer.defaultProps = {
  tags: [],
};

DjangoMessagesRenderer.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default DjangoMessagesRenderer;
