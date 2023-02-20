import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { useState } from 'react'

export default function TabUi() {
  const [items, setItems] = useState([])

  const handleMenuClick = (key) => {
    console.log(key)
  }

  return (
    <>
      <Nav onSelect={(selectedKey) => handleMenuClick(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey="link-0">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Alerts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Buttons</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Pagenation</Nav.Link>
        </Nav.Item>
      </Nav>

      {items && (
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            asdf
          </Tab>
          <Tab eventKey="profile" title="Profile">
            1234
          </Tab>
          <Tab eventKey="contact" title="Contact">
            qwer
          </Tab>
        </Tabs>
      )}
    </>
  )
}
