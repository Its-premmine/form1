import React ,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [date, setDate] = useState(new Date());
  const [FormData, setFormData] = useState({
    name : '',
    Email : '',
    password : '',
  });

  const handelChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name] : value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data :",FormData);
    alert("Submit Successfull")
  }


  return(
        <div className="flex justify-center flex items-center  bg-rose-500 w-full h-dvh">
          <div className="h-96  w-96 bg-blue-200 rounded-lg">
            <form action="" onSubmit={handleSubmit} >
            <p className="text-2xl font-bold text-blue-600 text-center mt-5">Welcome</p>
            <p className="text-center font-mediam ">Create your Account to Continue</p>
            <br /> 
            <input type="text" name="name" value={FormData.name} onChange={handelChange} placeholder="   Your Nmae"  className="rounded -lg w-80 m-5 h-8 mt-1" />
            <br />
            <input type="Email" name="Email" value={FormData.Email} onChange={handelChange} placeholder="   abcd@gmail.com" className="rounded -lg w-80 m-5 h-8 mt-1" />
            <br />
            <input type="password" name="password" value={FormData.password} onChange={handelChange} placeholder="   Password" className="rounded -lg w-80 m-5 h-8 mt-1" />
            <br />
            <DatePicker className="rounded -lg w-80 m-5 h-8 mt-1" selected={date} onChange={(date) => setDate(date)} />
            <button type="submit" className="bg-blue-500 text-center font-bold rounded -lg w-80 m-5 h-8 mt-1 hover:bg-blue-800" >Submit </button>

            </form>
          </div>
        </div>


  )
}

export default App






