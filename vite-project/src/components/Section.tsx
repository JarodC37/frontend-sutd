import { ReactElement, ReactNode } from 'react'

type SectionProps = {
    title?: string;
    children: ReactNode;    // ReactNode is term for anything in React, doesn't have to be renderable (unlike ReactElement)
};

const Section = ({children, title="Default title"}: SectionProps ) => {
  return (
    <section>
        <h2>{title}</h2>
        <p>{children}</p>
    </section>
  )
}

export default Section