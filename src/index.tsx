import * as React from 'react'
import styles from './styles.module.css'
import Button from '@material-ui/core/Button'
interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <div className={styles.test}>
      Example Component: {text}
      <Button>Click me</Button>
    </div>
  )
}
