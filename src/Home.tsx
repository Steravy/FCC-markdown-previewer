import { Fragment, useState } from "react"
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container";
import MarkdownPreviewer from "./components/MarkdownPreviewer";

function Home() {

  const [count, setCount] = useState(0);

  return (

    <Fragment>
      <Navbar />
      <main className="pt-20">
        <Container>
          <MarkdownPreviewer />
        </Container>
      </main>
    </Fragment>

  )
}

export default Home
