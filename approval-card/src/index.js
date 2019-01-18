import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="yee" 
                    timeAgo="Today at 4:50pm" 
                    comment="yep"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="mista" 
                    timeAgo="Today at 4:40pm" 
                    comment="nope"
                    avatar={faker.image.avatar()}                
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="someguy" 
                    timeAgo="Today at 4:30pm" 
                    comment="maybe"
                    avatar={faker.image.avatar()}                
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));