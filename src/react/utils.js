import { getConfig, getPath } from '@edx/frontend-platform';

export const buildLmsUrl = (url) => `${getConfig().LMS_BASE_URL}${url}`;
export const buildCmsUrl = (url) => `${getConfig().STUDIO_BASE_URL}${url}`;

export const isApiNotFound = (error) => (
  error?.customAttributes?.httpErrorStatus === 404
  || error?.response?.status === 404
);

export const redirectToNotFound = () => {
  const pathname = getPath(getConfig().PUBLIC_PATH);
  const base = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const target = `${base}/notfound`;
  if (window.location.pathname !== target) {
    window.location.assign(target);
  }
};

export const getExtendedProfileField = (
  extendedProfile,
  fieldName,
  defaultValue = null,
) => extendedProfile?.find((item) => item.fieldName === fieldName)?.fieldValue
  ?? defaultValue;
