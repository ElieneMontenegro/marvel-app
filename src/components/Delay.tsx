import React, { ReactNode, useState } from "react";
import PropTypes from "prop-types";

interface delayProps {
  hidden: boolean;
  waitBeforeShow: PropTypes.Validator<number>;
}

const Delay = () => {

  const [hidden, setHidden] = useState(true)
  const [waitBeforeShow, setWaitBeforeShow] = useState(0)

  setTimeout(time: Number) {
    setHidden(false)
    setWaitBeforeShow(time)
  }
    
  return hidden ? "" : children;
  
}

Delay.propTypes = {
  waitBeforeShow: PropTypes.number.isRequired,
};

export default Delay;
