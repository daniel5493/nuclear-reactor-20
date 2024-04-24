function Contact() {
    

    return (
        <>
            <div>
                <form action="/">
                    <label htmlFor="name">name:</label><br />
                    <input type="text" id="name" name="name" defaultValue="name" /><br />
                    <label htmlFor="email">email:</label><br />
                    <input type="text" id="email" name="email" defaultValue="email" /><br />
                    <label htmlFor="message">message:</label><br />
                    <input type="text" id="message" name="message" defaultValue="message" /><br /><br />
                    <input type="submit" defaultValue="Submit" />
                </form>
            </div>

        </>
    )
}

export default Contact