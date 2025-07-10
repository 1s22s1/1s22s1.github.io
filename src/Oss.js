import { Container } from "@mui/material";

const Oss = () => {
    const ossArr = [
        { href: "https://github.com/terrastruct/d2/issues/507", title: "n is lack in svg" },
        { href: "https://github.com/ruby/csv/issues/237", title: "CSV::Table#headers returns[:\\\"\\\", :\\\"\\\"] when header is Japanese" },
        { href: "https://github.com/JuliaLang/julia/issues/56208", title: "Using length() in the conditional expression for while is slow" },
        { href: "https://github.com/microsoft/vscode/issues/231562", title: "terminal.integrated.enableMultiLinePasteWarning is setted to false" },
        { href: "https://github.com/ruby/rss/pull/59", title: "Simplify sample code" },
    ];

    return (
        <Container>
            <h1>OSS</h1>

            <ul>
                {ossArr.map(e => <li><a href={e.href}>{e.title}</a></li>)}
            </ul>
        </Container>
    )
}

export default Oss;
