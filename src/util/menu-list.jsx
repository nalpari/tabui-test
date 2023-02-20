import Alerts from '@/pages/Alerts'
import Buttons from '@/pages/Buttons'
import Pagenation from '@/pages/Pagenation'

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
]

export default menuList
