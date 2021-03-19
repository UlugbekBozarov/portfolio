import React, { useEffect, useState, useRef } from 'react';

import PropTypes from 'prop-types';
import '../../assets/styles/progressBar.css';

const ProgressBar = props => {

    const center = 100 / 2;
    const radius = 100 / 2 - 20 / 2;
    const circumference = 2 * Math.PI * radius;

    const [offset, setOffset] = useState(circumference);
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);
    const [progressBar, setProgressBar] = useState(0);
    const circleRef = useRef(null);


    const { 
        progress, 
    } = props;
    

    const updatePercentage = () => {
        setTimeout(() => {
            setProgressBar(progressBar + 1);
            updateRGB(progressBar + 1);
        }, 400 / progress);
    };
    
    useEffect(() => {
        if (progress > 0) updatePercentage();
    }, [progress]);
    
    useEffect(() => {
        if (progressBar < progress) updatePercentage();
    }, [progressBar]);


    const updateRGB = (progressRGB) => {
        let r = 0, g = 0, b = 0;
        if (progressRGB > 91) {
            g = 200 + 6.2 * (100 - progressRGB);
        } else {
            if (progressRGB > 49) {
                r = (100 - progressRGB - 9) * 6.2;
                g = 255;
            } else {
                if (progressRGB > 9) {
                    r = 255;
                    g = (progressRGB - 9) * 6.2;
                } else {
                    g = 0;
                    r = 200 + progressRGB * 6.0;
                }
            }
        }
        setR(r);
        setG(g);
        setB(b);
    }



    useEffect(() => {
        setProgressBar(0)
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out;';
    }, [setOffset, circumference, progress, offset]);

    return (
        <>
            <svg
                className="svg m-0"
                width={100}
                height={100}
                style={{background: "linear-gradient( rgba(" + r + ", " + g + ", " + b + ", 0.6), rgba(" + r + ", " + g + ", " + b + ", 0.6))"}}
            >
                <circle
                    className="svg-circle"
                    stroke={'white'}
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="transparent"
                    strokeWidth={20}
                />
                <circle
                    className="svg-circle"
                    ref={circleRef}
                    stroke={'rgb(' + r + ' ' + g + ' ' + b + ')'}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={20}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text 
                    x={center} 
                    y={center + 7.5} 
                    className="svg-circle-text">
                        {progressBar}%
                </text>
            </svg>
        </>
    )
}

ProgressBar.propTypes = {
    size: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    circleOneStroke: PropTypes.string.isRequired,
    circleTwoStroke: PropTypes.string.isRequired
}

export default ProgressBar;