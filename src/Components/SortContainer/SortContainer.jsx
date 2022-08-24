import React from 'react';
import { Container } from 'react-bootstrap';
import './SortContainer.css';

const SortContainer = ({ data }) => {
    

    const selectWidth = () => {
        return 100 / data.length;
    };
    return (
        <Container>
            <div className="barContainer">
                <div className="d-flex flex-row">
                    {data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="singleBar"
                                style={{
                                    height: `${item}px`,
                                    width: `${selectWidth()}%`,
                                    backgroundColor: 'red',
                                }}
                            ></div>
                        );
                    })}
                </div>
                <hr />
            </div>
        </Container>
    );
};

export default SortContainer;
