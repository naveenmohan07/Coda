exports.sendmail=(result=>{
	const mailgun = require("mailgun-js");
	const domain = "sandbox30d037f959af4daea167b56fd412d325.mailgun.org";
	const mg = mailgun({apiKey: "4e407448a1b78cada71a21b62f0f088b-1b6eb03d-dff34cae", domain: domain});
	console.log(result.email)
	const data = {
		from: "Naveen_Mohan <postmaster@sandbox30d037f959af4daea167b56fd412d325.mailgun.org>",
		to: result.email,
		subject: "Welcome"+ "" +result.username,
		html:"<p>Account created successfully..!!</p><hr></br><p>With regards,</p><b>Naveen - MEAN Stack Developer<mat-icon>heart</mat-icon></b><p>Date:Date.now()"
	};
	mg.messages().send(data).then((sent)=>{
		console.log("Mail Sent Successfully")
	}).catch((err)=>{
		console.log("Error Occured")
	})
})