import React, { useState  } from 'react';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
//import RefreshIcon from '@material-ui/icons/Refresh';
//import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
    root: {
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        'border-radius': '4px'
    },
    iconButton: {
        opacity: 0.84,
        transform: 'scale(1, 1)',
        transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
    },
    iconButtonHidden: {
        transform: 'scale(0, 0)',
        '& > $icon': {
            opacity: 0
        }
    },
    searchIconButton: {
        color: grey[600]
    },
    searchInput: {
        fontSize: 25,
    },
    icon: {
        opacity: 0.54,
        transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
    },
    input: {
        width: '100%',
        color: theme.palette.common.white
    },
    searchContainer: {
        margin: 'auto 16px',
        width: 'calc(100% - 48px - 32px)' // 48px button + 32px margin
    }
}));

function SearchField({ ...other }){
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    // const handleSearchRequest = (value) => {
    //     console.log(value.trim());
    // };

    const handleClear = () => {
        setValue('');
    };

    return (
        <Paper className={classes.root}>
            <IconButton
                disableRipple
                disableFocusRipple
                classes={{
                    root: clsx(classes.iconButton, classes.searchIconButton)
                }}
            >
                <SearchIcon />
            </IconButton>
            <div className={classes.searchContainer}>
                <TextField
                    {...other}
                    value={value}
                    onChange={handleInput}
                    className={classes.input}
                    fullWidth
                    placeholder="Search by song title"
                    InputProps={{
                        disableUnderline: true,
                        className: classes.searchInput,
                    }}
                />
            </div>
            <IconButton
                onClick={handleClear}
                classes={{
                    root: clsx(classes.iconButton, classes.searchIconButton, {
                        [classes.iconButtonHidden]: value === ''
                    })
                }}>
                <ClearIcon />
            </IconButton>
        </Paper>

    );
}

export default SearchField;
