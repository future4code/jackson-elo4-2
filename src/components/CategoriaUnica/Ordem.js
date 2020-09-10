import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const ordenacao = [
    {
       label: 'Selecione',
    },
  {
    value: 'Nome',
    label: 'Nome',
  },
  {
    value: 'Preço',
    label: 'Preço',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [ordem, setCurrency] = React.useState('Ordem');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="ordem"
          select
          label="Ordem:"
          value={ordem}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        
          variant="outlined"
        >
          {ordenacao.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}
