import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);

interface DatePickerWrapperProps {
  handleDate: (selectedDate: Date) => void;
}

const DatePickerWrapper: React.FC<DatePickerWrapperProps> = ({
  handleDate,
}) => {
  return (
    <DatePicker
      locale={ko}
      dateFormat='yyyy-MM-dd'
      name='date'
      minDate={new Date()}
      // selected={startDate}
      onChange={(date: Date) => handleDate(date)}
      placeholderText='날짜 선택'
    />
  );
};

export default React.memo(DatePickerWrapper);
