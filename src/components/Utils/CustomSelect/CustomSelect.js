import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './CustomSelect.scss'

const useStyles = makeStyles((theme) => ({
    formControl: {
    //   margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
    //   marginTop: theme.spacing(2),
    },
  }));

const CustomSelect = ({label = null, items}) => {

    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <div className='CustomSelect'>
            {/* <FormControl className={classes.formControl}> */}
                <div className='d-flex'>
                    <div className='labelName'>{label}: </div>
                    <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    className='selectInput'
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            <em>Ninguno</em>
                        </MenuItem>
                        { items.map((item, index) => {
                            return(
                                <MenuItem className="eachSelectItem" key={index} value={item.value}>{item.name}</MenuItem>
                            )
                        }) }
                        
                        {/* <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                </div>
            {/* </FormControl> */}
        </div>
    )
}

export default CustomSelect;