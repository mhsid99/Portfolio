import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/React.webp';
import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';
import Cpp from '../assets/C++.png';
import Python from '../assets/Python.png';
import Arduino from '../assets/arduino.png';
import Git from '../assets/git.png';
import sql from '../assets/sql.png';
import ill from '../assets/ill.png';

const Skills = () => {
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font" style={{ fontFamily: "Raleway"}}>
      <div className='max-w-screen-xl mx-auto p-4'>
        <div className="text-center py-8">
            <p className='text-4xl font-bold inline border-b-4 border-green-600 text-white '>Tools & Technologies</p>
            <div className=" mb-11"/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center'>
          <SkillCard imgSrc={HTML} title="HTML" />
          <SkillCard imgSrc={CSS} title="CSS" />
          <SkillCard imgSrc={JavaScript} title="JavaScript" />
          <SkillCard imgSrc={ReactImg} title="React" />
          <SkillCard imgSrc={Node} title="Node JS" />
          <SkillCard imgSrc={Mongo} title="Mongo DB" />
          <SkillCard imgSrc={Cpp} title="C++" />
          <SkillCard imgSrc={Python} title="Python" />
          <SkillCard imgSrc={Arduino} title="Arduino" />
          <SkillCard imgSrc={Git} title="GIT" />
          <SkillCard imgSrc={sql} title="SQL" />
          <SkillCard imgSrc={ill} title="Adobe Illustrator" />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ imgSrc, title }) => {
  return (
    <div className='shadow-md hover:scale-110 transform transition duration-100'>
      <img src={imgSrc} alt={`${title} icon`} className="w-20 mx-auto" />
      <p className='my-4'>{title}</p>
    </div>
  );
};

export default Skills;
