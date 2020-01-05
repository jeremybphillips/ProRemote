import React, { useState } from 'react';
import { connect } from 'react-redux';
import ProService from '../util/PropresenterService';
import Slide from './Slide';

function MainContent(props) {
    const [activeSlide, setActiveSlide] = useState();
    const { name, slides, loading } = props;

    const onSlideClick = async (index) => {
        await ProService.triggerSlide(index, name);
        setActiveSlide(index);
    };

    return (
        <React.Fragment>
            {!loading && slides.map((x, i) => <Slide content={x} active={i === activeSlide} key={i} index={i} onClick={onSlideClick} />)}
        </React.Fragment>
    );
}

const mapState = (state) => ({
    ...state.activePresentation,
    loading: state.loading,
});

export default connect(mapState)(MainContent);
