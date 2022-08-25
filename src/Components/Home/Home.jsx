import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import { bubbleSort } from '../Algorithms/Sort';

const Home = () => {
    const [data, setData] = useState([]);
    const [range, setRange] = useState(20);
    const [selectedSort, setSelectedSort] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const [totalStep, setTotalStep] = useState(0);

    const rangeChange = (e) => {
        setRange(e.target.value);
    };
    const selectWidth = () => {
        return 100 / data.length;
    };

    const bubbleClick = () => {
        setSelectedSort('Bable Sort');
    };
    const startClick = async () => {
        const [sortedBubbleData, steps] = bubbleSort(data);
        console.log(sortedBubbleData, steps);
        await drawSteps(steps, 100);
    };
    const drawSteps = async (steps, speed) => {
        setTotalStep(steps.length);
        for (let i = 0; i < steps.length; i++) {
            // console.log(steps[i]);
            setTimeout(() => {
                setData(steps[i].array);
                setCurrentStep(i + 1);
            }, speed * i);
        }
    };

    // function createRandomArray() {
    //     const arr = [];
    //     for (let i = 0; i < range; i++) {
    //         arr.push(Math.round(Math.ceil(Math.random() * 321)));
    //     }
    //     setData(arr);
    // }
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < range; i++) {
            arr.push(Math.round(Math.ceil(Math.random() * 321)));
        }
        setData(arr);
    }, [range]);

    return (
        <Container fluid>
            <Row>
                <h3 className="py-2 text-primary">Sorting Visualizer</h3>
            </Row>
            <Row className="containerRow">
                <Col className="col-2  column-1">
                    <div className="allSort">
                        <h5 className="text-center">Sort</h5>
                        <hr />
                        <div className="d-flex justify-content-between my-1">
                            <button
                                className="singleSortBtn"
                                onClick={bubbleClick}
                            >
                                Bubble Sort
                            </button>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button
                                className="singleSortBtn"
                                onClick={bubbleClick}
                            >
                                Selection Sort
                            </button>
                        </div>
                    </div>
                    <div>
                        <TextField
                            className="text-bold"
                            id="outlined-password-input"
                            label="Sort"
                            disabled
                            type="text"
                            value={selectedSort}
                            autoComplete="current-password"
                            InputProps={{
                                readOnly: true,
                            }}
                            color="success"
                        />
                        <div className="d-flex flex-row justify-content-between">
                            <input
                                type="range"
                                name=""
                                value={range}
                                min="5"
                                max="100"
                                onChange={rangeChange}
                            />
                            <span>{range}</span>
                        </div>
                        <Button onClick={() => startClick()}>Start</Button>
                    </div>
                </Col>
                <Col className="col-10 column-2">
                    <Container>
                        <div className="barContainer">
                            <div className="d-flex flex-row">
                                {data &&
                                    data.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="singleBar"
                                                style={{
                                                    height: `${item}px`,
                                                    width: `${selectWidth()}%`,
                                                    backgroundColor: '#ff2f2f',
                                                    borderTopLeftRadius: '5px',
                                                    borderTopRightRadius: '5px',
                                                }}
                                            ></div>
                                        );
                                    })}
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div>
                                <h6>
                                    Current Step : {currentStep} / {totalStep}
                                </h6>
                            </div>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
