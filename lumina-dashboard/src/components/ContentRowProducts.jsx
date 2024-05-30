import PropTypes from "prop-types";

import SmallCard from "./SmallCard";

function ContentRowProducts({ data }) {
  return (
    <div className="row">
      {data.map((element, index) => {
        return (
          <SmallCard
            key={index}
            title={element.title}
            quantity={element.quantity}
            color={element.color}
            icon={element.icon}
          />
        );
      })}
    </div>
  );
}

ContentRowProducts.propTypes = {
  data: PropTypes.array.isRequired,
};

ContentRowProducts.defaultProps = {
  data: [],
};

export default ContentRowProducts;
