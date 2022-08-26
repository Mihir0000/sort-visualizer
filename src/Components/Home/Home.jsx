import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import {
    bubbleSort,
    insertionSort,
    quickSort,
    selectionSort,
} from '../Algorithms/Sort';

const Home = () => {
    const [data, setData] = useState([]);
    const [range, setRange] = useState(20);
    const [selectedSort, setSelectedSort] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const [totalStep, setTotalStep] = useState(0);
    const [running, setRunning] = useState(false);
    const [ms, setMs] = useState(10);

    const sortName = [
        { id: 1, sort: 'Bubble Sort' },
        { id: 2, sort: 'Selection Sort' },
        { id: 3, sort: 'Insertion Sort' },
        { id: 4, sort: 'Quick Sort' },
    ];

    const rangeChange = (e) => {
        setRange(e.target.value);
    };
    const msChange = (e) => {
        setMs(e.target.value);
    };
    const selectWidth = () => {
        return 100 / data.length;
    };

    const sortClick = (sort) => {
        setSelectedSort(sort);
    };
    const startClick = async (selectedSort) => {
        console.log(selectedSort);
        let steps;
        switch (selectedSort) {
            case 'Bubble Sort':
                steps = bubbleSort(data)[1];
                console.log(steps);
                break;
            case 'Selection Sort':
                steps = selectionSort(data)[1];
                console.log(steps);
                break;
            case 'Insertion Sort':
                steps = insertionSort(data)[1];
                console.log(steps);
                break;
            case 'Quick Sort':
                steps = quickSort(data)[1];
                console.log(steps);
                break;
            default:
                break;
            // setError('Please Select Any Sort');
        }
        if (selectedSort) {
            await drawSteps(steps, ms);
        }
    };
    const drawSteps = async (steps, speed) => {
        setTotalStep(steps.length);
        setRunning(true);
        for (let i = 0; i < steps.length; i++) {
            // console.log(steps[i]);
            setTimeout(() => {
                setData(steps[i].array);
                setCurrentStep(i + 1);
                if (i === steps.length - 1) {
                    setRunning(false);
                }
            }, speed * i);
        }
    };

    function createRandomArray() {
        const arr = [];
        for (let i = 0; i < range; i++) {
            arr.push(Math.round(Math.ceil(Math.random() * 321)));
        }
        setData(arr);
        setCurrentStep(0);
        setTotalStep(0);
    }
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < range; i++) {
            arr.push(Math.round(Math.ceil(Math.random() * 321)));
        }
        setData(arr);
        setCurrentStep(0);
        setTotalStep(0);
    }, [range]);

    return (
        <Container fluid>
            <Row>
                <div className="d-flex">
                    <h3 className="py-2 text-primary w-30">Sorting Visualizer</h3>
                    <div className='gifContainer'>
                        <img id='gifimg' src="/image/giff.gif" className="giff" alt="" />
                    </div>
                </div>
            </Row>
            <Row className="containerRow">
                <Col className="col-2  column-1">
                    <div className="allSort">
                        <h5 className="text-center">Sort</h5>
                        <hr />
                        {sortName.map((item) => {
                            return (
                                <div key={item.id} className="my-1">
                                    <button
                                        disabled={running}
                                        className={
                                            'singleSortBtn ' +
                                            (selectedSort === item.sort
                                                ? 'activeSort'
                                                : '')
                                        }
                                        onClick={() => sortClick(item.sort)}
                                    >
                                        {item.sort}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <div className="d-flex flex-row ">
                            <input
                                type="range"
                                name=""
                                value={ms}
                                min="1"
                                max="1000"
                                onChange={msChange}
                                disabled={running}
                            />
                            <span>{ms} ms</span>
                        </div>

                        <Button disabled={running} onClick={createRandomArray}>
                            Random Array
                        </Button>
                        <div className="d-flex flex-row ">
                            <input
                                type="range"
                                name=""
                                value={range}
                                min="5"
                                max="100"
                                onChange={rangeChange}
                                disabled={running}
                            />
                            <span>{range}</span>
                        </div>
                        <Button
                            disabled={running}
                            onClick={() => startClick(selectedSort)}
                        >
                            Start
                        </Button>
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
                                                className="singleBar toolhover"
                                                style={{
                                                    height: `${item}px`,
                                                    width: `${selectWidth()}%`,
                                                    backgroundColor: '#ff2f2f',
                                                    borderTopLeftRadius: '5px',
                                                    borderTopRightRadius: '5px',
                                                }}
                                            >
                                                <span className="toolhoverText">
                                                    {item}
                                                </span>
                                            </div>
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
