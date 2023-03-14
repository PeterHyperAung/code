import React from "react";
import Navbar from "../components/Navbar/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[200px]">
        <h2 className="text-center text-4xl mb-16 font-bold">Contact Info</h2>
        <table
          cellPadding="30px"
          align="center"
          className="w-[60vw] text-center text-lg"
        >
          <tr className="border-b">
            <td>Email</td>
            <td>aviothic@gmail.com</td>
          </tr>
          <tr className="border-b">
            <td>Address</td>
            <td>No.2, San Chaung Road, Yangon</td>
          </tr>
          <tr>
            <td>Phone No.</td>
            <td>+979 987654321</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default ContactPage;
