import { BriefcaseIcon, CodeIcon, UserIcon } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2
                    className="text-3xl md:4xl font-bold mb-2 text-center"
                >About <span className="text-primary">Me</span>
                </h2>
                <hr className="relative mb-12 " />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 ">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator

                        </h3>
                        <p className="text-muted-foreground "> MERN Stack Developer with a B.Tech in Computer Science & Engineering, experienced in building scalable, production-ready full-stack web applications. Strong command over JavaScript and Python with solid knowledge of core CSE subjects like DSA and DBMS. Proficient in MongoDB, Express.js, React.js, and Node.js, focused on clean architecture, performance optimization, and modern UI/UX practices.
                        </p>

                        <p className="text-muted-foreground hidden sm:block ">
                            I'm passionate about creating elegant solutions to complex
                            problems, and I'm constantly learning new technologies and
                            techniques to stay at the forefront of the ever-evolving web
                            landscape.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 mb-10 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="https://drive.google.com/file/d/1owdqOpSuaELqbwuQszr2bt2p9Nvczmid/view?usp=sharing" className="px-6 py-2  rounded-full border border-primary hover:bg-primary/10 ">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gredient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <CodeIcon className=" h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive websites and web application with modern framworks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gredient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <UserIcon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground"> Designing intuitive user interfaces and seamless user
                                        experiences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gredient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className=" p-3 rounded-full bg-primary/10">
                                    <BriefcaseIcon className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">Leading projects from conception to completion with agile
                                        methodologies.</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>


            </div>

        </section>
    )
}