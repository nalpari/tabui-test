import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import menuList from '@/util/menu-list'

export default function TabUi() {
  const [items, setItems] = useState([])
  const [activeKey, setActiveKey] = useState()

  const handleMenuClick = (key) => {
    setItems((prev) => [...prev, menuList[key]])
    setActiveKey(key)
  }

  const handleTabClick = (key) => {
    setActiveKey(key)
  }

  return (
    <>
      <Nav onSelect={handleMenuClick}>
        {menuList?.map((menu) => (
          <Nav.Item key={menu.id}>
            <Nav.Link eventKey={menu.id}>{menu.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {items.length > 0 && (
        <Tabs
          activeKey={activeKey}
          id="uncontrolled-tab-example"
          className="mb-3"
          onSelect={handleTabClick}
        >
          {items?.map((item) => (
            <Tab key={item.id} eventKey={item.id} title={item.name}>
              {item.component}
            </Tab>
          ))}
        </Tabs>
      )}
    </>
  )
}
