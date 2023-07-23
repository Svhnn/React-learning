//React usually has PascalCasing not camelCasing
function Message() {
    const name = 'Sven';
    if (name) {
        return <h1>Hello {name}</h1>;
    }
    else {
        return <h1>Hello Stranger</h1>;
    }
    
}

export default Message;