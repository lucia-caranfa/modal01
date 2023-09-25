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

/*import React from 'react';
import { Input } from '@mui/material';
import { useState } from 'react';

const pokemonsInitialState = [
  {
    name: "pika"
  },
  {
    name: "meaw"
  }
]

export default function Inputs() {

  const [pokemons, setPokemons] = useState(pokemonsInitialState)

  const addNewPokemon = () => {
    const newPokemon = { name: "" }
    setPokemons([...pokemons, newPokemon]);
  };

  const removePokemon = (index) => {
    const updatedPokemons = pokemons.filter((pokemon, pokemonIndex) => pokemonIndex !== index);
    setPokemons(updatedPokemons);
    console.log(updatedPokemons)
  };

  const onPokemonNameChange = (e, index) => {
    const duplicatedPokemonsArr = [...pokemons] // duplicamos el array
    duplicatedPokemonsArr[index].name === e.target.value
    setPokemons(duplicatedPokemonsArr)
  }

  console.log(pokemons)

  return (
    <>
      POKEMONS:
      {pokemons.map((pokemon, index) => {
        return (
          <div key={index}>
            <Input
              value={pokemon.name}
              onChange={(e) => onPokemonNameChange(e, index)}
            />
            <button
              onClick={() => removePokemon(index)}
            >
              Borrar
            </button>
          </div>
        )
      })}
      <Input />
      <button
        onClick={addNewPokemon}
      >
        Agregar
      </button>

    </>
  );
}*/





import React, { useState } from 'react';
import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from "@mui/material";

const pokemonsInitialState = [
  {
    id: "# 74",
    name: "pika",
    power: "Eléctrico"
  },
  {
    id: "# 251",
    name: "meaw",
    power: "Psíquico"
  }
];

export default function Inputs() {
  const [pokemons, setPokemons] = useState({
    id: "",
    name: "",
    power: ""
  });

  const [pokemonList, setPokemonList] = useState(pokemonsInitialState);
  const [editingIndex, setEditingIndex] = useState(-1);

  const addNewPokemon = () => {
    if (pokemons.id && pokemons.name && pokemons.power) {
      if (editingIndex === -1) {
        setPokemonList([...pokemonList, pokemons]);
      } else {
        const updatedPokemons = [...pokemonList];
        updatedPokemons[editingIndex] = pokemons;
        setPokemonList(updatedPokemons);
        setEditingIndex(-1); // Salir del modo de edición
      }
      setPokemons({ id: "", name: "", power: "" }); // Reiniciar los campos
    }
  };

  const editPokemon = (index) => {
    const editedPokemon = pokemonList[index];
    setPokemons(editedPokemon);
    setEditingIndex(index);
  };

  const removePokemon = (index) => {
    const updatedPokemons = [...pokemonList];
    updatedPokemons.splice(index, 1);
    setPokemonList(updatedPokemons);
  };

  console.log(pokemonList);

  return (
    <>
      POKEMONS INICIALES:
      <TableContainer
        style={{ marginTop: "10px", marginBottom: "10px" }}
        sx={{
          th: { fontFamily: "Work Sans, sans-serif" },
          td: { fontFamily: "Work Sans, sans-serif" },
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>ID</TableCell>
              <TableCell style={{ width: "20%" }}>NOMBRE</TableCell>
              <TableCell style={{ width: "25%" }}>HABILIDAD</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemonList.map((pokemon, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{pokemon.id}</TableCell>
                <TableCell>{pokemon.name}</TableCell>
                <TableCell>{pokemon.power}</TableCell>
                <TableCell>
                  <Button variant='contained' onClick={() => editPokemon(index)}>
                    Modificar
                  </Button>
                </TableCell>
                <TableCell>
                  <Button color='secondary' variant='contained' onClick={() => removePokemon(index)}>
                    Borrar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      Agregar/Editar POKEMON:
      <div>
        <label>
          Id:
        </label>
        <Input
          className="form-control"
          type="text"
          value={pokemons.id}
          onChange={(e) => setPokemons({ ...pokemons, id: e.target.value })}
        />
      </div>
      <div>
        <label>
          Nombre:
        </label>
        <Input
          className="form-control"
          type="text"
          value={pokemons.name}
          onChange={(e) => setPokemons({ ...pokemons, name: e.target.value })}
        />
      </div>
      <div>
        <label>
          Habilidad:
        </label>
        <Input
          className="form-control"
          type="text"
          value={pokemons.power}
          onChange={(e) => setPokemons({ ...pokemons, power: e.target.value })}
        />
      </div>
      <Button color="success" variant='contained' onClick={addNewPokemon}>
        {editingIndex === -1 ? "Agregar" : "Guardar Edición"}
      </Button>
    </>
  );
}


