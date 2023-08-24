import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    cancel: {
      light: '#757ce8',
      main: '#fff',
      dark: '#ce93d8',
      contrastText: '#131313',
    },
    normal: {
      light: '#4fc3f7',
      main: '#00A692',
      dark: '#388e3c',
      contrastText: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    }
  },

})

export default theme