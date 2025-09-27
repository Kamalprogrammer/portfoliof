import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapIcon, PhoneCallIcon, SendIcon, TwitterIcon } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact"
            className="py-24 px-4 relative bg-secondary/30"

        >
            <div
                className="container mx-auto max-w-5xl"
            >
                <h2
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                >Get In <span className="text-primary">Touch</span></h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto"> Have a project or want to collaborate? feel free to react out. I'm always open to disussing new opportunities.
                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-12">
                        <div className="space-y-8 ">
                            <h3 className="text-2xl font-semibold mb-6">{" "} General Information</h3>
                      
                            <div className="space-y-6 justify-center">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MailIcon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <a href="mailto:kamaldotio@zohomail.in"
                                            className="text-muted-foreground hover:text-primary transition-colors">kamaldotio@zohomail.in</a>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 justify-center">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <PhoneCallIcon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Phone</h4>
                                        <a href="tel:+916267023672"
                                            className="text-muted-foreground hover:text-primary transition-colors">+(91) 6267-023-672</a>
                                    </div>

                                </div>
                            </div>
                            <div className="space-y-6 justify-center">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapIcon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Location</h4>
                                        <a className="text-muted-foreground hover:text-primary transition-colors">Bhopal, Madhya Pradesh, India</a>
                                    </div>

                                </div>
                            </div>
                            <div className="pt-8">
                                <h4 className="font-medium mb-4">Connect With Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a href="https://www.linkedin.com/in/kamal-vishwakarma-b5a900342/" target="_blank"><LinkedinIcon/></a>
                                    <a href="#" target="_blank"><InstagramIcon/></a>
                                    <a href="#" target="_blank"><FacebookIcon/></a>
                                    <a href="#" target="_blank"><TwitterIcon/></a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card p-8 rounded-lg shadow-xs">
                            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                            <form action="" className="space-y-6 ">
                                <div>
                                    <label htmlFor="name"
                                    className="block text-sm font-medium mb-2">Your Name</label>
                                    <input type="text"
                                    id="name"
                                    name="name"
                                    required 
                                    placeholder="Enter Your Name"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden"/>
                                </div>
                                <div>
                                    <label htmlFor="email"
                                    className="block text-sm font-medium mb-2">Your Name</label>
                                    <input type="email"
                                    id="email"
                                    name="email"
                                    required 
                                    placeholder="Enter Your Gmail"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden"/>
                                </div>
                                <div>
                                    <label htmlFor="messgae"
                                    className="block text-sm font-medium mb-2">Your Name</label>
                                    <textarea
                                    id="message"
                                    name="message"
                                    required 
                                    placeholder="What would you like to talk.... "
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden resize-none"/>
                                </div>

                                <button type="submit"
                                className="cosmic-button w-full items-center justify-center gap-20 ">
                                    Send Message  
                                    </button>
                            </form>
                            
                        </div>
                    </div>

                    {/* contact form  */}

                </p>
            </div>

        </section>
    )
}