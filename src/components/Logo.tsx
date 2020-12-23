import { FC } from "react"
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export interface Props {
  type?: 'SMALL_PNG' | 'LARGE_PNG' | 'SVG' | 'BACKGROUND'
}

const cnImg = css`
  width: 100px;
`
const cnBackgroundImg = css`
  width: 100px;
  height: 100px;
  background-color: red;
  background-size: cover;
  background-image: url(./ui-assets/logo512.png);
`

const LogoLargePng: FC = (props) =>
  <div css={cnImg}>
    <img src={'./ui-assets/logo512.png'} className="App-logo" alt="logo" />
  </div>

const LogoSmallPng: FC = (props) =>
  <div css={cnImg}>
    <img src={'./ui-assets/logo192.png'} className="App-logo" alt="logo" />
  </div>

const LogoSVG: FC<Props> = (props) =>
  <div css={cnImg}>
    <img src={'./ui-assets/logo.svg'} className="App-logo" alt="logo" />
  </div>

const LogoBackground: FC = (props) =>
  <div css={cnImg}>
    <div css={cnBackgroundImg}/>
  </div>

export const Logo: FC<Props> = (props) => {
  const {type='SMALL_PNG'} = props

  if (type === 'SMALL_PNG') return <LogoSmallPng/>
  else if (type === 'LARGE_PNG') return <LogoLargePng/>
  else if (type === 'SVG') return <LogoSVG/>
  else if (type === 'BACKGROUND') return <LogoBackground/>

  return <div>error. unknown type: {type}</div>
}

