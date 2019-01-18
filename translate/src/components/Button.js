import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColourContext from '../context/ColorContext';

class Button extends React.Component {
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Soushin';
    }

    renderButton(colour) {
        return (
            <button className={`ui button ${colour}`}>
                <LanguageContext.Consumer>
                    {({ language }) =>  this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        return(
            <ColourContext.Consumer>
                {(colour) => this.renderButton(colour)}
            </ColourContext.Consumer>
        );
    }
}

export default Button;