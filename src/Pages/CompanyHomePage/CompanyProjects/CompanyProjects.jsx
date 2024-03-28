import React, { useState } from 'react'
import './CompanyProjects.css'
import { useNavigate, useParams } from 'react-router-dom';
import { companyCreateProjectApi } from '../../../Api/Company';
import { getOrganisationName } from '../../../Utils/Localstorage';

const CompanyProjects = () => {
  const { organisationName } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    organisationName: getOrganisationName(),
    projectName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    companyCreateProjectApi(formData).then(res=>{
      console.log(res);
      navigate(`/${organisationName}/admin/home`)

    }).catch(err=>{
      console.log(err);
    })

  };

  return (
    <div className='auth_container'>
      <div className='auth_container__inner'>
        <header>Odonine add your project</header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={formData.projectName}
            onChange={handleChange}
            required
          />
          <button className='todo_royalBlue_button' type="submit">Add Project</button>
          {/*<Link className='navigate' to={`/sign-in`}>Signin</Link> */}
        </form>

        <header>Current Projects</header>
        <input
          value="Odinine"
          onChange={handleChange}
          disabled
        />
      </div>
    </div>
  )
}

export default CompanyProjects