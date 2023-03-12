import { createStyles } from './useCreateStyles';

export const useGlobalStyles = () => {
  createStyles({
    '@keyframes slide-in-right': {
      from: { transform: 'translateX(150%)' },
      to: { transform: 'translateY(150%' }
    }
  });
};
