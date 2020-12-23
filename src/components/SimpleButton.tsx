import { FC } from "react"
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export interface Props {
  label: string
}

const cnButton = css`
  width: 100px;
  height: 40px;
  margin: 20px;
  background-color: tomato;
`

export const Button: FC<Props> = (props) => {
  const {label} = props
  return <button css={cnButton}>{label}</button>
}
