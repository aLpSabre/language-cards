import { useState } from "react";

const Card = ({ img, name, options }) => {
  const [show, setShow] = useState(true);

  return (
    <div className="card" onClick={() => setShow(!show)}>
      {show && (
        <div className="language-heading">
          <div>
            <img src={img} alt={name} />
          </div>
          <h5>{name.toUpperCase()}</h5>
        </div>
      )}

      {!show && (
        <div className="language-info">
          <ul>
            {options.map((element) => {
              return <li>{element}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Card;
