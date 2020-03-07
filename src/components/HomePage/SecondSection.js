import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SecondSection.module.css';

export default function SecondSection({data}) {
  const initFormData = { email: '', phone: '', password: '' };
  const [formData, setFormData] = useState(initFormData);
  const [errors, setErrors] = useState([]);

  const {
    title,
    stats,
    graphText,
    formText,
    formLabels,
    buttonText,
  } = data;

  const handleChange = (e) => {
    const { value, id } = e.target;
    setFormData(prev => {
       return { ...prev, [id]: value}
    })
  }

  const handleSubmit = () => {
    setErrors([]);
    const { email, phone, password } = formData;
    const phoneRegex = /^([+][0-9]{2,3}){0,1}(2|6)[0-9]{9}$/;
    const emailRegex = /[^@]+@[^\.]+\..+/;
    const passRegex = /^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/;
    const invalidValues = [];
    if (!emailRegex.test(email)) invalidValues.push('email');
    if (!phoneRegex.test(phone)) invalidValues.push('phone');
    if (!passRegex.test(password)) invalidValues.push('password');
    if (invalidValues.length > 0) setErrors(invalidValues);
  }

  const {
    sectionTitle,
    secondSection,
    graphTitle,
    graph,
    stat,
    percentageInfo,
    sliderStop,
    sliderBar,
    slider,
    circle,
    innerCircle,
    form,
    formInput,
    formButton,
  } = styles;

  const colors = [
    {first: '#008abe', second: '#58feee'},
    {first: '#2d76ab', second: '#74c0f7'},
    {first: '#eb8358', second: '#fbc3b7'},
    {first: '#7c54d9', second: '#f9aada'},
  ]

  return (
    <>
      <p className={sectionTitle}>{title}</p>
      <div className={secondSection}>
        <div className={graph}>
          <p className={graphTitle}>{graphText}</p>
          {stats.map((s, i) => (
            <div className={stat} key={s.title}>
              <div className={percentageInfo}>
                <p>{s.title}</p>
                <p>{`${s.amount / 10}%`}</p>
              </div>
              <div className={sliderBar}>
                <div
                  className={sliderStop}
                  style={{width: `${s.amount / 10}%`}}
                >
                  <div
                    className={slider}
                    style={{
                      backgroundImage: `linear-gradient(to right, ${colors[i].first}, ${colors[i].second})` 
                    }}
                  >
                    <div
                      className={circle}
                      style={{
                        right: 0,
                        transform: 'translate(50%, -50%)',
                        borderColor: colors[i].second,
                      }}
                    >
                      <div
                        className={innerCircle}
                        style={{ borderColor: colors[i].second }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={form}>
          <p>{formText}</p>
          <p>We work with ecosystem leaders, corporations and startups worldwide. How can we help you?</p>
          {formLabels.map((l) => {
            const input = l.split(' ')[1].toLowerCase();
            const hasError = errors.includes(input);
            return (
              <input
                key={l}
                type="text"
                id={input}
                placeholder={l}
                className={formInput}
                style={{border: hasError ? '1px solid red' : 'none'}}
                onChange={e => handleChange(e)}
              />
            )
          })}
          <button onClick={() => handleSubmit()} className={formButton}>{buttonText}</button>
        </div>
      </div>
    </>
  )
}

SecondSection.propTypes = {
  data: PropTypes.object.isRequired,
};
