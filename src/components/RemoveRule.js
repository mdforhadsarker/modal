import React from 'react'

const RemoveRule = ({ remove }) => {
    return (
        <div>
            Remove Rule component
            <button onClick={() => remove()}>Remove rule</button>
        </div>
    )
}

export default RemoveRule
