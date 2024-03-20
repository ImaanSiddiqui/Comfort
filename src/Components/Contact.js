import React,{useState} from 'react'
import '../style/contact.css'
import Send from '../assets/send.jpg'
import call from '../assets/call.png'
import email from '../assets/email.png'
import location from '../assets/location.jpg'

export default function Contact() {

  const [selectedOption, setSelectedOption] = useState('None');


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedOption2, setSelectedOption2] = useState('None');


  const handleSelectChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b019d009-e90c-4f73-bbe8-8fc617a690b6");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    
  
  





  return (
    <div className='contact'>
        <div className='contact-col'>
        <h3>Send Us A massage <img src={Send} alt=''/></h3>
        <p>Contact us directly for assistance, inquiries, or feedback. Our team is here to help
           you with any questions or concerns you may have.
           Get in touch with us today!
        </p>
        <ul>
            <li><img src={email} alt=''/>comfortcoolingsystem7@gmail.com</li>
            <li><img src={call} alt=''/>+9177700354669</li>
            <li><img src={location} alt=''/>Office Number:805,806 EON IT PARK Business Hub Kharadi Pune</li>
        </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required/>
                




                <label>
        Select Product:
        <br></br>
        <select value={selectedOption} onChange={handleSelectChange} name='Product'>
          <option value="Dish Washer">Dish Washer</option>
          <option value="Washing Machine">Washing Machine</option>
          <option value="Refregrator">Refregrator</option>
          <option value="Air conditoner">Air conditoner</option>
        </select>
      </label>
     










                {/* <label>Product Name</label>
                <input type='text' name='product' placeholder='Enter Product Name'/> */}
                <label>Phone Number</label>
                <input type='text' name='phone' placeholder='Enter Number'/>
                <label>Warranty:

                <select value={selectedOption2} onChange={handleSelectChange2} name='Warranty'>
                <option value="OUT WARRANTY" >IN Warranty</option>
                <option value="IN WARRANTY" >Out Warranty</option>
                </select>



                </label>
                {/* <input type='text' name='warranty' placeholder='IN Wrnty Or OUT wrnty'/>*/}
                <button type='Submit' className='btn dark-btn'> Submit now </button> 
            </form>
            <span>{result}</span>
        </div>
        
      
    </div>
  )
}
