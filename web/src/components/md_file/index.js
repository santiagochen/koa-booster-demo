import React, { useState, useEffect }  from 'react';
import ReactMarkdown from 'react-markdown'


const MdFile = ({file})=>{

  const [md, setMd] = useState(null);

  useEffect(async () => {
    const response = await fetch(file)
    const text = await response.text()
    setMd(text);
  });

  return (
    <>
    <ReactMarkdown children={md} />
    </>
  )

}

export default MdFile
