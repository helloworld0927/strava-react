import React from "react";
import PropTypes from "prop-types";

const Stats = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Recent Runs</h3>
            <ul>
                <li>Count {props.count}</li>
                <li>
                    Distance {Math.round(props.distance / 1000)}km
                </li>
                <li>Elevation Gain {props.elevation_gain}m</li>
            </ul>
        </div>
    )
}

export default Stats;