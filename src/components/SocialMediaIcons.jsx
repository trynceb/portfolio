

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a 
                className="hover:opacity-50 transitions duration-500"
                href="https://www.linkedin.com/in/trynce/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src={require("../assets/linkedin.png")} />
            </a>
            <a 
                className="hover:opacity-50 transitions duration-500"
                href="https://www.instagram.com/trynce/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" src={require("../assets/instagram.png")} />
            </a>
        </div>
    )
}

export default SocialMediaIcons