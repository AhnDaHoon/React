import React, { Fragment, useMemo } from "react";

const DemoOutput = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("list!");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("demo");
  return (
    <Fragment>
      <p>{props.show ? "This is new!" : ""}</p>;
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default React.memo(DemoOutput);
