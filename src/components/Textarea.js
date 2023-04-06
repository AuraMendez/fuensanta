import React from 'react'

function Textarea({title, content}) {
    return (
        <div>
            <p>{title}</p>
            <textarea rows={7} cols={25}>{content}</textarea>
        </div>
    )
}

export default Textarea
