import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    white: {
      //light: '#757ce8',
      main: '#fff',
      dark: '#afafaf',
      contrastText: '#131313',
    },
    lblue: {
      //light: '#4fc3f7',
      main: '#00A692',
      dark: '#007868',
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
    },
    
  }
})

export default theme