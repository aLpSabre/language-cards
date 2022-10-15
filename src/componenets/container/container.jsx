import Card from "../cards/Card";
import data from "../../helper/data";

const Container = () => {
  return (
    <div className="cards-container">
      <h1>Languages</h1>
      <div className="lng-container">
        {data.map((element, index) => {
          let { name, img, options } = element;
          return <Card key={index} name={name} img={img} options={options} />;
        })}
      </div>
    </div>
  );
};

export default Container;
