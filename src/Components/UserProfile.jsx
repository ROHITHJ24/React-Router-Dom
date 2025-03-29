import React from 'react';
import profilePicture from '/assets/avatar.webp'

const developers = [
  {
    id: 7,
    name: 'Monish',
    email: 'monish@example.com',
    bio: 'Driving the company forward.',
    age: 35,
    role: 'CEO',
    profilePicture: 'https://via.placeholder.com/150?text=Monish',
  },
  {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    bio: 'Passionate Full Stack Developer.',
    age: 25,
    role: 'Full Stack Developer',
    profilePicture: 'https://via.placeholder.com/150?text=John',
  },
  {
    id: 2,
    name: 'Rohith',
    email: 'rohith@example.com',
    bio: 'Building seamless web applications.',
    age: 27,
    role: 'Full Stack Developer',
    profilePicture: 'https://via.placeholder.com/150?text=Rohith',
  },
  {
    id: 3,
    name: 'Midhun',
    email: 'midhun@example.com',
    bio: 'Specializes in backend development.',
    age: 26,
    role: 'Full Stack Developer',
    profilePicture: 'https://via.placeholder.com/150?text=Midhun',
  },
  {
    id: 4,
    name: 'Rathish',
    email: 'rathish@example.com',
    bio: 'Frontend enthusiast with an eye for design.',
    age: 24,
    role: 'Full Stack Developer',
    profilePicture: 'https://via.placeholder.com/150?text=Rathish',
  },
  {
    id: 5,
    name: 'Santhosh',
    email: 'santhosh@example.com',
    bio: 'Leading the team to build great products.',
    age: 30,
    role: 'Developer & Team Lead',
    profilePicture: 'https://via.placeholder.com/150?text=Santhosh',
  },
  {
    id: 6,
    name: 'Hari',
    email: 'hari@example.com',
    bio: 'Bringing innovation to web solutions.',
    age: 28,
    role: 'Full Stack Developer',
    profilePicture: 'https://via.placeholder.com/150?text=Hari',
  },
];

function UserProfile() {
  return (
    <div className="user-profiles">
      <h1>Meet Our Team</h1>
      <div className="profiles-container">
        {developers.map((user) => (
          <div key={user.id} className="profile-card">
            <img src={profilePicture} alt={user.name} className="profile-picture" />
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Bio:</strong> {user.bio}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
