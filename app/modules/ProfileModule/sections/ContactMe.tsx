import AsciiPhone from "~/components/AsciiPhone";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import {
  MailIcon,
  TextIcon,
  BookIcon,

  UserIcon,
  CheckIcon,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import useWeb3Forms from "@web3forms/react";
import { useState, type FormEvent } from "react";
import { Form } from "react-router";
import { toast } from "sonner";

const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { submit } = useWeb3Forms({
    access_key: import.meta.env.VITE_ACCESS_KEY,
    onSuccess: (successMessage, data) => {
      toast.custom(
        (t) => (
          <div className="bg-black flex flex-row gap-5 items-center shadow-white shadow-sm  border-2 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden font-fira">
            <CheckIcon className="text-white" />
            <p className="text-sm  text-white font-medium">
              Message transmitted <br /> successfully.
            </p>
          </div>
        ),
        { duration: 3000 },
      );
    },
    onError: (message) => {
      console.error("Submission Error:", message);
      toast.error("Transmission Failed: " + message);
    },
  });

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await submit(data);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className=" mb-10 scanlines">
      <h1 className="crt-title text-4xl md:text-7xl font-bold">Contact Me</h1>
      <div className="flex max-lg:flex-col w-full  gap-10 lg:gap-30 flex-row">
        <div className="flex items-center justify-center">
          <AsciiPhone />
        </div>
        <Card className="border-white">
          <CardHeader>
            <CardTitle>Call Me Maybe :D</CardTitle>
          </CardHeader>
          <div className="p-4">
            <p className="max-md:text-sm">
              Hi there (=^･ω･^=)ﾉ <br /> If you have anything you’d like to talk
              about, ask, or even just say hi, feel free to reach out. I’m also
              open to collaborating on projects, events, or competitions—whether
              it’s a small idea or something bigger. Looking forward to
              connecting and seeing what we can create together!
            </p>
            <Form
              method="post"
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-3  mt-5"
            >
              <div className="w-full flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="text-sm flex items-center text-center gap-2"
                  >
                    <MailIcon className="size-4" />
                    <span>Email</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    className="max-md:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex-1">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm flex items-center text-center gap-2"
                    >
                      <UserIcon className="size-4" />
                      <span>Name</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="name"
                      placeholder="Enter your name"
                      className="max-md:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="text-sm flex items-center text-center gap-2"
                >
                  <BookIcon className="size-4" />
                  <span>Subject</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  className="max-md:text-sm"
                  type="text"
                  placeholder="Enter the subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-sm flex items-center text-center gap-2"
                >
                  <TextIcon className="size-4" />
                  <span>Message</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  className="h-32 p-2 max-md:text-sm focus:outline-none border resize-none overflow-y-auto w-full"
                  placeholder="Enter the message"
                />
              </div>
              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </Form>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactMe;
