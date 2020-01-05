import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        height: 280,
        width: 355,
        margin: 6,
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden'
    },
    slideContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center ',
        backgroundColor: theme.palette.common.black,
    },
    slideText: {
        margin: '10px 20px',
        color: theme.palette.common.white,
        '& p': {
            margin: 0,
        },
    },
    slideFooter: {
        marginLeft: 10,
        color: theme.palette.common.white,
    },
    lyrics: {
        margin: '10px 5px',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    active: {
        borderColor: '#FDDE44',
        borderStyle: 'solid',
        borderWidth: 7,
        borderRadius: theme.shape.borderRadius
    }
}));

function calcRgba(slideColor) {
    if(!slideColor.trim()) {
        return 'rgba(200, 200, 200, 1)';
    }

    const [r, g, b, a] = slideColor.split(' ');
    const colors = [r, g, b].map(c => c * 255).join();

    return `rgba(${colors}, ${a})`;
}

function Slide(props) {
    const classes = useStyles();
    const { active, onClick, index, content } = props;
    let { slideColor, slideText, slideLabel, slideIndex } = content;

    const onSlideClick = () => onClick(index);

    return (
        <Paper className={clsx(classes.paper, { [classes.active]: active })} onClick={onSlideClick}>
            <div className={classes.slideContent}>
                <Typography component="div" color="textSecondary" align="center" className={classes.slideText}>
                    {slideText.split('\n').map((item, i) => <p key={i}>{item}</p>)}
                </Typography>
            </div>
            <div style={{ backgroundColor: calcRgba(slideColor) }}>
                <Typography className={classes.slideFooter} color="textSecondary" align="left" variant="body1">
                    {parseInt(slideIndex) + 1}. {slideLabel}
                </Typography>
            </div>
        </Paper>
    );
}

export default Slide;
