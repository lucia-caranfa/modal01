/*import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ m: 1, width: '560px', height: '4px' }
      }
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Escribe un nombre" />
    </Box>
  );
}


import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';

const pHolder = {
    "label": { color: "blue" },
    input: {
        "&::placeholder": { fontFamily: 'Work Sans',
        color: "#666666" },
    },
}

export default function Input() {
    return (
            <Box
                sx={{
                    width: 560,
                    maxWidth: '100%',
                }}
            >
                <Switch/>
                <TextField fullWidth placeholder='Escribe un nombre' id="fullWidth" size='small' sx={pHolder} />
            </Box>
    );
}
*/