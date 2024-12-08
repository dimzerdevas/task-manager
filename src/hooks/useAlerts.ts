import { useSnackbar } from 'notistack';

export const useAlerts = () => {
  const { enqueueSnackbar } = useSnackbar();

  return {
    successAlert: (message: string) =>
      enqueueSnackbar(message, {
        variant: 'success',
        autoHideDuration: 5000,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      }),
    errorAlert: (message: string) =>
      enqueueSnackbar(message, {
        variant: 'error',
        autoHideDuration: 5000,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      }),
  };
};
