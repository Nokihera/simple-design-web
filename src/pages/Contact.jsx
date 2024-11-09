import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../api/firebase";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const submitBtnClick = async () => {
    setLoading(true);
    if (name.trim() && email.trim() && subject.trim() && message.trim()) {
      try {
        const res = await addDoc(collection(db, "messages"), {
          name,
          email,
          message,
          subject,
          timestamp: serverTimestamp(),
        });
        toast.success("Message successfully sent!");
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        
      }
    }
  };
  return (
    <div className="grid grid-cols-2 px-7 mt-7 gap-5 flex-grow-35">
      <Toaster position="top-center"/>
      <div className="flex flex-col gap-2">
        <h1 className="text-[#31241e] font-bold text-4xl">Contact</h1>
        <p className="text-[15px] text-[#31241e] font-semibold">
          <i>Please fill out the form below to send us an email.</i>
        </p>
        <p className="text-[14px] text-[#31241e]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div>
          <p className="text-[17px] text-[#31241e] font-semibold">E-mail:</p>
          <a
            href="mailto:minzarnihtut811@gmail.com"
            className="text-[15px] text-[#31241e] font-semibold"
          >
            minzarnihtut811@gmail.com
          </a>
        </div>
      </div>
      <div className="contact-form flex flex-col gap-4">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          className="bg-[#d1c8c1] px-4 py-2"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="bg-[#d1c8c1] px-4 py-2"
        />
        <input
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          placeholder="Subject"
          className="bg-[#d1c8c1] px-4 py-2"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="8"
          className="bg-[#d1c8c1] px-4 py-2"
          placeholder="Message"
        ></textarea>
        <div className="flex justify-end">
          <button
            disabled={loading}
            onClick={submitBtnClick}
            className={`bg-[#d1c8c1] rounded-full px-10 py-2 text-white text-[20px] font-bold ${
              loading && "opacity-50"
            }`}
          >
            {loading ? "Submitting" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
