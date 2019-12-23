import React from "react";

function Pictures(props) {
    return (
        <div className="container">
            <div className="row">
            {props.Matches.map(pic => (
                    <div className="col-sm-2" key={pic.name}>
                        <img src={pic.source} className="img-fluid p-2" alt={pic.name} onClick={props.gameLoop}></img>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Pictures;