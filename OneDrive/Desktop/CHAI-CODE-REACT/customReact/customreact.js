// DESIGING RENDER
function customRender(reactElement,container){
    /*
    const domElment=document.createElement(reactElement.type )
    domElment.innerHTML=reactElement.children;
    domElment.setAttribute('href',reactElement.props.href);
    domElment.setAttribute('target',reactElement.props.target);
    
    container.appendChild(domElment)
    */
    const domElment=document.createElement(reactElement.type);
    domElment.innerHTML=reactElement.children;

    for (const prop in reactElement.props) {
        domElment.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElment)


}

// CREATING OWN CUSTOM REACT CLASS
const reactElement={
    type:'a',
    props:{
       href:'https://www.google.com/',
       target:'_blank',
    },
    children:'click me to visit google'
}

const mainContainer=document.querySelector('#root')
customRender(reactElement,mainContainer)