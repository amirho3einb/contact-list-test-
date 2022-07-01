const ContactList = ({ contacts }) => {
  console.log(contacts);
  return contacts.length > 0 ? (
    contacts.map((contact) => (
      <div>
        <p>
          <span>نام: </span>
          <span>{contact.firstName}</span>
        </p>
        <p>
          <span>نام خانوادگی: </span>
          <span>{contact.lastName}</span>
        </p>
        <p>
          <span>شماره تماس: </span>
          <span>{contact.phoneNumber}</span>
        </p>
        <p>
          <span>کد ملی: </span>
          <span>{contact.nationalCode}</span>
        </p>
      </div>
    ))
  ) : (
    <div>هیچ رکوردی وجود ندارد</div>
  );
};

export default ContactList;
