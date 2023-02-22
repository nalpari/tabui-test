import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

dayjs.locale('ko')

export default function DatepickerPage() {
  const [startDate, setStartDate] = useState(new Date())
  console.log(dayjs(new Date()).format('YYYY.MM.DD HH:mm:ss'))

  return (
    <>
      <h1>Datepicker</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicDatepicker">
          <Form.Label>Datepicker</Form.Label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Form.Group>
      </Form>
    </>
  )
}
