import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
//import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchField from './form/SearchField';
import ProService from '../util/PropresenterService';

const library = ['Almighty God.pro6','Amazing Grace.pro6','Amazing Grace 2.pro6','Announcements Slides.pro6','Awards.pro6','Blank Slide.pro6','Communion Image.pro6','Couple Corner.pro6','Everlasting God.pro6','Giving & Announcements Slides.pro6','Glorious.pro6','He Knows My Name.pro6','How Great is Our God.pro6','In Jesus Name.pro6','Intro Videos.pro6','It came upon a Midnight Clear.pro6','Meet and Greet Slides.pro6','Now behold the lamb .pro6','Offering Slides.pro6','Player & Meet and Greet Slides.pro6','Rez Power.pro6','Scripture Reading.pro6','See You Next Week.pro6','Sermon 01-14-18.pro6','Sermon 08-06-17.pro6','Teaching Slides.pro6','Testimony.pro6','Untitled.pro6','Welcome To ProPresenter 6.pro6','What Can I Do.pro6','You Are My Strenght.pro6','You Waited.pro6'];

const useStyles = makeStyles(theme => ({
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
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemPrimary: {
        fontSize: 'inherit',
    },
    itemText: {
        fontSize: 22,
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
    },
}));

function Navigator({ ...other }) {
    const classes = useStyles();

    const handleClick = (e) => {
        const pres = e.currentTarget.getAttribute('presentation');

        ProService.getPresentation(pres);

        //console.log(pres.split('.')[0]);
        //console.log(ProService.setCurrentPresentation(pres));
        //ProService.currentPresentation = pres;
        //console.log(ProService.currentPresentation);
    };

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
                    ProRemote
                </ListItem>
                <ListItem className={clsx(classes.item, classes.itemCategory)}>
                    <ListItemIcon className={classes.itemIcon}>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.itemPrimary }}>
                        Settings
                    </ListItemText>
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

export default Navigator;
