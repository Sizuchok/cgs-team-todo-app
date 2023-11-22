import MUISwitch, { SwitchProps } from '@mui/material/Switch/Switch';
import { styled } from '@mui/material/styles';
import { SWITCH_COLORS } from '../../../theme';

export const Switch = styled((props: SwitchProps) => (
  <MUISwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: `${SWITCH_COLORS.white}`,
      '& + .MuiSwitch-track': {
        backgroundColor:
          theme.palette.mode === 'dark'
            ? `${SWITCH_COLORS.enabledBackgroundDark}`
            : `${SWITCH_COLORS.enabledbackgroundLight}`,
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: `${SWITCH_COLORS.focus}`,
      border: `6px solid ${SWITCH_COLORS.white}`
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? `${SWITCH_COLORS.disabledLight}`
          : `${SWITCH_COLORS.disabledDark}`
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor:
      theme.palette.mode === 'light'
        ? `${SWITCH_COLORS.backgroundLight}`
        : `${SWITCH_COLORS.backgroundDark}`,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));
