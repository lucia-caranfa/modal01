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
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "5px"
        },
        "*::-webkit-scrollbar-track": {
          background: "#E4EFEF"
        },
        "*::-webkit-scrollbar-thumb": {
          background: "#1D388F61",
          borderRadius: "2px"
        }
      }
    }
  }

})

export default theme