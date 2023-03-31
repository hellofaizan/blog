import React from 'react'

const Youtube = ({id}) => {
  return (
    <div className="relative w-full h-0" style={{paddingBottom: '56.25%'}}>
        <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </div>
    
  )
}

export default Youtube