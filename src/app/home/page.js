import { MODELS_GLTF } from '@/constants/view-paths.constants'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="home-container">
      <div className="linktree-container">
        <div className="logo">
          <img src="images/ZentroidLogo.png" alt="Zentroid Studios" />
        </div>
        <div className="socials">
          <a href="https://www.instagram.com/zentroid.studios/" target="_blank"><i className="fab fa-instagram fa-xl"></i></a>
          <a href="https://www.linkedin.com/company/zentroid-studios/" target="_blank"><i
            className="fab fa-linkedin fa-xl"></i></a>
        </div>
        <div className="button-list">

          {Object.keys(MODELS_GLTF).map((item, index) => (
            <Link key={index + MODELS_GLTF[item].name} href={'/viewer/' + MODELS_GLTF[item].name} className="btn">
              {MODELS_GLTF[item].label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
