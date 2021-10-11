import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);

const DatePickerWrapper = () => {
  const [startDate, setStartDate] = useState(new Date());

  console.log(startDate);
  return (
    <DatePicker
      locale={ko}
      dateFormat='yyyy-MM-dd'
      minDate={new Date()}
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      placeholderText='날짜 선택'
    />
  );
};

export default DatePickerWrapper;
