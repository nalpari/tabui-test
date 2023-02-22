import { FloatingLabel } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default function UploadForm() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [address, setAddress] = useState('')
  const [uploadedFileName, setUploadedFileName] = useState()
  const [files, setFiles] = useState([])
  const inputRef = useRef()

  const handleChoice = () => {
    inputRef.current?.click()
  }

  const handleDisplayFileDetails = (e) => {
    e.preventDefault()
    const file = e.target.files[0]
    // setFiles([...files, { uploadedFile: file }])
    setFiles([...files, file])

    let formData = new FormData()
    // formData.append('file', files.length && files[0].uploadedFile)
    formData.append('file', file)
    for (let pair of formData.entries()) {
      console.log(`${pair[0]} ${pair[1]}`)
    }

    axios
      .post('http://localhost:38080/excel/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => console.log(res))

    inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', files.length && files[0].uploadedFile)
    formData.append('name', name)
    formData.append('age', age)
    formData.append('address', address)

    axios
      .post('http://localhost:38080/excel/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => console.log(res))
  }

  return (
    <>
      <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
        <Form.Control
          type="email"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingAge" label="Age" className={`mb-3`}>
        <Form.Control
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingAddress" label="Address">
        <Form.Control
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </FloatingLabel>
      <div className="m-3">
        <label className="mx-3">Choose file:</label>
        <input
          name={`excel`}
          ref={inputRef}
          onChange={handleDisplayFileDetails}
          className="d-none"
          type="file"
        />
        <button
          onClick={handleChoice}
          className={`btn btn-outline-${
            uploadedFileName ? 'success' : 'primary'
          }`}
        >
          {uploadedFileName ? uploadedFileName : 'Choice'}
        </button>
      </div>
      <div>
        <Button variant="primary" onClick={handleSubmit}>
          Upload Start
        </Button>
      </div>
    </>
  )
}
