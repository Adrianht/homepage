import React from 'react';


const ChevronButton = (props) => {

  function handleClick() {
    props.onChildClick();
  }

  return (
    <button className={props.class} onClick={handleClick} disabled={props.disable}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path
          d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"
        />
      </svg>
    </button>
  )
}

export default ChevronButton;
