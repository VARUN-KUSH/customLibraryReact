const customRender = (customElement, root) => {
    const htmlElement = document.createElement(customElement.html)
    htmlElement.innerHTML = customElement.children
    for (const prop in customElement.props) {
       htmlElement.setAttribute(prop, customElement.props[prop])
    }
    root.appendChild(htmlElement)
}


const customElement = {
    html: "a",
    children: "click here to visit google",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    }
}

const root = document.querySelector("#root")

customRender(customElement, root)