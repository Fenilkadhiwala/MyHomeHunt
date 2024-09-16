import nodemailer from "nodemailer";
import handlebars from "handlebars";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const POST = async (req: Request, res: Response) => {
  const data: any = await req.json();

  try {
    const templatePath = path.resolve(
      `/app/src/templates/${data?.emailTemplate}`
    );
    const templateSource = await fs.readFile(templatePath, "utf8");

    const template = handlebars.compile(templateSource);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "fenilkadhiwala.co20d1@scet.ac.in",
        pass: "Darshanmeghafall7789",
      },
    });

    const html = template(data.context);

    const mailOptions = {
      from: "fenilkadhiwala.co20d1@scet.ac.in",
      to: data.to,
      subject: data.subject,
      html,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
