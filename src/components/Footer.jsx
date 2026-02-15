export default function Footer() {
    return (
        <div className="mt-0">
            <div className="text-center">
                <a href="#">
                    <img src="/assets/logonama.png" alt="" className="w-1/3 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/logonama.png" alt="" className="w-1/3 mx-auto mb-2 hidden dark:block" />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:harlangilbran12@com">harlangilbran12@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
               <p className="text-center">
                    © {new Date().getFullYear()} Harlan Gilbran — Full-Stack Web Developer.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a href="https://github.com/harlangilbran">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/harlan-gilbran-b40a41317?">LinkedIn</a></li>
                    <li><a href="https://www.threads.com/@harlan_gilbran10">Thread</a></li>
                </ul>
            </div>
        </div>
    )
}