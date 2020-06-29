import React from "react";
import AlertContext from "../../context/alert/alertContext";
import { useContext } from "react";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return alertContext.alerts.length > 0
    ? alertContext.alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          <i className="las la-info-circle"></i> {alert.message}
        </div>
      ))
    : null;
};

export default Alerts;
