import AsciiPhone from "~/components/AsciiPhone";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { MailIcon, TextIcon, BookIcon } from "lucide-react";
import { Form } from "react-router";
import { Button } from "~/components/ui/button";
const ContactMe = () => {
  return (
    <section className=" mb-10 ">
      <h1 className="crt-title text-4xl md:text-7xl font-bold">Contact Me</h1>
      <div className="flex max-md:flex-col w-full  md:gap-30 flex-row">
        <div className="flex items-center justify-center">
          <AsciiPhone />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Call Me Maybe :D</CardTitle>
          </CardHeader>
          <div className="p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              molestias, rem officiis cumque adipisci autem magnam deserunt
              iusto ex distinctio suscipit aliquid nam voluptas nihil mollitia,
              hic architecto praesentium? Reprehenderit.
            </p>
            <Form method="post" className="flex flex-col gap-3 mt-5">
              <div>
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
                  placeholder="Enter text"
                />
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
                  type="text"
                  placeholder="Enter text"
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
                  className="h-32 p-2 text-sm focus:outline-none border resize-none overflow-y-auto w-full"
                  placeholder="Enter text"
                />
              </div>
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactMe;
