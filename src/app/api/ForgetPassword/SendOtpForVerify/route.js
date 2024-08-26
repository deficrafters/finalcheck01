import { NextResponse } from 'next/server';
import User from "../../../../Modal/User";
import ForgetPasswordModal from "../../../../Modal/ForgetPasswordModal";
import initDB from "../../../../helper/initDB";
import sgMail from "@sendgrid/mail"
import VerifyToken from '@/Modal/VerifyToken';
import nodemailer from "nodemailer";
import { FROM, HOST, PASS, PORT, SECURE, TLS, USER } from '@/helper/BASE_URL';

initDB()

function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters[randomIndex];
    }
    return token;
}

export async function POST(request) {

    // console.log("====================================================>")
    const { identifier } = await request.json();
    // console.log({ identifier })

    if (!identifier) return NextResponse.json({ message: "You Have Not Provided All The Informations", status: false });
    
    const Find_User_Validity = await User.findOne({ EmailId: identifier }).lean()

    if (!Find_User_Validity) return NextResponse.json({ message: "No User Found With This Email.", status: false });

    const token = generateToken(4);

    var otp = token 

    const Create_ForgetPasswordModal = await ForgetPasswordModal.create({
        RecordOwner: Find_User_Validity._id,
        identifier: identifier,
        otp: token,
        Real_User_Id: Find_User_Validity._id
    })

    if (1 == 1) {

        // Create a transporter using SMTP
        let transporter = nodemailer.createTransport({
			host: HOST,
			port: PORT,
			secure: SECURE, // true for 465, false for other ports
			tls:TLS,
			auth: {
			  user: USER, // Your email address
			  pass: PASS// Your password
			}
		  });


        // Email content
        let mailOptions = {
            from: FROM, // Sender address
            to: identifier, // List of recipients
            subject: 'Verify Your Dream Games Account (Forget Password)', // Subject line
            text: 'Verify Your Dream Games Account (Forget Password)', // Plain text body
			text:`${otp}`
//             html: `
            
//             <!DOCTYPE html>

// <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
// <head>
// <title></title>
// <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
// <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
// <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"/><!--<![endif]-->
// <style>
// 		* {
// 			box-sizing: border-box;
// 		}

// 		body {
// 			margin: 0;
// 			padding: 0;
// 		}

// 		a[x-apple-data-detectors] {
// 			color: inherit !important;
// 			text-decoration: inherit !important;
// 		}

// 		#MessageViewBody a {
// 			color: inherit;
// 			text-decoration: none;
// 		}

// 		p {
// 			line-height: inherit
// 		}

// 		.desktop_hide,
// 		.desktop_hide table {
// 			mso-hide: all;
// 			display: none;
// 			max-height: 0px;
// 			overflow: hidden;
// 		}

// 		.image_block img+div {
// 			display: none;
// 		}

// 		.menu_block.desktop_hide .menu-links span {
// 			mso-hide: all;
// 		}

// 		@media (max-width:660px) {

// 			.desktop_hide table.icons-inner,
// 			.social_block.desktop_hide .social-table {
// 				display: inline-block !important;
// 			}

// 			.icons-inner {
// 				text-align: center;
// 			}

// 			.icons-inner td {
// 				margin: 0 auto;
// 			}

// 			.image_block div.fullWidth {
// 				max-width: 100% !important;
// 			}

// 			.menu-checkbox[type=checkbox]~.menu-links {
// 				display: none !important;
// 				padding: 5px 0;
// 			}

// 			.menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open,
// 			.menu-checkbox[type=checkbox]~.menu-links span.sep {
// 				display: none !important;
// 			}

// 			.menu-checkbox[type=checkbox]:checked~.menu-links,
// 			.menu-checkbox[type=checkbox]~.menu-trigger {
// 				display: block !important;
// 				max-width: none !important;
// 				max-height: none !important;
// 				font-size: inherit !important;
// 			}

// 			.menu-checkbox[type=checkbox]~.menu-links>a,
// 			.menu-checkbox[type=checkbox]~.menu-links>span.label {
// 				display: block !important;
// 				text-align: center;
// 			}

// 			.menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
// 				display: block !important;
// 			}

// 			.mobile_hide {
// 				display: none;
// 			}

// 			.row-content {
// 				width: 100% !important;
// 			}

// 			.stack .column {
// 				width: 100%;
// 				display: block;
// 			}

// 			.mobile_hide {
// 				min-height: 0;
// 				max-height: 0;
// 				max-width: 0;
// 				overflow: hidden;
// 				font-size: 0px;
// 			}

// 			.desktop_hide,
// 			.desktop_hide table {
// 				display: table !important;
// 				max-height: none !important;
// 			}
// 		}

// 		#memu-r0c0m1:checked~.menu-links {
// 			background-color: transparent !important;
// 		}

// 		#memu-r0c0m1:checked~.menu-links a,
// 		#memu-r0c0m1:checked~.menu-links span {
// 			color: #001e3e !important;
// 		}
// 	</style>
// </head>
// <body style="background-color: #fffaf2; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
// <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fffaf2; background-image: none; background-position: top left; background-size: auto; background-repeat: no-repeat;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px; margin: 0 auto;" width="640">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 30px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
// <div align="center" class="alignment" style="line-height:10px">
// <div style="max-width: 128px;"><a href="www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="your-logo" height="auto" src="images/logo_14.png" style="display: block; height: auto; border: 0; width: 100%;" title="your-logo" width="128"/></a></div>
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="menu_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="color:#3f475e;font-family:inherit;font-size:13px;letter-spacing:2px;padding-bottom:10px;padding-top:10px;text-align:center;">
// <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="alignment" style="text-align:center;font-size:0px;"><!--[if !mso]><!--><input class="menu-checkbox" id="memu-r0c0m1" style="display:none !important;max-height:0;visibility:hidden;" type="checkbox"/><!--<![endif]-->
// <div class="menu-trigger" style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;"><label class="menu-label" for="memu-r0c0m1" style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: center; text-align: center; color: #001e3e; text-decoration: none; background-color: transparent; border-radius: 0;"><span class="menu-open" style="mso-hide:all;font-size:26px;line-height:31.5px;">☰</span><span class="menu-close" style="display:none;mso-hide:all;font-size:26px;line-height:36px;">✕</span></label></div>
// <div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#3f475e;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;text-decoration:none;letter-spacing:2px;" target="_self">WOMAN</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#3f475e;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;text-decoration:none;letter-spacing:2px;" target="_self">MEN</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#3f475e;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;text-decoration:none;letter-spacing:2px;" target="_self">KIDS</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:15px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px;display:inline-block;color:#3f475e;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:13px;text-decoration:none;letter-spacing:2px;" target="_self">ACCESSORIES</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9ecdc; color: #000000; width: 640px; margin: 0 auto;" width="640">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="15" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad">
// <div align="center" class="alignment" style="line-height:10px">
// <div style="max-width: 160px;"><a href="www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="stars icon" height="auto" src="images/stars.png" style="display: block; height: auto; border: 0; width: 100%;" title="stars icon" width="160"/></a></div>
// </div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9ecdc; color: #000000; background-position: center top; width: 640px; margin: 0 auto;" width="640">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad" style="padding-top:15px;">
// <div style="color:#2b2d49;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:30px;letter-spacing:2px;line-height:150%;text-align:center;mso-line-height-alt:45px;">
// <p style="margin: 0; word-break: break-word;"><span style="caret-color:#152a6d;"><strong>MEMORIAL </strong></span><span style="caret-color:#152a6d;"><strong>DAY</strong></span></p>
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad">
// <div style="color:#2b2d49;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:22px;letter-spacing:2px;line-height:150%;text-align:center;mso-line-height-alt:33px;">
// <p style="margin: 0; word-break: break-word;"><span><em><span style="caret-color:#152a6d;">special sales</span></em></span></p>
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="image_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
// <div align="center" class="alignment" style="line-height:10px">
// <div class="fullWidth" style="max-width: 576px;"><a href="www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="Independence Day Banner Image" height="auto" src="images/4a328082-4c7f-404e-8b57-701059e5ee2e.png" style="display: block; height: auto; border: 0; width: 100%;" title="Independence Day Banner Image" width="576"/></a></div>
// </div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9ecdc; color: #000000; width: 640px; margin: 0 auto;" width="640">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad">
// <div style="color:#2b2d49;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:30px;line-height:150%;text-align:center;mso-line-height-alt:45px;">
// <p style="margin: 0; word-break: break-word;"><span style="caret-color:#152a6d;"><strong>OTP ${otp}</strong></span></p>
// <p style="margin: 0; word-break: break-word;"><span style="color:#152a6d;"><span style="caret-color:#152a6d;"><span style="color:#a31731;"><strong><span style="color:#a31731;">30%</span> OFF</strong></span></span></span></p>
// </div>
// </td>
// </tr>
// </table>
// <div class="spacer_block block-2" style="height:20px;line-height:20px;font-size:1px;"> </div>
// <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad" style="padding-left:30px;padding-right:30px;">
// <div style="color:#2b2d49;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
// <p style="margin: 0; word-break: break-word;"><span style="color:#2b2d49;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </span></p>
// </div>
// </td>
// </tr>
// </table>
// <div class="spacer_block block-4" style="height:40px;line-height:40px;font-size:1px;"> </div>
// <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad">
// <div style="color:#2b2d49;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:30px;line-height:120%;text-align:center;mso-line-height-alt:36px;">
// <p style="margin: 0; word-break: break-word;"><span style="caret-color:#152a6d;"><strong>SALES START IN</strong></span></p>
// </div>
// </td>
// </tr>
// </table>
// <div class="spacer_block block-6" style="height:20px;line-height:20px;font-size:1px;"> </div>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9ecdc; color: #000000; width: 640px; margin: 0 auto;" width="640">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
// <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad">
// <div style="color:#2b2d49;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:34px;line-height:150%;text-align:center;mso-line-height-alt:51px;">
// <p style="margin: 0; word-break: break-word;"><span style="caret-color:#152a6d;"><strong>48</strong></span></p>
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad">
// <div style="color:#2b2d49;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:15px;line-height:150%;text-align:center;mso-line-height-alt:22.5px;">
// <p style="margin: 0; word-break: break-word;"><span style="caret-color:#152a6d;"><strong>hours</strong></span></p>
// </div>
// </td>
// </tr>
// </table>
// </td>
// <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
// <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad">
// <div style="color:#2b2d49;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:34px;line-height:150%;text-align:center;mso-line-height-alt:51px;">
// <p style="margin: 0; word-break: break-word;"><span style="caret-color:#152a6d;"><strong>5</strong></span></p>
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad">
// <div style="color:#2b2d49;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:15px;line-height:150%;text-align:center;mso-line-height-alt:22.5px;">
// <p style="margin: 0; word-break: break-word;"><span style="caret-color:#152a6d;"><strong>minutes</strong></span></p>
// </div>
// </td>
// </tr>
// </table>
// </td>
// <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
// <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad">
// <div style="color:#2b2d49;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:34px;line-height:150%;text-align:center;mso-line-height-alt:51px;">
// <p style="margin: 0; word-break: break-word;"><span style="caret-color:#152a6d;"><strong>36</strong></span></p>
// </div>
// </td>
// </tr>
// </table>
// <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad">
// <div style="color:#2b2d49;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:15px;line-height:150%;text-align:center;mso-line-height-alt:22.5px;">
// <p style="margin: 0; word-break: break-word;"><span style="caret-color:#152a6d;"><strong>minutes</strong></span></p>
// </div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9ecdc; color: #000000; width: 640px; margin: 0 auto;" width="640">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;"> </div>
// <table border="0" cellpadding="0" cellspacing="0" class="button_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="text-align:center;">
// <div align="center" class="alignment"><!--[if mso]>
// <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.example.com" style="height:48px;width:210px;v-text-anchor:middle;" arcsize="21%" strokeweight="0.75pt" strokecolor="#2B2D49" fillcolor="#2b2d49">
// <w:anchorlock/>
// <v:textbox inset="0px,0px,0px,0px">
// <center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px">
// <![endif]--><a href="https://www.example.com" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#2b2d49;border-radius:9px;width:auto;border-top:1px solid #2B2D49;font-weight:400;border-right:1px solid #2B2D49;border-bottom:1px solid #2B2D49;border-left:1px solid #2B2D49;padding-top:5px;padding-bottom:5px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:2px;"><span style="word-break: break-word; line-height: 32px;">TAKE YOUR PICK</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
// </td>
// </tr>
// </table>
// <div class="spacer_block block-3" style="height:50px;line-height:50px;font-size:1px;"> </div>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px; margin: 0 auto;" width="640">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;"> </div>
// <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
// <div align="center" class="alignment" style="line-height:10px">
// <div style="max-width: 147.2px;"><a href="www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="your-logo" height="auto" src="images/logo_14.png" style="display: block; height: auto; border: 0; width: 100%;" title="your-logo" width="147.2"/></a></div>
// </div>
// </td>
// </tr>
// </table>
// <div class="spacer_block block-3" style="height:20px;line-height:20px;font-size:1px;"> </div>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px; margin: 0 auto;" width="640">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="social_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="padding-left:20px;padding-right:20px;text-align:center;">
// <div align="center" class="alignment">
// <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="168px">
// <tr>
// <td style="padding:0 5px 0 5px;"><a href="https://www.facebook.com" target="_blank"><img alt="Facebook" height="auto" src="images/facebook2x.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
// <td style="padding:0 5px 0 5px;"><a href="https://www.twitter.com" target="_blank"><img alt="Twitter" height="auto" src="images/twitter2x.png" style="display: block; height: auto; border: 0;" title="Twitter" width="32"/></a></td>
// <td style="padding:0 5px 0 5px;"><a href="https://www.instagram.com" target="_blank"><img alt="Instagram" height="auto" src="images/instagram2x.png" style="display: block; height: auto; border: 0;" title="Instagram" width="32"/></a></td>
// <td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com" target="_blank"><img alt="LinkedIn" height="auto" src="images/linkedin2x.png" style="display: block; height: auto; border: 0;" title="LinkedIn" width="32"/></a></td>
// </tr>
// </table>
// </div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px; margin: 0 auto;" width="640">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
// <tr>
// <td class="pad">
// <div style="color:#4a4a4a;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:120%;text-align:center;mso-line-height-alt:16.8px;">
// <p style="margin: 0; word-break: break-word;">Your Street 12, 34567 AB City</p>
// <p style="margin: 0; word-break: break-word;">info@example.com</p>
// <p style="margin: 0; word-break: break-word;">(+1) 123 456 789</p>
// </div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px; margin: 0 auto;" width="640">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="menu_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="pad" style="color:#4a4a4a;font-family:inherit;font-size:14px;text-align:center;">
// <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="alignment" style="text-align:center;font-size:0px;">
// <div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;display:inline-block;color:#4a4a4a;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Unsubscribe</a><!--[if mso]></td><td><![endif]--><span class="sep" style="font-size:14px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;color:#4a4a4a;">| </span><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;display:inline-block;color:#4a4a4a;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;text-decoration:none;letter-spacing:normal;" target="_self">Manage Preferences</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </table>
// <div class="spacer_block block-2" style="height:40px;line-height:40px;font-size:1px;"> </div>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
// <tbody>
// <tr>
// <td>
// <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 640px; margin: 0 auto;" width="640">
// <tbody>
// <tr>
// <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
// <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center;" width="100%">
// <tr>
// <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
// <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
// <tr>
// <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
// <!--[if !vml]><!-->
// <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
// <tr>
// <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Beefree Logo" class="icon" height="auto" src="images/Beefree-logo.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="34"/></a></td>
// <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="http://designedwithbeefree.com/" style="color: #1e0e4b; text-decoration: none;" target="_blank">Designed with Beefree</a></td>
// </tr>
// </table>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table>
// </td>
// </tr>
// </tbody>
// </table><!-- End -->
// </body>
// </html>

            
//             `
        };


        // Send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
          //  console.log('Message sent: %s', info.messageId);
        });


        return NextResponse.json({ message: "Email Send", status: true });

    } else {

        return NextResponse.json({ message: "Please Enter Email ID", status: false });

    }

}