import React from 'react'

const clickHandler = () => {
  alert('Hello World');
}

const complexExample = (author) => {
  console.log('*** author **',author);
} 

const Book = (props) =>{
  const {img,title,author} = props.book;
  return (
    <article className='Book' onMouseOver={()=>{console.log(title);}}>
       <img src={img} title="" />
      <h1 onClick={()=>{console.log(title);}}>{title}</h1>
      <h4>{author}</h4>
      <button onClick={clickHandler}> Example </button>
      <button onClick={()=>complexExample(author)}> Complex Example </button>
    </article>
  )
}

export default Book
