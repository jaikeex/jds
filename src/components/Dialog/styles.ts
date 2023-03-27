import styled from '@emotion/styled';
import { Backdrop } from 'components/Backdrop';
import type { SheetProps } from 'components/Sheet';
import { Sheet } from 'components/Sheet';

export const DialogSheet = styled(Sheet, { label: 'dialog-sheet' })<SheetProps>((props) => ({
  padding: props.theme.spacing[8],
  overFlow: 'auto'
}));

export const DialogBackdrop = styled(Backdrop, { label: 'dialog-bd' })({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});
