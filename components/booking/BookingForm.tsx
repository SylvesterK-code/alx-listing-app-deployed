import React from "react";

const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Details</h2>
    <form className="mt-4">
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" title="First name"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" title="Last name"/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="border p-2 w-full mt-2 rounded-md" title="Email"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" title="phone number"/>
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium">Card Number</label>
        <input type="text" className="border p-2 w-full mt-2 rounded-md" title="card number" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" title="expiry date"/>
        </div>
        <div>
          <label className="block text-sm font-medium">CVV</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" title="CVV"/>
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium">Street Address</label>
        <input type="text" className="border p-2 w-full mt-2 rounded-md" title="street address"/>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">City</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" title="city"/>
        </div>
        <div>
          <label className="block text-sm font-medium">State</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" title="state"/>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium">Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" title="zip code"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Country</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md" title="country"/>
        </div>
      </div>

      {/* Submit */}
      <button className="mt-6 bg-green-500 hover:bg-green-600 transition text-white py-2 px-4 rounded-md w-full">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
