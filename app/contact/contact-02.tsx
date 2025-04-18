import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact02Page = () => (
  <div className="min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-orange-50 to-amber-50">
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <b className="text-orange-600">Contact Us</b>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-orange-950">
          Chat to our friendly team
        </h2>
        <p className="mt-3 text-base sm:text-lg text-orange-900/80">
          We&apos;d love to hear from you. Please fill out this form or shoot us
          an email.
        </p>
      </div>
      <div className="mt-12 grid lg:grid-cols-2 gap-16 md:gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl text-orange-950">
              Email
            </h3>
            <p className="my-2.5 text-orange-900/70">
              Our friendly team is here to help.
            </p>
            <Link
              className="font-medium text-orange-600 hover:text-orange-700"
              href="mailto:info@kibarua.works"
            >
              info@kibarua.works
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full">
              <MessageCircle />
            </div>
            <h3 className="mt-6 font-semibold text-xl text-orange-950">
              Live chat
            </h3>
            <p className="my-2.5 text-orange-900/70">
              Our friendly team is here to help.
            </p>
            <Link
              className="font-medium text-orange-600 hover:text-orange-700"
              href="https://wa.me/255714530292"
            >
              Start new chat
            </Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl text-orange-950">
              Office
            </h3>
            <p className="my-2.5 text-orange-900/70">
              Come say hello at our office HQ.
            </p>
            <Link
              className="font-medium text-orange-600 hover:text-orange-700"
              href="https://map.google.com"
              target="_blank"
            ></Link>
          </div>
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl text-orange-950">
              Phone
            </h3>
            <p className="my-2.5 text-orange-900/70">
              Mon-Fri from 8am to 5pm.
            </p>
            <Link
              className="font-medium text-orange-600 hover:text-orange-700"
              href="https://wa.me/255714530292"
            >
              +255 714 530 292
            </Link>
          </div>
        </div>

        {/* Form */}
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6 md:p-10">
            <form action="mailto:info@kibarua.works" method="GET">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="firstName" className="text-orange-950">
                    First Name
                  </Label>
                  <Input
                    placeholder="First name"
                    id="firstName"
                    name="firstName"
                    className="mt-1.5 bg-white h-11 shadow-sm border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="lastName" className="text-orange-950">
                    Last Name
                  </Label>
                  <Input
                    placeholder="Last name"
                    id="lastName"
                    name="lastName"
                    className="mt-1.5 bg-white h-11 shadow-sm border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="email" className="text-orange-950">
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    className="mt-1.5 bg-white h-11 shadow-sm border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message" className="text-orange-950">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="mt-1.5 bg-white shadow-sm border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    rows={6}
                  />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox
                    id="acceptTerms"
                    className="border-orange-200 data-[state=checked]:bg-orange-500"
                  />
                  <Label htmlFor="acceptTerms" className="text-orange-900/80">
                    You agree to our{" "}
                    <Link
                      href="#"
                      className="text-orange-600 hover:text-orange-700 underline"
                    >
                      terms and conditions
                    </Link>
                    .
                  </Label>
                </div>
              </div>
              <Button
                type="submit"
                className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white"
                size="lg"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact02Page;
