import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate = useNavigate();
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
            [event.target.name]: event.target.value ? parseFloat(event.target.value) : '',
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        for (let key in formData) {
            if (formData[key] === '' || formData[key] === null) {
                alert(`Please enter your ${key}`);
                return;
            }
        }

        axios.post('http://localhost:5001/predict', formData)
            .then(response => {
                formData['Diabetes'] = response.data.result;
                alert(`Prediction is ${response.data.result}`);
                axios.post('http://localhost:5001/register', formData)
                    .then(response => {
                        alert('Form submitted successfully!');
                        navigate('/profile', { state: { user: formData } });
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
                        console.error('Error saving form data!', error);
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
                    <h2>Your Data</h2>
                    {Object.keys(formData).map((key, i) => (
                        <input
                            key={i}
                            type='number'
                            name={key}
                            placeholder={key}
                            value={formData[key] !== '' ? formData[key] : ''}
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