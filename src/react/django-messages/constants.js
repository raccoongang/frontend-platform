export const DJANGO_INFO_LEVEL = 20;
export const DJANGO_SUCCESS_LEVEL = 25;
export const DJANGO_WARNING_LEVEL = 30;
export const DJANGO_ERROR_LEVEL = 40;

export const DJANGO_MESSAGE_LEVEL_TO_PARAGON_VARIANT = {
  [DJANGO_INFO_LEVEL]: 'info',
  [DJANGO_SUCCESS_LEVEL]: 'success',
  [DJANGO_WARNING_LEVEL]: 'warning',
  [DJANGO_ERROR_LEVEL]: 'danger',
};
