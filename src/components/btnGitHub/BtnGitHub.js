import './style.css'
import icon from './../../img/icons/gitHub-black.svg'
import React from 'react'

function BtnGitHub({ link }) {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={icon} alt="" />
        GitHub repo
      </a>
    </>
  )
}

export default BtnGitHub
