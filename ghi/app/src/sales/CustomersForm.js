import React, {useState} from "react"

function CustomersForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    const handleFirstNameChange = (event) => {
        const value = event.target.value
        setFirstName(value)
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value
        setLastName(value)
    }

    const handlePhoneNumberChange = (event) => {
        const value = event.target.value
        setPhoneNumber(value)
    }

    const handleAddressChange = (event) => {
        const value = event.target.value
        setAddress(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}

        data.first_name = firstName
        data.last_name = lastName
        data.phone_number = phoneNumber
        data.address = address

        const url = "http://localhost:8090/api/customers/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {

            setFirstName('')
            setLastName('')
            setPhoneNumber('')
            setAddress('')

        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a Customer</h1>
                    <form onSubmit={handleSubmit} id="create-customer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFirstNameChange} value={firstName} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" />
                            <label htmlFor="first_name">First name...</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleLastNameChange} value={lastName} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                            <label htmlFor="last_name">Last name...</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePhoneNumberChange} value={phoneNumber} placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control" />
                            <label htmlFor="phone_number">Phone number...</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleAddressChange} value={address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                            <label htmlFor="address">Address...</label>
                        </div>
                        <button className="btn btn-primary">Add!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomersForm