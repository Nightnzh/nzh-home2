import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';
import React, { MouseEventHandler, useState } from 'react'


const Contact = () => {

  const [step, setStep] = useState(1)

  const handleOnClick = () => {
    if(step === 3) {
      setStep(1)
      return
    }
    setStep(step +1)
  }

  return (
    <Box
      className="contact"
      sx={{ padding: "15rem 0", bgcolor: "#b49288" }}
    >

      <Inner>

        <div>
          <div style={{ display: "inline-block", width: "30px", height: "1px", backgroundColor: "#881232", marginBottom: "5rem" }}></div>
          <Tit>CONTACT</Tit>
        </div>
        <div>
          <div style={{}}>
            {formData.map(value => (<FromItemTit className={step == value.step ? "current-tit" : ""}>{`${value.step} ${value.formName}`}</FromItemTit>))}
          </div>
          <div className="line" style={{ height: "0.5px", backgroundColor: "#aaa", margin: "5rem 0" }}></div>

          <FormView step={step} handleOnClick={()=>{handleOnClick(); console.log("ette");}}></FormView>
          <div>
            <Button onClick={() => { if (step === 3) { setStep(1); return } setStep(step + 1) }}>Next Step</Button>
          </div>
        </div>
      </Inner>
    </Box>
  )
}

export default Contact;


type FormProps = {
  step: number,
  handleOnClick :  MouseEventHandler<HTMLDivElement>
}

const FormView = (formProps: FormProps) => {
  switch (formProps.step) {
    case 1:
      return <FromOne step={formProps.step} handleOnClick={formProps.handleOnClick} />
    default:
      return <div style={{backgroundColor:"#222",color:"white",textAlign:"center",height:"600px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"60px"}}>Step:  {formProps.step}</div>
  };
}


const FromOne = (formProps: FormProps) => (
  <form>
    <div className="form-info" style={{ marginBottom: "4rem", fontSize: "1.2rem" }}><span style={{ color: "red" }}>*</span>{formData[formProps.step - 1].info}</div>
    <div className="switch-group-one">
      <div>お問い合わせ種別1<span style={{ color: "red" }}>*</span></div>
      <div style={{ display: "flex", marginBottom: "2rem" }}>
        <RadioInput name={"type1"} text={"法人のお問い合わせ"} />
        <RadioInput name={"type1"} text={"個人のお問い合わせ"} />
        <RadioInput name={"type1"} text={"PRのお問い合わせ"} />
      </div>
    </div>
    <div>お問い合わせ種別2<span style={{ color: "red" }}>*</span></div>
    <div style={{ display: "flex", marginBottom: "2rem" }}>
      <RadioInput name={"type2"} text={"取り扱い商品について"} />
      <RadioInput name={"type2"} text={"採用について"} />
      <RadioInput name={"type2"} text={"お仕事の相談"} />
      <RadioInput name={"type2"} text={"その他"} />
    </div>
    <div>
      <TextInput tit={"お名前"} placeholder={"例）山田太郎"} />
      <TextInput tit={"フリガナ"} placeholder={"例）ヤマダタロウ"} />
      <TextInput tit={"会社名"} placeholder={"例）株式会社アリエルトレーディング"} />
      <TextInput tit={"メールアドレス"} placeholder={"info@arieltrading.co.jp"} />
      <div>
        <div style={{ marginBottom: "11px" }}>お問い合わせ内容<span style={{ color: "red" }}>*</span></div>
        <MyTextArea />
      </div>
    </div>
    <div style={{ margin: "5rem 0" }}>
      <div>ファイルをアップロード</div>
      <div style={{ display: "inline-block", marginTop: "8px", color: "white", padding: "1rem 4rem", background: "#2d2d2d" }}>ファイルを選択</div>
      <InputFileText>※1OMB以内のPDF/JPG/PNGファイルに対応しています。</InputFileText>
    </div>

    <div style={{ color: "#555", fontSize: "11px" }}>
      <div className="line" style={{ height: "0.5px", backgroundColor: "#aaa", margin: "2rem 0" }}></div>
      <div>*17：00時以降は受付のみとさせていただき、お返事は翌日以降となります。</div>
      <div>*お急ぎの場合にはお電話にてお問い合わせください。</div>
      <div>*お問い合わせの内容によっては、お返事にお時間をいただく場合やお返事を差し上げられない場合がございます。</div>
      <div>あらかじめご了承くださいますようお願いいたします。</div>
      <div className="line" style={{ height: "0.5px", backgroundColor: "#aaa", margin: "2rem 0" }}></div>
    </div>

    <div
    style={{display:"inline-block",cursor:"pointer",marginTop:"40px",padding:"30px 60px",color:"white",backgroundColor:"#2d2d2d"}}  
    onClick={formProps.handleOnClick}>
    内容を確認する
    </div>


  </form>
)

type TextInputProps = {
  tit: string,
  placeholder: string
}

const InputFileText = styled.div`
  font-size: 11px;
  font-family: dnp-shuei-gothic-gin-std,sans-serif;
  font-weight: 300;
  margin-top: 20px;
`

const TextInput = (textInputProps: TextInputProps) => (
  <div style={{ marginBottom: "20px" }}>
    <div style={{ marginBottom: "11px" }}>{textInputProps.tit}<span style={{ color: "red" }}>*</span></div>
    <MyInputText type="text" placeholder={textInputProps.placeholder} />
  </div>
)

const MyInputText = styled.input`
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-family: dnp-shuei-gothic-gin-std,sans-serif;
  font-weight: 500;
  padding: 0 0 0 30px;
  box-sizing: border-box;
  border: none;
  outline: 0;
  border-radius: 0;
  color: #282828;
`

const MyTextArea = styled.textarea`
  border-radius: 0;
  border: none;
  width: 100%;
  height: 204px;
  appearance: none;
  padding: 21px 30px;
  font-size: 18px;
  box-sizing: border-box;
`

type RadioInputProps = {
  name: string,
  text: string
}

const RadioInput = (radioInputProps: RadioInputProps) => (
  <div style={{ display: "flex", alignItems: "center", paddingRight: "2rem", margin: "10px 0" }}>
    <input style={{}} type={"radio"} name={radioInputProps.name}></input>
    <div>{radioInputProps.text}</div>
  </div>
)

const Inner = styled.div`
  margin:0 10rem;
  display: flex;
  justify-content: space-between;
  > :nth-child(1)  {
    flex: 3
  }
  > :nth-child(2)  {
    flex: 7
  }
  @media (max-width:770px) {
    margin:0 5rem;  
  }
  @media (max-width:500px) {
    margin:0 2rem;
    display: block;
    > div {
      margin-bottom: 5rem
    }
  }
`

const Tit = styled.div`
  font-family: latino-urw,serif;
  font-weight: 500;
  font-size: 2.4rem;
  letter-spacing: .15em;
  font-feature-settings: initial;
  transform-origin: top;
  white-space: pre;
`

const MyForm = styled.form`
  width: 65%;
  /* display: inline-block; */
  font-family: dnp-shuei-gothic-gin-std,sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  margin-left: 1.2rem;
  @media (max-width:500px) {
    width:100%;
  }
`


const FromItemTit = styled.div`
  display: inline;
  color: #888;
  margin-right:4rem;
  &.current-tit {
    color : #000
  }
`


const formData = [
  {
    step: 1,
    formName: "項目の入力",
    info: "が付いている項目は入力が必須になります。"
  },
  {
    step: 2,
    formName: "内容の確認"
  },
  {
    step: 3,
    formName: "送信完了"
  },
]