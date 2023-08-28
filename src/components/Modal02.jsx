import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Themes'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Divider, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import Switch from '@mui/material/Switch';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 640,
  height: 589,
  bgcolor: 'background.paper',
  borderRadius: 1.3,
};

const btn = {
  borderRadius: 50,
  fontFamily: 'Work Sans',
  fontSize: 14,
  fontWeight: 400,
};

const btnStyle = {
  border: 1,
  borderColor: '#666666',
};

const addBtn = {
  fontFamily: 'Work Sans',
  fontSize: 14,
  fontWeight: 400,
  color: '#007868',
};

const textTitle = {
  color: '#131313',
  fontFamily: 'Work Sans',
  pt: 2,
  pl: 2,
  pb: 1,
  fontWeight: 500,
};

const text = {
  color: '#131313',
  fontFamily: 'Work Sans',
  fontSize: 13,
  mb: 0.4
};

const textBold = {
  color: '#131313',
  fontFamily: 'Work Sans',
  fontSize: 14,
  fontWeight: 500,
};

const pHolder = {
  "label": { color: "blue" },
  input: {
    "&::placeholder": {
      fontFamily: 'Work Sans',
      color: "#666666",
      fontSize: 14
    },
    fontFamily: 'Work Sans',
  },
};

const swch = {
  ml: 3,
  color: "secondary"
};

const asterisco = {
  color: '#F32465',
  fontFamily: 'Work Sans',
  fontSize: 14,
  fontWeight: 400,
};

const sBar = {
  overflowY: "scroll", 
  mr: 1, 
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    width: '0.4em',
  },
  '&::-webkit-scrollbar-track': {
    background: "#D9D9D9",
    borderRadius: '8px',
    height: 10
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555'
  },
};

export default function Modal2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={handleOpen} variant='contained' color='error'>Abrir modal 2</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}
          >

            <Box display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ m: 1 }}
            >
              <Box>
                <Typography id="modal-modal-title" component="h5" sx={textTitle}>
                  Configuración de atributos
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <ClearIcon size='large' sx={{ stroke: "#ffffff", strokeWidth: 0.5, mr: 2, fontSize: '29px' }} />
                </IconButton>
              </Box>
            </Box>
            <Divider sx={{ mb: 2 }} />

            <Box sx={sBar}>
              <Box
                sx={{
                  width: 560,
                  ml: 4.5,
                  mb: 2,
                  mt: 2.5,
                }}
              >
                <Box display="flex">
                  <Box sx={[asterisco, { mr: 0.4 }]}>*</Box><Typography id='atribute-name' sx={text}> Nombre del atributo</Typography>
                </Box>
                <TextField fullWidth placeholder='Escribe un nombre' id="fullWidth1" size='small' sx={pHolder} />
              </Box>

              <Box
                sx={{
                  width: 560,
                  ml: 4.5,
                  mb: 2.5,
                }}
              >
                <Typography id='atribute-description' sx={text}>Descripción del atributo</Typography>
                <TextField fullWidth placeholder='Escribe una descripción' id="fullWidth2" size='small' sx={pHolder} />
              </Box>

              <Box display="flex">
                <Box sx={[asterisco, { ml: 4.5, mr: 0.4 }]}>*</Box>
                <Typography id='state' sx={[text, { mb: 0.3 }]}> Estado</Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{ mb: 4 }}
              >
                <Switch id="switch" sx={swch} color='lblue' />
                <Typography sx={addBtn}>Activo</Typography>
              </Box>
              <Box
                display='flex'
              >
                <Box sx={[asterisco, { ml: 5, mr: 0.3 }]}>*</Box><Typography id='variant' sx={[textBold, { mr: 12 }]}> Variante</Typography>
                <Typography id='description' sx={textBold}>Descripción</Typography>
              </Box>

              <Divider sx={{ mx: 4, my: 1 }} />
              <Box >
                <TextField placeholder='Nombre' id="variant-name" size='small' sx={[pHolder, { width: 150, ml: 5 }]} />
                <TextField id="variant-description" size='small' sx={[pHolder, { width: 350, ml: 2 }]} />
              </Box>
              <Divider sx={{ mx: 4, mt: 1, mb: 0.8 }} />
              <Button startIcon={<AddIcon sx={{ stroke: "#ffffff", strokeWidth: 0.5 }} />} sx={[addBtn, { ml: 4, p: 0, mb:2 }]}>Añadir nueva variante</Button>

            </Box>
            <Divider sx={{ mt: 3.5 }} />
            <Box
              display="flex"
              justifyContent="end"
              sx={{ mt: 2 }}
            >
              <Button variant='contained' disableElevation sx={[btn, btnStyle]} color='white'>
                Cancelar
              </Button>
              <Button variant='contained' disableElevation sx={[btn, { mr: 3, ml: 1.5 }]} color='lblue'>
                Guardar
              </Button>
            </Box>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}