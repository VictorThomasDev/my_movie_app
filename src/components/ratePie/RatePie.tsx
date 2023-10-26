import React from 'react';
import './ratePie.css';

interface IRateProps {
    percentage: number;
    colour: string;
}

interface ICircleProps {
    colour: string;
    pct: number;
}

const cleanPercentage = (percentage: number) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle: React.FC<ICircleProps> = ({ colour, pct }) => {
    const r = 20; // Reduced circle radius
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - pct) * circ) / 100;
    return (
        <circle
            r={r}
            cx={25} // Reduced center X coordinate
            cy={25} // Reduced center Y coordinate
            fill="transparent"
            stroke={strokePct !== circ ? colour : ''} // remove colour as 0% sets full circumference
            strokeWidth={'0.15rem'} // Reduced stroke width
            strokeDasharray={circ}
            strokeDashoffset={pct ? strokePct : 0}
            strokeLinecap="round"
        ></circle>
    );
};

const RatePie: React.FC<IRateProps> = ({ percentage, colour }) => {
    const pct: number = cleanPercentage(percentage);
    return (
        <svg width={50} height={50} className="ratePie">
            <g transform={`rotate(-90 ${'25 25'})`}> {/* Reduced transform values */}
                <Circle colour={colour} pct={pct} />
            </g>
            <text
                className="rateText"
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize={'0.8em'} // Reduced font size
            >
                {percentage.toFixed(0)}%
            </text>
        </svg>
    );
};

export default RatePie;





