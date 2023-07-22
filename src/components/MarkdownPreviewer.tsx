import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownPreviewerProps {
    markdownText: string
}

const MarkdownPreviewer: React.FC<MarkdownPreviewerProps> = ({ markdownText }: MarkdownPreviewerProps) => {

    return (

        <section id="preview" className="w-full col-span-1" >
            <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]}  />
        </section>
    )
}

export default MarkdownPreviewer;