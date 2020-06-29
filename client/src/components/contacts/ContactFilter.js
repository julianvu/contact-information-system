import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");
  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (event) => {
    if (text.current.value !== "") {
      filterContacts(event.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          ref={text}
          placeholder="Filter Contacts..."
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default ContactFilter;
