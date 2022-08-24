import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import SortContainer from '../SortContainer/SortContainer';
import './Home.css';

const Home = () => {
    const [data, setData] = useState([]);
    const [range, setRange] = useState(50);

    const rangeChange = (e) => {
        setRange(e.target.value);
    };

    const bableClick = () => {
        for (let i = 0; i < data.length - 1; i++) {
            for (let j = 0; j < data.length - 1 - i; j++) {
                if (data[j] > data[j + 1]) {
                    let temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
                setData(data);
            }
        }
        console.log(data);
    };
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
                            <h6>1.Bubble Sort</h6>
                            <button
                                className="singleSortBtn"
                                onClick={bableClick}
                            >
                                <i className="fa-solid fa-arrow-right-long" />
                            </button>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6>2.Selection Sort</h6>
                            <button className="singleSortBtn">
                                <i className="fa-solid fa-arrow-right-long" />
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <div>
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
                        <Button>Start</Button>
                    </div>
                </Col>
                <Col className="col-10 column-2">
                    <SortContainer data={data} />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
