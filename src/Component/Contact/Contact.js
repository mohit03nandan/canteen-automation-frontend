import React,{useState} from "react";
import styles from "./Contact.module.css"
import axios from "axios";
const Contact = () => {
 
    const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
 
  const handleChangeemail = (e) =>{
    setEmail(e.target.value);
  }
  const handleChangequery = (e) =>{
    setQuery(e.target.value);
  }


  const submitQuery = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/sendEmail", {
        email: email,
        query: query,
      });

      alert("Query submitted successfully!");
    } catch (error) {
      alert("Failed to submit query. Please try again later.");
    }
  };


  return (
    <div className={styles.contactcontainer} >
      <div className={styles.conatactcontent}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={handleChangeemail}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            onChange={handleChangequery}
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitQuery}>submit</button>
      </div>
    </div>
  );
};

export default Contact;
