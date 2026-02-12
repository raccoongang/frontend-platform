import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  labelPublisher: {
    id: 'publisherField.label.publisher',
    defaultMessage: 'Publisher',
    description: 'Label for the Publisher input field',
  },
  newSuffix: {
    id: 'publisherField.text.newSuffix',
    defaultMessage: '(new)',
    description:
      'Suffix text appended to the value when a user creates a new publisher option',
  },
  labelNewPrefix: {
    id: 'publisherField.label.newPrefix',
    defaultMessage: 'New:',
    description:
      'Prefix label displayed in the dropdown menu for a newly created option',
  },
  enterMoreChars: {
    id: 'publisherField.message.enterMoreChars',
    defaultMessage:
      'Please enter {count} or more {count, plural, one {letter} other {letters}}',
    description:
      'Validation message asking the user to type more characters to search',
  },
  searching: {
    id: 'publisherField.message.searching',
    defaultMessage: 'Searching...',
    description: 'Text displayed while searching options',
  },
});

export default messages;
