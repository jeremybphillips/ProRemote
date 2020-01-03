import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import RefreshIcon from '@material-ui/icons/Refresh';
//import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchField from './form/SearchField';
import ProService from '../util/PropresenterService';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    appTitle: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset'
    },
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemText: {
        fontSize: 22,
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
    },
    settingsButton: {
        justifyContent: 'flex-end'
    },
}));

function Navigator({ library, dispatch, ...other }) {
    const classes = useStyles();

    const handleClick = (e) => {
        const pres = e.currentTarget.getAttribute('presentation');

        ProService.getPresentation(pres).then((data) => {
            console.log(data);
            dispatch({
                type: 'SET_ACTIVE_PRESENTATION',
                presentation: data
            });
        });
    };

    const onSettingsClick = () => {
        console.log('launch modal');
    };

    const onRefreshClick = () => {
        ProService.getLibrary().then((library) => {
            if(!library) {
                return;
            }

            dispatch({
                type: 'SET_PRESENTATIONS',
                library: library
            });
        });
    };

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem className={clsx(classes.firebase, classes.item, classes.appTitle)}>
                    ProRemote
                    <ListItem button className={classes.settingsButton} onClick={onSettingsClick}>
                        <ListItemIcon className={classes.itemIcon}>
                            <SettingsIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button className={classes.settingsButton} onClick={onRefreshClick}>
                        <ListItemIcon className={classes.itemIcon}>
                            <RefreshIcon />
                        </ListItemIcon>
                    </ListItem>
                </ListItem>
                <ListItem className={classes.categoryHeader}>
                    <ListItemText classes={{ primary: classes.categoryHeaderPrimary }}>
                        <SearchField />
                    </ListItemText>
                </ListItem>
                {library.map((pres, i) => (
                    <ListItem key={i} button presentation={ pres } className={clsx(classes.item, classes.itemActiveItem)} onClick={handleClick}>
                        <ListItemText className={classes.itemText}>
                            { pres.split('.')[0] }
                        </ListItemText>
                        <ListItemIcon className={classes.itemIcon}>
                            <ArrowForwardIosIcon />
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

const mapState = (state) => ({
    library: state.library
});

export default connect(mapState)(Navigator);
