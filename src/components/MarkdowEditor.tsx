import { useCallback } from "react";

interface MarkdownPreviewerProps {
    setMarkdownText: React.Dispatch<React.SetStateAction<string>>;
    value: string;
}

const MarkdowEditor: React.FC<MarkdownPreviewerProps> = ({ setMarkdownText, value }: MarkdownPreviewerProps) => {

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.stopPropagation();

        setMarkdownText(e.target.value);

    }, [])

    return (

        <section className='w-full col-span-1'>
            <textarea
                value={value}
                onChange={handleChange}
                name="markdown editor"
                id="editor"
                className=" p-4 rounded-lg overflow-auto w-[100%] h-[70vh]"
            ></textarea>
        </section>
    )
}

export default MarkdowEditor;