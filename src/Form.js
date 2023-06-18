import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form() {
    const [formData, setFormData] = useState({
        Pregnancies: '',
        Glucose: '',
        BloodPressure: '',
        SkinThickness: '',
        Insulin: '',
        BMI: '',
        DiabetesPedigreeFunction: '',
        Age: '',
    });

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        for (let key in formData) {
            if (formData[key] === '') {
                alert(`Please enter your ${key}`);
                return;
            }
        }
        axios.post('http://localhost:5000/predict', formData)
            .then(response => {
                console.log(response);
                alert('Form submitted successfully!');
                alert(`The prediction is: ${response.data.prediction}`);
                setFormData({
                    Pregnancies: '',
                    Glucose: '',
                    BloodPressure: '',
                    SkinThickness: '',
                    Insulin: '',
                    BMI: '',
                    DiabetesPedigreeFunction: '',
                    Age: '',
                });
            })
            .catch(error => {
                console.error('Error submitting form!', error);
            });
    };

    return (
        <div className="form-page">
            <div className="form-container">
                <form className="health-form" onSubmit={handleSubmit}>
                    <h2>Health Data Form</h2>
                    {Object.keys(formData).map((key, i) => (
                        <input
                            key={i}
                            type='number'
                            name={key}
                            placeholder={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    ))}
                    <input type="submit" value="Submit" className="submit-btn" />
                </form>
            </div>
        </div>
    );
}

export default Form;