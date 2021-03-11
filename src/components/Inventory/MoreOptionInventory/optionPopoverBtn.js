import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '21.5ch',
    marginTop: "20px"
  },
}));

const OptionPopoverBtn = ({name, data, onEliminate, onAdd}) => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        {name}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <div className={`${classes.typography} morePopoverContent`}>
          <h5 className="mb-2">Categorias</h5>
          <div className="tableContainer">
            <table>
              <tbody>
                {
                  data.map((each, index) => {
                    return(
                      <tr key={index}>
                        <th>{each.category}</th>
                        <th className="eliminateBtn" onClick={() => onEliminate(each.id)}>X</th>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <FormControl className={`${classes.textField} inputAndBtnAddCategory`} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              value={inputValue}
              onChange={(e) => onInputChange(e)}
              endAdornment={<InputAdornment onClick={onAdd} className="addCategoryIcon" position="end"><AddBoxIcon /></InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
              placeholder="Añade Categorias"
            />
          </FormControl>
        </div>
      </Popover>
    </div>
  );
}

export default OptionPopoverBtn;