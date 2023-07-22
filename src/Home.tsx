import { Fragment, useState } from "react"
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container";
import MarkdownPreviewer from "./components/MarkdownPreviewer";
import MarkdowEditor from "./components/MarkdowEditor";
import { initialMarkdownText } from "./utils/initialMarkdownText";

function Home() {

  const [markdownText, setMarkdownText] = useState<string>(initialMarkdownText);

  return (

    <Fragment>
      <Navbar />
      <main className="pt-20 sm:pt-36 ">
        <Container>
          <section className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-8 py-8" >
            <MarkdowEditor value={markdownText} setMarkdownText={setMarkdownText} />
            <MarkdownPreviewer markdownText={markdownText} />
          </section>
        </Container>
      </main>
    </Fragment>

  )
}

export default Home;
