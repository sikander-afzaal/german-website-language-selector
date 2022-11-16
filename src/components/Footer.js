import React from 'react'
import {Link} from 'react-router-dom'

const Footer = ({shortPage}) => {

    let addScrollBar = () =>{
        document.body.classList.add('overflow-auto');
        document.body.classList.remove('overflow-hidden');
      }

  return (
    <>
    <div className={`footerCont ${shortPage ? "footerForShortPages" : ""}`}>
          <div
              className="hidden lg:flex container mx-auto flex-col space-y-10 flex-wrap lg:flex-row lg:space-x-10 lg:space-y-0">
              <div className="flex-1 flex items-center">
                  <a onClick={addScrollBar} href="/" className="logo-container">
                      <img src="/img/logo.png" alt="logo" className="logo"/>
                      <span className="logo-title">Aktenplatz</span>
                  </a>
              </div>
              <div className="flex-2 flex items-center lg:justify-center">
                  <ul className="footer-menu">
                      {/* <!-- <li>
                          <a href="#">Nutzungsbedingungen</a>
                      </li> --> */}
                      <li>
                          <a href="https://us14.list-manage.com/contact-form?u=a531a42292891e37713ff60e7&form_id=d0332b5873e701f64afb75ea602f3833"
                              target="_blank" rel="noreferrer">Kontakt</a>
                      </li>
                      <li>
                          <a href="https://images.aktenplatz.de/datenschutz.html" target="_blank" rel="noreferrer">Datenschutzerklärung</a>
                      </li>
                      <li>
                          <a href="https://images.aktenplatz.de/Hosting-AGB_B2B.html" target="_blank" rel="noreferrer">AGB</a>
                      </li>
                      <li>
                          <Link onClick={addScrollBar} to="/impressum">Impressum</Link>
                      </li>
                      <li>
                          <a href="http://status.aktenplatz.de" target="_blank" rel="noreferrer">Status</a>
                      </li>
                  </ul>
              </div>
              <div className="flex-1 flex items-center justify-end">
                  <ul className="footer-socials">
                      <li>
                          <a href="https://www.facebook.com/Aktenplatzde-100400415944407" target="_blank" rel="noreferrer">
                              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="18" cy="18" r="17.5" stroke="white" />
                                  <g clipPath="url(#clip0_28_12804)">
                                      <path
                                          d="M15.6113 27C16.8522 26.9958 18.0973 26.9494 19.3383 26.8734V18.1034H21.8118L22.1117 14.9522H19.3424V12.9527C19.3424 12.5097 19.6964 12.1512 20.1336 12.1512H22.1158V9H18.9843C17.1146 9 15.6113 10.5271 15.6113 12.4085V14.9522H13.7998V18.1034H15.6113V27Z"
                                          fill="white" />
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_28_12804">
                                          <rect width="8.30769" height="18" fill="white"
                                              transform="translate(13.7998 9)" />
                                      </clipPath>
                                  </defs>
                              </svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/company/aktenplatz" target="_blank" rel="noreferrer">
                              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="18" cy="18" r="18" fill="#FB5D1E" />
                                  <g clipPath="url(#clip0_28_12798)">
                                      <path
                                          d="M27 27.0002V20.4002C27 17.1752 26.325 14.7002 22.5 14.7002C20.7 14.7002 19.5 15.6752 18.975 16.6502H18.9V15.0002H15.375V27.0002H19.125V21.0752C19.125 19.5002 19.425 18.0002 21.375 18.0002C23.25 18.0002 23.325 19.8002 23.325 21.1502V27.0002H27Z"
                                          fill="white" />
                                      <path d="M9.2998 15H13.0498V27H9.2998V15Z" fill="white" />
                                      <path
                                          d="M11.175 9C9.975 9 9 9.975 9 11.175C9 12.375 9.975 13.35 11.175 13.35C12.375 13.35 13.35 12.375 13.35 11.175C13.35 9.975 12.375 9 11.175 9Z"
                                          fill="white" />
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_28_12798">
                                          <rect width="18" height="18" fill="white" transform="translate(9 9)" />
                                      </clipPath>
                                  </defs>
                              </svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://twitter.com/aktenplatz" target="_blank" rel="noreferrer">
                              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="18" cy="18" r="17.5" stroke="white" />
                                  <path
                                      d="M27 12.5402C26.3592 12.8748 25.3894 13.0336 25.0718 13.079C25.0718 13.0619 25.0662 13.0506 25.0662 13.0336C26.1493 12.3531 26.4839 11.0829 26.4839 11.0829C25.8091 11.4685 25.2136 11.684 24.7656 11.803C24.5161 11.8711 24.3062 11.9051 24.1588 11.9278C23.4783 11.2303 22.5312 10.7993 21.482 10.7993C19.4178 10.7993 17.7391 12.4722 17.7391 14.542C17.7391 14.6157 17.7391 14.6894 17.7448 14.7632C17.7561 14.9446 17.7788 15.1204 17.8129 15.2905C16.8147 15.2735 13.2023 14.9673 10.2079 11.4911C10.2079 11.4911 8.54064 14.4002 11.3422 16.385C11.3422 16.385 10.2079 16.351 9.60681 15.9257C9.60681 15.9257 9.431 18.727 12.6578 19.6116C12.6578 19.6116 11.5236 19.8952 10.9565 19.6457C10.9565 19.6457 11.5236 22.0557 14.3592 22.2315C14.3592 22.2315 12.3233 24.0915 9 23.825C10.6333 24.8571 12.5728 25.4582 14.6484 25.4582C20.4896 25.4582 25.225 20.7231 25.225 14.8822C25.225 14.8085 25.225 14.7348 25.225 14.6611C25.225 14.6157 25.225 14.576 25.225 14.5307C25.225 14.5023 25.225 14.4683 25.225 14.4399C26.3025 13.7311 27 12.5402 27 12.5402Z"
                                      fill="white" />
                              </svg>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
  
          {/* <!-- mobile --> */}
          <div
              className="flex lg:hidden container mx-auto flex-col space-y-10 flex-wrap lg:flex-row lg:space-x-10 lg:space-y-0">
              <div className="flex flex-1 flex-wrap">
                  <div className="flex-1 flex items-center">
                      <a onClick={addScrollBar} href="/" className="logo-container">
                          <img src="/img/logo.png" alt="logo" className="logo"/>
                          <span className="logo-title">Aktenplatz</span>
                      </a>
                  </div>
                  <div className="flex-1 flex items-center justify-end">
                      <ul className="footer-socials">
                          <li>
                              <a href="https://www.facebook.com/Aktenplatzde-100400415944407" target="_blank" rel="noreferrer">
                                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="18" cy="18" r="17.5" stroke="white" />
                                      <g clipPath="url(#clip0_28_12804)">
                                          <path
                                              d="M15.6113 27C16.8522 26.9958 18.0973 26.9494 19.3383 26.8734V18.1034H21.8118L22.1117 14.9522H19.3424V12.9527C19.3424 12.5097 19.6964 12.1512 20.1336 12.1512H22.1158V9H18.9843C17.1146 9 15.6113 10.5271 15.6113 12.4085V14.9522H13.7998V18.1034H15.6113V27Z"
                                              fill="white" />
                                      </g>
                                      <defs>
                                          <clipPath id="clip0_28_12804">
                                              <rect width="8.30769" height="18" fill="white"
                                                  transform="translate(13.7998 9)" />
                                          </clipPath>
                                      </defs>
                                  </svg>
                              </a>
                          </li>
                          <li>
                              <a href="https://www.linkedin.com/company/aktenplatz" target="_blank" rel="noreferrer">
                                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="18" cy="18" r="18" fill="#FB5D1E" />
                                      <g clipPath="url(#clip0_28_12798)">
                                          <path
                                              d="M27 27.0002V20.4002C27 17.1752 26.325 14.7002 22.5 14.7002C20.7 14.7002 19.5 15.6752 18.975 16.6502H18.9V15.0002H15.375V27.0002H19.125V21.0752C19.125 19.5002 19.425 18.0002 21.375 18.0002C23.25 18.0002 23.325 19.8002 23.325 21.1502V27.0002H27Z"
                                              fill="white" />
                                          <path d="M9.2998 15H13.0498V27H9.2998V15Z" fill="white" />
                                          <path
                                              d="M11.175 9C9.975 9 9 9.975 9 11.175C9 12.375 9.975 13.35 11.175 13.35C12.375 13.35 13.35 12.375 13.35 11.175C13.35 9.975 12.375 9 11.175 9Z"
                                              fill="white" />
                                      </g>
                                      <defs>
                                          <clipPath id="clip0_28_12798">
                                              <rect width="18" height="18" fill="white" transform="translate(9 9)" />
                                          </clipPath>
                                      </defs>
                                  </svg>
                              </a>
                          </li>
                          <li>
                              <a href="https://twitter.com/aktenplatz" target="_blank" rel="noreferrer">
                                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="18" cy="18" r="17.5" stroke="white" />
                                      <path
                                          d="M27 12.5402C26.3592 12.8748 25.3894 13.0336 25.0718 13.079C25.0718 13.0619 25.0662 13.0506 25.0662 13.0336C26.1493 12.3531 26.4839 11.0829 26.4839 11.0829C25.8091 11.4685 25.2136 11.684 24.7656 11.803C24.5161 11.8711 24.3062 11.9051 24.1588 11.9278C23.4783 11.2303 22.5312 10.7993 21.482 10.7993C19.4178 10.7993 17.7391 12.4722 17.7391 14.542C17.7391 14.6157 17.7391 14.6894 17.7448 14.7632C17.7561 14.9446 17.7788 15.1204 17.8129 15.2905C16.8147 15.2735 13.2023 14.9673 10.2079 11.4911C10.2079 11.4911 8.54064 14.4002 11.3422 16.385C11.3422 16.385 10.2079 16.351 9.60681 15.9257C9.60681 15.9257 9.431 18.727 12.6578 19.6116C12.6578 19.6116 11.5236 19.8952 10.9565 19.6457C10.9565 19.6457 11.5236 22.0557 14.3592 22.2315C14.3592 22.2315 12.3233 24.0915 9 23.825C10.6333 24.8571 12.5728 25.4582 14.6484 25.4582C20.4896 25.4582 25.225 20.7231 25.225 14.8822C25.225 14.8085 25.225 14.7348 25.225 14.6611C25.225 14.6157 25.225 14.576 25.225 14.5307C25.225 14.5023 25.225 14.4683 25.225 14.4399C26.3025 13.7311 27 12.5402 27 12.5402Z"
                                          fill="white" />
                                  </svg>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="flex-2 flex items-center lg:justify-center">
                  <ul className="footer-menu">
                      {/* <!-- <li>
                          <a href="#">Nutzungsbedingungen</a>
                      </li> --> */}
                      <li>
                          <a href="https://us14.list-manage.com/contact-form?u=a531a42292891e37713ff60e7&form_id=d0332b5873e701f64afb75ea602f3833"
                              target="_blank" rel="noreferrer">Kontakt</a>
                      </li>
                      <li>
                          <a href="https://images.aktenplatz.de/datenschutz.html" target="_blank" rel="noreferrer">Datenschutzerklärung</a>
                      </li>
                      <li>
                          <a href="https://images.aktenplatz.de/Hosting-AGB_B2B.html" target="_blank" rel="noreferrer">AGB</a>
                      </li>
                      <li>
                          <Link onClick={addScrollBar} to="/impressum">Impressum</Link>
                      </li>
                      <li>
                          <a href="http://status.aktenplatz.de" target="_blank" rel="noreferrer">Status</a>
                      </li>
                  </ul>
              </div>
          </div>
  
          <div className="container mx-auto border-t border-gray pt-6 mt-10 text-center text-white text-sm lg:text-base">
              <a href="/#" className="text-orange">Aktenplatz.de</a> All rights reserved.
          </div>
      </div>
    </>
  )
}

export default Footer