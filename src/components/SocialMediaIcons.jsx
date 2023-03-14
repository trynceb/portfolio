

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a 
                className="hover:opacity-50 transitions duration-500"
                href="https://www.linkedin.com/in/trynce/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" className="w-9 mt-0.5" src={require("../assets/linkedin.png")} />
            </a>
            <a 
                className="hover:opacity-50 transitions duration-500"
                href="https://www.instagram.com/trynce/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" className="w-11 -mt-0.5" src={require("../assets/instagram.png")} />
            </a>
            <a 
                className="hover:opacity-50 transitions duration-500"
                href="https://github.com/trynceb"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="github-link" className="w-10" src={require("../assets/github.png")} />
            </a>
        </div>
    )
}

export default SocialMediaIcons