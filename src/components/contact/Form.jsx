import React from 'react';
import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
    title: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validateForm() {
    let newErrors = {};
    let isValid = true;

    const fields = ['name', 'email', 'message'];

    fields.forEach((field) => {
      if (!formData[field]) {
        isValid = false;
        newErrors[field] = 'This field is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        isValid = false;
        newErrors.email = 'Email is not valid';
      }
    });

    setErrors(newErrors);
    return isValid;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', company: '', title: '' });
    } else {
    }
  }

  return (
    <form onSubmit={handleSubmit} className="xl:w-[540px]">
      <div className="input-control">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={`border-b bg-transparent text-[0.9375rem]  pb-4 w-full pl-[0.875rem]  text-white  focus:border-rapture-blue outline-none ${
            errors.name
              ? 'placeholder:text-light-coral/60 focus:border-light-coral border-light-coral'
              : 'placeholder:text-white/60'
          }`}
          value={formData.name}
          onChange={handleInputChange}
        />

        <small
          className={`text-light-coral ${errors.name ? 'block' : 'hidden'}
          } block mt-2 pl-[0.875rem] italic text-[10px] font-bold`}
        >
          This Field is required
        </small>
      </div>
      <div className="input-control ">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className={`bg-transparent text-[0.9375rem] border-b mt-6  pb-4 w-full pl-[0.875rem]  text-white focus:border-rapture-blue outline-none ${
            errors.email
              ? 'placeholder:text-light-coral/60 focus:border-light-coral border-light-coral'
              : 'placeholder:text-white/60'
          } `}
          value={formData.email}
          onChange={handleInputChange}
        />
        <small
          className={`text-light-coral ${errors.email ? 'block' : 'hidden'}
          } block mt-2 pl-[0.875rem] italic text-[10px] font-bold`}
        >
          This Field is required
        </small>
      </div>
      <div className="input-control">
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="bg-transparent text-[0.9375rem] border-b mt-6  pb-4 w-full pl-[0.875rem] placeholder:text-white/60 text-white  focus:border-rapture-blue outline-none"
          value={formData.company}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="bg-transparent text-[0.9375rem] border-b pb-4 mt-6  w-full pl-[0.875rem] placeholder:text-white/60 text-white  focus:border-rapture-blue outline-none"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-control  mt-6 mb-6 w-full ">
        <textarea
          name="message"
          id=""
          cols="30"
          rows="12"
          placeholder="Message"
          className={`bg-transparent text-[0.9375rem] border-b w-full pl-[0.875rem] h-20 lg:h-[5.5rem]  text-white  focus:border-rapture-blue outline-none ${
            errors.message
              ? 'placeholder:text-light-coral/60 focus:border-light-coral border-light-coral'
              : 'placeholder:text-white/60'
          }`}
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <small
          className={`text-light-coral ${errors.message ? 'block' : 'hidden'}
          } block mt-2 pl-[0.875rem] italic text-[10px] font-bold`}
        >
          This Field is required
        </small>
        <small
          className={`text-rapture-blue ${submitted ? 'block' : 'hidden'}
          } block mt-2 pl-[0.875rem] italic text-[10px] font-bold`}
        >
          "Thank you! Your form has been successfully submitted."
        </small>
      </div>

      <button className=" bg-white rounded-full px-8 pt-2 pb-3 w-[123px] ">
        submit
      </button>
    </form>
  );
}

export default Form;
