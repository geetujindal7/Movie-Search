// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root:{
          textTransform: "Capitalize",
          fontSize: "16px",
          width: "8rem",
          color: "black !important",
          borderRadius: "8px",
          border: "1px solid white",
          backgroundColor: "white !important"
        }
      }
    }
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Set your desired font family
    h1: {
      fontSize: '2rem', // Customize heading 1 font size
      fontWeight: '600', // Customize heading 1 font weight
    },
    h2: {
      fontSize: '22px', // Customize heading 2 font size
      fontWeight: '600',
      marginTop:"8px",
      color: "#fff",
    },
    h3: {
      fontSize: '18px', // Customize heading 2 font size
      color: "#b5b5b5",
    },
    h4: {
      fontSize: '18px', // Customize heading 2 font size
      color: "#fff",
    },

    h5: {
      fontSize: '1.5rem', // Customize heading 2 font size
      color: "#fff",
    },
   
    // Customize other typography variants as needed
  },
  icon: {
    fontSize: '22px',
  },
  
});

export default theme;
