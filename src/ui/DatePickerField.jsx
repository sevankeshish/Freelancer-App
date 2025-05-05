import DatePicker from "react-multi-date-picker";

function DatePickerField({ label, date, setDate }) {
  return (
    <div>
      <span className="mb-2 flex text-secondary-700">{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => setDate(date)}
        format="MM/DD/YYYY"
      />
    </div>
  );
}

export default DatePickerField;
