import { useState } from "react";

function OvulationCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState(28);

  const handleLastPeriodDateChange = (event) => {
    setLastPeriodDate(event.target.value);
  };

  const handleCycleLengthChange = (event) => {
    setCycleLength(parseInt(event.target.value));
  };

  const calculateOvulationDate = () => {
    const lastPeriod = new Date(lastPeriodDate);
    const ovulationDay = new Date(
      lastPeriod.getTime() + (cycleLength - 14) * 24 * 60 * 60 * 1000
    );
    return ovulationDay.toDateString();
  };

  return (
    <div>
      <img className="mx-auto mt-10" src="/images/Opho.jpg" alt="" />
      <div className="flex justify-center py-20">
        <div className="font-bold">
          <h2 className="text-4xl">
            Signs of <spa className="text-themeColor">Ovulation</spa>
          </h2>
          <ul className="list-disc mt-6">
            <li>
              Rise in basal body temperature, typically 1/2 to 1 degree,
              measured by a thermometer
            </li>
            <li>
              Higher levels of luteinizing hormone (LH), measured on a home
              ovulation kit
            </li>
            <li>
              Cervical mucus, or vaginal discharge, may appear clearer, thinner,
              and stretchy, like raw egg whites
            </li>
            <li>Breast tenderness</li>
            <li>Bloating</li>
            <li>Light spotting</li>
            <li>Slight pain or cramping in your side</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <p>HEALTH & PREGNANCY</p>
        <h1 className="font-bold text-5xl">Ovulation Calculator</h1>
      </div>
      <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-md">
        <div className="mb-4">
          <label
            htmlFor="lastPeriodDate"
            className="block font-medium mb-2 text-themeColor"
          >
            Select the first day of your last period
          </label>
          <input
            type="date"
            id="lastPeriodDate"
            value={lastPeriodDate}
            onChange={handleLastPeriodDateChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cycleLength"
            className="block font-medium mb-2 text-themeColor"
          >
            Cycle length (days):
          </label>
          <input
            type="number"
            id="cycleLength"
            value={cycleLength}
            onChange={handleCycleLengthChange}
            min="20"
            max="45"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          {lastPeriodDate && (
            <p className=" mb-2">
              Your estimated ovulation date is{" "}
              <strong className="text-themeColor">
                {calculateOvulationDate()}
              </strong>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default OvulationCalculator;
