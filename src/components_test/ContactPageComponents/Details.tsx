import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';



const Details = () => {
const form = useRef<HTMLFormElement | null>(null);

  const [value, setValue] = useState({
    FullName: "",
    PhoneNumber: "",
    Email: "",
    Service: "",
    Message: "",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //  console.log(Object.fromEntries(new FormData(form.current!)));


    if (!form.current) return;

    emailjs
      .sendForm("service_ldx2o9d", "template_8chc57j", form.current, "rW6lWI-oWrXpF-fYG")
      .then(() => {
        console.log('SUCCESS!');
        alert("Form sent successfully!");
        form.current!.reset()

        setValue({
          FullName: "",
          PhoneNumber: "",
          Email: "",
          Service: "",
          Message: "",
        });
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
        alert("Failed to send form.");
      });
  };

  return (
    <div className="p-20 flex justify-center" style={{ backgroundColor: "rgb(255, 253, 245)" }}>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:gap-10 gap-5">
          <div className="flex flex-col gap-2">
            <p className="font-light text-sm text-gray-600">Full Name *</p>
            <input
              value={value.FullName}
              onChange={(e) => setValue({ ...value, FullName: e.target.value })}
              type="text"
              name="FullName"
              required
              className={value.FullName.trim() === "" ? "border border-red-600 pr-40 p-1" : "border border-black pr-40 p-1"}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-light text-sm text-gray-600">Phone Number *</p>
            <input
              value={value.PhoneNumber}
              onChange={(e) => setValue({ ...value, PhoneNumber: e.target.value })}
              type="tel"
              pattern="[0-9]{10}"
              name="PhoneNumber"
              required
              className={value.PhoneNumber.trim() === "" ? "border border-red-600 pr-40 p-1" : "border border-black pr-40 p-1"}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 gap-5">
          <div className="flex flex-col gap-2 w-full" >
            <p className="font-light text-sm text-gray-600">Email *</p>
            <input
              value={value.Email}
              onChange={(e) => setValue({ ...value, Email: e.target.value })}
              type="email"
              name="Email"
              required
              className={value.Email.trim() === "" ? "border border-red-600 pr-40 p-1" : "border border-black pr-30 p-1"}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="font-light text-sm text-gray-600">Choose a service </p>
            <select
              onChange={(e) => setValue({ ...value, Service: e.target.value })}
              value={value.Service}
              name="Service"
              className="border border-black min-h-[33px] w-full text-sm font-light"
            >
              <option value="">Select...</option>
              <option value="Deep cleaning facial">Deep cleaning facial</option>
              <option value="Chemical peel">Chemical peel</option>
              <option value="Microneedling">Microneedling</option>
              <option value="Radio Frequency">Radio Frequency</option>
              <option value="Non surgical eyelift">Non surgical eyelift</option>
              <option value="Cosmelan">Cosmelan</option>
              <option value="Body Treatment">Body Treatment</option>
              <option value="I'm not sure">I'm not sure</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-full">
              <p className="font-light text-sm text-gray-600">Message </p>
              <textarea
                className="border border-black p-10"
                value={value.Message}
                onChange={(e) => setValue({ ...value, Message: e.target.value })}
                name="Message"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              type="submit"
              className="bg-[#EDEBE4] p-1 pr-10 pl-10 cursor-pointer text-xs font-light border-1 border-black hover:bg-black duration-300 hover:text-white"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Details;








// import { useEffect, useState } from "react";

// const Details = () => {

  
//   const initialValues = { 
//     FullName: "",
//     PhoneNumber: "",
//     Email: "",
//     Service: "",
//     Message: "",
//   };

//   console.log(initialValues);
  
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
//   const validate = (values:any) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.FullName) {
//       errors.FullName = "FullName is required!";
//     }
//     if (!values.Email) {
//       errors.Email = "Email is required!";
//     } else if (!regex.test(values.Email)) {
//       errors.Email = "This is not a valid Email format!";
//     }
//     if (!values.Message) {
//       errors.Message = "Message is required!";
//     } else if (!regex.test(values.Email)) {
//       errors.Message = "This is not a valid Message format!";
//     }
//     if (!values.PhoneNumber) {
//       errors.PhoneNumber = "Phone Number is required";
//     } else if (values.PhoneNumber.length < 10) {
//       errors.PhoneNumber = "Phone Number must be more than 10 characters";
//     } else if (values.PhoneNumber.length > 10) {
//       errors.PhoneNumber = "Phone Number cannot exceed more than 10 characters";
//     }
//     return errors;
//   };
  


//   return (
//     <div className="bg-white p-15 flex justify-center">
//       <form onSubmit={handleSubmit} action="" className="flex flex-col gap-5">
//         <div className="flex flex-col md:flex-row md:gap-10 gap-5">
//           <div className="flex flex-col gap-2">
//             <p className="font-light text-sm">Full Name *</p>
//             <input
//               name="FullName"
//               value={formValues.FullName}
//               onChange={handleChange}
//               type="text"
//               className="border border-black  pr-30 p-1"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <p className="font-light text-sm">Phone Number *</p>
//             <input
//               name="PhoneNumber"
//               value={formValues.PhoneNumber}
//               onChange={handleChange}
//               type="text"
//               className="border border-black pr-30 p-1"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row md:gap-10 gap-5">
//           <div className="flex flex-col gap-2">
//             <p className="font-light text-sm">Email *</p>
//             <input
//               name="Email"
//               value={formValues.Email}
//               onChange={handleChange}
//               type="text"
//               className="border border-black pr-30 p-1"
//             />
//           </div>
//           <div className="flex flex-col gap-2 w-full">
//             <p className="font-light text-sm">Choose a service </p>
//             <select
//               name="Service"
//               value={formValues.Service}
//               onChange={handleChange}
//               id=""
//               className="border border-black p-2 w-full text-sm font-light"
//             >
//               <option value=""></option>
//               <option value="Deep cleaning facial">Deep cleaning facial</option>
//               <option value="Chemical peel">Chemical peel</option>
//               <option value="Microneedling">Microneedling</option>
//               <option value="Radio Frequency">Radio Frequency</option>
//               <option value="Non surgical eyelift">Non surgical eyelift</option>
//               <option value="Cosmelan">Cosmelan</option>
//               <option value="Body Treatment">Body Treatment</option>
//               <option value="I'm not sure">I'm not sure</option>
//             </select>
//           </div>
//         </div>
//         <div className="flex gap-5">
//           <div className="flex flex-col gap-2 w-full">
//             <p className="font-light text-sm">Message *</p>
//             <textarea className="border border-black p-10 " value={formValues.Message} onChange={handleChange} name="Message"/>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <button
//             className="bg-[#EDEBE4] p-1 pr-10 pl-10 cursor-pointer text-xs font-extralight border-1 border-black  hover:bg-black duration-300 hover:text-white"
//           >
//             SUBMIT
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Details;
