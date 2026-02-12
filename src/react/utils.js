import { getConfig } from '@edx/frontend-platform';

export const buildLmsUrl = (url) => `${getConfig().LMS_BASE_URL}${url}`;
export const buildCmsUrl = (url) => `${getConfig().STUDIO_BASE_URL}${url}`;

export const getExtendedProfileField = (
  extendedProfile,
  fieldName,
  defaultValue = null,
) => extendedProfile?.find((item) => item.fieldName === fieldName)?.fieldValue
  ?? defaultValue;
