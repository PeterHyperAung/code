import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMail } from "../utils/apiCalls";
function DoctorBookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [speciality, setSpeciality] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      phone,
      date,
      address,
      speciality,
    };

    sendMail(data);

    navigate("/");
  };

  return (
    <div>
      <div className=" justify-center items-center h-screen">
        <h2 className="text-4xl text-center mt-10 font-bold mb-10">
          <span className="text-themeColor"> Booking </span> Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-8 w-96 mx-auto border"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
              type="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="Address"
            >
              speciality
            </label>
            <select
              className="select select-accent w-full max-w-xs border-themeColor"
              onChange={(e) => setSpeciality(e.target.value)}
              value={speciality}
            >
              <option value="" defaultChecked disabled></option>
              <option value="Obstetrician">Obstetrician</option>
              <option value="Gynecologist">Gynecologist</option>
            </select>
          </div>

          {/* <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white bg-themeColor font-bold py-2"
          >
            Submit
          </button> */}

          <button
            type="submit"
            className="btn rounded-full text-white border-0 bg-themeColor w-full "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default DoctorBookingForm;
