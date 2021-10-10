import React from 'react'

export default function PageNotFound(props) {
    return (
        <div className="page-not-found">
            <h2>PAGE YOU FIND IS NOT FOUND!!!</h2>
            <p>check your page find: {props.match.url}</p>
        </div>
    )
}
