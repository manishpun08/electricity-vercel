"use client";
import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ComplainForm: React.FC = () => {
  const [isLoading] = useState<boolean>(false);
  const [document, setDocument] = useState<File | null>(null);
  const [formErrors, setFormErrors] = useState<{ document?: string }>({});

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      setDocument(file);
      setFormErrors({});
    }
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      // last_name: "",
      phone_no: "",
      email: "",
      complaint_type: "",
      message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      // last_name: Yup.string().required("Last name is required"),
      phone_no: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Contact number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      complaint_type: Yup.string().required("Please select a complaint type"),
      message: Yup.string().required("Complaint message is required"),
    }),
    onSubmit: async () => {
      // setIsLoading(true);
      // console.log("Submission result:", values);
    },
  });

  return (
    <div>
      <h3 className="text-2xl text-black font-semibold leading-[150%] pb-5 lg:pb-10">
        Submit a Complaint
      </h3>

      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        encType="multipart/form-data"
      >
        {/* First Name */}
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            placeholder="Enter Your First Name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              formik.touched.first_name && formik.errors.first_name
                ? "border-red-500"
                : "border-gray-300"
            }`}
            aria-invalid={
              formik.touched.first_name && formik.errors.first_name
                ? "true"
                : "false"
            }
            aria-describedby={
              formik.touched.first_name && formik.errors.first_name
                ? "first_name-error"
                : undefined
            }
          />
          {formik.touched.first_name && formik.errors.first_name && (
            <p id="first_name-error" className="text-red-500 text-sm mt-1">
              {formik.errors.first_name}
            </p>
          )}
        </div>

        {/* Last Name */}
        {/* <div>
          <label
            htmlFor="last_name"
            className="block mb-2 font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Enter Your Last Name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              formik.touched.last_name && formik.errors.last_name
                ? "border-red-500"
                : "border-gray-300"
            }`}
            aria-invalid={
              formik.touched.last_name && formik.errors.last_name
                ? "true"
                : "false"
            }
            aria-describedby={
              formik.touched.last_name && formik.errors.last_name
                ? "last_name-error"
                : undefined
            }
          />
          {formik.touched.last_name && formik.errors.last_name && (
            <p id="last_name-error" className="text-red-500 text-sm mt-1">
              {formik.errors.last_name}
            </p>
          )}
        </div> */}

        {/* Contact Number */}
        <div>
          <label
            htmlFor="phone_no"
            className="block mb-2 font-medium text-gray-700"
          >
            Contact Number
          </label>
          <input
            id="phone_no"
            name="phone_no"
            type="tel"
            placeholder="Enter Your Contact Number"
            value={formik.values.phone_no}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              formik.touched.phone_no && formik.errors.phone_no
                ? "border-red-500"
                : "border-gray-300"
            }`}
            aria-invalid={
              formik.touched.phone_no && formik.errors.phone_no
                ? "true"
                : "false"
            }
            aria-describedby={
              formik.touched.phone_no && formik.errors.phone_no
                ? "phone_no-error"
                : undefined
            }
          />
          {formik.touched.phone_no && formik.errors.phone_no && (
            <p id="phone_no-error" className="text-red-500 text-sm mt-1">
              {formik.errors.phone_no}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Your Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
            aria-invalid={
              formik.touched.email && formik.errors.email ? "true" : "false"
            }
            aria-describedby={
              formik.touched.email && formik.errors.email
                ? "email-error"
                : undefined
            }
          />
          {formik.touched.email && formik.errors.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </p>
          )}
        </div>

        {/* Complaint Type */}
        <div>
          <label
            htmlFor="complaint_type"
            className="block mb-2 font-medium text-gray-700"
          >
            Complaint Type
          </label>
          <select
            id="complaint_type"
            name="complaint_type"
            value={formik.values.complaint_type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              formik.touched.complaint_type && formik.errors.complaint_type
                ? "border-red-500"
                : "border-gray-300"
            }`}
            aria-invalid={
              formik.touched.complaint_type && formik.errors.complaint_type
                ? "true"
                : "false"
            }
            aria-describedby={
              formik.touched.complaint_type && formik.errors.complaint_type
                ? "complaint_type-error"
                : undefined
            }
          >
            <option value="">Select Complaint Type</option>
            <option value="service">Service</option>
            <option value="billing">Billing</option>
            <option value="technical">Technical</option>
            <option value="other">Other</option>
          </select>
          {formik.touched.complaint_type && formik.errors.complaint_type && (
            <p id="complaint_type-error" className="text-red-500 text-sm mt-1">
              {formik.errors.complaint_type}
            </p>
          )}
        </div>

        {/* Document Upload */}
        <div>
          <label
            htmlFor="document"
            className="block mb-2 font-medium text-gray-700"
          >
            Documents
          </label>
          <input
            ref={inputRef}
            id="document"
            name="document"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="flex items-center">
            <button
              type="button"
              className="bg-[rgba(255,255,255,0.30)] px-[1.62rem] py-[0.62rem]  text-blue-500 typography-p-regular border border-blue-500 rounded-[0.45rem] "
              onClick={() => inputRef.current?.click()}
            >
              Choose File
            </button>
            <span className="text-gray-500 pl-3 py-2">
              {document ? document.name : "No File Chosen"}
            </span>
          </div>
          {formErrors.document && (
            <p id="document-error" className="text-red-500 text-sm mt-1">
              {formErrors.document}
            </p>
          )}
        </div>

        {/* Complaint Message */}
        <div className="col-span-1 md:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 font-medium text-gray-700"
          >
            Service Complaint
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Description"
            rows={5}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              formik.touched.message && formik.errors.message
                ? "border-red-500"
                : "border-gray-300"
            }`}
            aria-invalid={
              formik.touched.message && formik.errors.message ? "true" : "false"
            }
            aria-describedby={
              formik.touched.message && formik.errors.message
                ? "message-error"
                : undefined
            }
          />
          {formik.touched.message && formik.errors.message && (
            <p id="message-error" className="text-red-500 text-sm mt-1">
              {formik.errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex gap-[2.12rem]">
          <button
            type="submit"
            disabled={isLoading}
            className="px-7 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="px-7 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? "Resting..." : "Reset"}
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="px-7 py-3 rounded-lg border border-blue-500 text-blue-500  transition duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? "Canceling..." : "Cancel"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplainForm;
