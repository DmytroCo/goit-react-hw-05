import React from 'react'
import s from "./NotFoundPage.module.css"
import bg from "../../assets/bg404.jpg"
const NotFoundPage = () => {
  return (
    <img src={bg }  alt="Not Found" className={s.image} />
  )
}

export default NotFoundPage