import React from "react";

function Pictures(props) {
    return (
        <div className="container">
            <div className="row">
            {props.Matches.map(pic => (
                    <div className="col-lg-3 col-md-4 col-6 zoom" key={pic.name}>
                        <img src={pic.source} className="img-fluid  p-1" alt={pic.name} onClick={props.gameLoop}></img>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Pictures;