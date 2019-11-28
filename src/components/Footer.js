import React from 'react';
import { SHOW_ALL,SHOW_COMPLETE,SHOW_NOT_COMPLETE } from '../actions/index';

class Footer extends React.Component {
    render() {
        const { onButtonClick } = this.props;
        return (
            <div>
                <button onClick={() => onButtonClick(SHOW_ALL)}>Mostrar todas</button>
                <button onClick={() => onButtonClick(SHOW_COMPLETE)}>Mostrar completadas</button>
                <button onClick={() => onButtonClick(SHOW_NOT_COMPLETE)}>Mostrar no completadas</button>
            </div>
        );
    }
}

export default Footer;