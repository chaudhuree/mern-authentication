import React, { Fragment } from "react";
const FullscreenLoader = ({ settings = "d-none" }) => {
  {
    /*
    setting value is d-none 
    if we want to show the loader then we will have to pass the setting value as empty string
  */
  }
  return (
    <Fragment>
      <div className={settings + " LoadingOverlay"}>
        <div className="Line-Progress">
          <div className="indeterminate" />
        </div>
      </div>
    </Fragment>
  );
};
export default FullscreenLoader;
