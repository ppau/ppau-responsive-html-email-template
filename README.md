# Pirate Party Australia - Responsive HTML email template

The purpose of this repository is to hold a responsive HTML email template that can be rendered into various other template formats needed for Party email communications and systems.

The `variables.json` file contains the configuration, this is where each template for other systems or applications can define a search and replace based on the HTML comment tag format found in `email.html`. The variables are rendered into a copy of `email.html`, the css style is then applied as inline on styled elements, with the final result saved in the automatically created `build` directory where it can then be updated into other systems or applications as needed.

### Developer setup

1. Checkout the repository to you local system

0. Run the `npm install` command

0. Run the `npm start` or `npm run build` to compile the various templates into the `build` directory.

Your compiled templates can now be copied into their respective systems.

### Forked
 
Forked from https://github.com/leemunroe/responsive-html-email-template.git

# Really Simple Responsive HTML Email Template

Sometimes all you want is a really simple responsive HTML email template. Here it is.

Preview: http://leemunroe.github.io/responsive-html-email-template/email.html

## Sending emails using a marketing service like Campaign Monitor or Mailchimp?

Use the template as is. They'll put the CSS inline for you when you put together your campaign.


## Sending emails directly from your app or using a developer service

For an API like [Mailgun](http://www.mailgun.com)  you need to put the CSS inline. You can use inliner tools like [Putsmail](https://putsmail.com/inliner) or [Juice](https://github.com/Automattic/juice) to do this automatically.

* Copy all of email.html
* Paste the HTML as the source into Premailer
* Copy the HTML results and use them in your email view/template

## Tried and tested on all major email clients

Tested on mobile, desktop and web. 

![Templates](https://cloud.githubusercontent.com/assets/15963/17391543/bc289abe-59cb-11e6-9946-605a85f8c522.jpg)


[Here are the Litmus test results](https://litmus.com/checklist/emails/public/d432046).

## More HTML email resources

* [More Responsive HTML Email Templates](http://htmlemail.io)
* [Things I've Learned About Building HTML Emails](http://www.leemunroe.com/building-html-email/)
* [Grunt Email Design Workflow](https://github.com/leemunroe/grunt-email-design)
