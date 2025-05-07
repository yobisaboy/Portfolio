import React, { Component } from 'react';
import profile from '../assets/IMG_8254.jpeg';
import './Profile.css';
import skillData from './skillData';
function Profile() {


    return (
        <div className="profile-container">
            <div className="profile-section">
                <img src={profile} alt="Profile" className="profile-img" />
                <div className="contact-info">
                    <p>Tel: +1 (647) 637-0831</p>
                    <p>Email: yobisaboy@gmail.com</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/yoyoho" target="_blank">Yoyo Ho</a></p>
                    <p>GitHub: <a href="https://github.com/yobisaboy" target="_blank">yobisaboy</a></p>
                </div>
            </div>

            <h4><b>Yoyo Ho</b></h4>
            <p>I am a game developer with a passion for creating immersive experiences.</p>

            <ul>
                <li>Advanced Diploma in Game Programming from Centennial College, Toronto, Canada</li>
                <li>Certificate in Inclusive Leadership Practices from Centennial College, Toronto, Canada</li>
                <li>Bachelor’s Degree in China Studies (Economics) from Hong Kong Baptist University, Hong Kong</li>
            </ul>

            <div>
                {skillData.map((category, index) => (
                    <div key={index}>
                        <h5>{category.category.replace(/^\w/, (c) => c.toUpperCase())}</h5>
                        <div className="skills-container">
                            {category.skills.map((skill, idx) => (
                                <div key={idx} className="skill-box">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <p></p>
            <div class="card-container">

                <div class="card">
                    <h4>Efficient, Responsible & Organized</h4>
                    <p>
                        While working at a healthcare agency, I was responsible for building the entire workflow system for service matching from scratch and establishing a new team.
                        This demonstrates my ability to plan, organize, and allocate resources efficiently.
                        In school, I participated in lots of group projects, where I took the lead in coordinating teammates and managing deadlines, highlighting my time management, responsibility, and communication skills.
                    </p>
                </div>

                <div class="card">
                    <h4>Agile & Growth-minded</h4>
                    <p>
                        My transition from Economics to Game Programming demonstrates that I am capable of quickly acquiring new knowledge.
                        Additionally, my experience working in start-up companies required me to manage different parts of team operations without guidance.
                        This meant I had to independently search for resources to accomplish my tasks.
                        In the fast-changing IT industry, I believe this adaptability is an essential skill for success.
                    </p>
                </div>

                <div class="card">
                    <h4>Analytical & Solution-Oriented</h4>
                    <p>
                        During my studies, I consistently performed well in mathematics and programming, showcasing my strong problem-solving abilities.
                        As a customer service team leader in my past work experience, I was always the last resort for handling complaints.
                        This experience strengthened my problem-solving skills and ability to manage difficult situations effectively.
                    </p>
                </div>

            </div>



        </div>
    );

}
// withRouter will pass updated match, location, and history props 
// to the wrapped component whenever it renders.
export default Profile;