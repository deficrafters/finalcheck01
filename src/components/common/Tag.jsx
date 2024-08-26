import React from 'react'

const Tag = ({ text,Connected }) => {
    return (<span className={`border text-xs rounded-full border-${Connected?'green':'red'}-600 font-semibold px-3 py-1 bg-${Connected?'green':'red'}-200 text-${Connected?'green':'red'}-600`}>
        {text}
    </span>

    )
}

export default Tag