import styled from "@emotion/styled";
import React from "react";
import logo from "../../asset/img/logo/logo_white.svg"

const EnFooter = () => (
  <footer
    style={{ backgroundColor: "#2d2d2d", color: "#CCC" }}
  >
    <Inner>
      <div>
        <h2>CONTACT</h2>
        <p>If you have a question about us, need more information, or want to <br/>
          make a suggestion, Please use any of the following options to contact us.
        </p>
        <h3 style={{marginTop:"30px"}}>Ariel Trading Co.,Ltd.</h3>
        <dl>
          <dt>Address</dt>
          <dd>3F, Honey Building Aoyama 3-35-8 Jingumae Shibuya-Ku, Tokyo 150-0001 Japan</dd>
        </dl>
        <dl>
          <dt>Phone</dt>
          <dd>+81.3.5786.0482</dd>
        </dl>
        <dl>
          <dt>E-mail</dt>
          <dd>info@arieltrading.co.jp</dd>
        </dl>
      </div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
        <div style={{width:"80px"}} className="img-wrapper"><img style={{width:"100%"}} src={logo}/></div>
        <div style={{color:"#555",marginTop:"8px"}}>© 2020 ArielTrading co.</div>
      </div>
    </Inner>
  </footer>
)

export default EnFooter

const Inner = styled.div`

  /* color: #000; */
  margin: 0 10rem;
  padding: 10rem 0;

  display:flex;
  justify-content:space-between;
  align-items: flex-end;

  h2 {
    font-size: 3rem;
    font-family: latino-urw,serif;
    font-weight: 400;
    letter-spacing: .24rem;
  }

  p {
    margin-top: 1.64rem;
    font-size: 1.2rem;
    letter-spacing: .05em;
    line-height: 1.6;
  }

  h3 {
    font-family: aktiv-grotesk,sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    letter-spacing: .05em;
    margin-bottom: 2.4rem;
    
  }

  dl {
    display:flex;
    align-items: flex-start;
  }

  dt {
    color: #666;
    width: 5rem;
  }

  @media (max-width:770px){
    /* margin: 0 5rem; */
    display: block;
    > div {
      margin-top : 24px;
    }
  }
  @media (max-width:500px){
    margin: 0 2rem;
  }
`

const Row = styled.div`
  display: flex;
`