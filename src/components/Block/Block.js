import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import styleComponents from './../../styleComponents.module.css';

const Block = (props) => {
        return (
            <Paper elevation={1}  className={styleComponents.block}>
                <h2 className={styleComponents.h2}>{props.title ? props.title : 'Оповещение!'}</h2>
                <p className={styleComponents.p}>{props.text}</p>
            </Paper>
        )
}

Block.propTypes = {
    title: PropTypes.string,
    text: PropTypes.any.isRequired,
}

export default Block;