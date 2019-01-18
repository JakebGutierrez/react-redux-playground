import React from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {
        return (
            <div>
                Select a language:
                <i className="flag au" onClick={() => this.context.onLanguageChange('english')} />
                <i className="flag jp" onClick={() => this.context.onLanguageChange('japanese')} />
            </div>
        );
    }
}

export default LanguageSelector;