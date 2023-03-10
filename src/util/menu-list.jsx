import Alerts from '@/pages/Alerts'
import Buttons from '@/pages/Buttons'
import Pagenation from '@/pages/Pagenation'
import UploadForm from '@/pages/UploadForm'
import DatepickerPage from '../pages/DatepickerPage.jsx'

const menuList = [
  {
    id: 0,
    name: 'Alerts',
    component: <Alerts />,
  },
  {
    id: 1,
    name: 'Buttons',
    component: <Buttons />,
  },
  {
    id: 2,
    name: 'Pagenation',
    component: <Pagenation />,
  },
  {
    id: 3,
    name: 'UploadForm',
    component: <UploadForm />,
  },
  {
    id: 4,
    name: 'Datepicker',
    component: <DatepickerPage />,
  },
]

export default menuList
