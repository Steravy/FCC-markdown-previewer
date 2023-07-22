import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownPreviewerProps {
    markdownText: string
}

const MarkdownPreviewer: React.FC<MarkdownPreviewerProps> = ({ markdownText }: MarkdownPreviewerProps) => {

    return (

        <section id="preview" className="col-span-1 overflow-auto h-[75vh] border rounded-lg md:border-white p-4" >
            <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]}  />
        </section>
    )
}

export default MarkdownPreviewer;