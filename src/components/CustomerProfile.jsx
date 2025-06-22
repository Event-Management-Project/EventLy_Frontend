import React, { useState } from 'react';

function CustomerProfile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    address: '123 Main Street, City',
  });

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formData);
    setShowForm(false);
    alert('Profile updated!');
  };

  return (
    <div style={{ padding: '2rem', margin: '2rem' }}>
      <h2>Customer Profile</h2>
      <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Address:</strong> {profile.address}</p>

        <div style={{ marginTop: '1rem' }}>
          <button onClick={() => setShowForm(!showForm)} style={{ marginRight: '10px' }}>
            Edit Profile
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Name"
            /><br />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Email"
            /><br />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Phone"
            /><br />
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Address"
            /><br />
            <button type="submit">Save</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default CustomerProfile;
