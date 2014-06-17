## ILSB - Incredibly lightweight sharing buttons

Every programmer must write own CMS to realize, that it is always better to use already written and used by millions. And every programmer should also write its own solution for displaying sharing buttons. So here is my shot. 

### → [Live demo](http://todvora.github.io/ilsb/demo.html)

## Reasons, benefits

Main reason, why I decided to write own sharing buttons solution was, that every other solution seemed to me too heavy, to hard to configure and use. I do not want to include any stylesheets, configure plugins and debug, where is problem. Also, I really like simple and lightweight solutions.

## Usage

ILSB contains only one small JavaScript, that must be included to page. If you want, you can hotlink it directly from github pages for this repository:

```
<script type="text/javascript" src="http://todvora.github.io/ilsb/ilsb.js"></script>
```

This script will look for HTML fragment like this:

```
<ul>
  <li><a class="share btn-facebook">FACEBOOK</a></li>
  <li><a class="share btn-twitter">TWITTER</a></li>
  <li><a class="share btn-linkedin">LINKEDIN</a></li>
  <li><a class="share btn-gplus">GOOGLE +</a></li>
  <li><a class="share btn-github" href="#">GITHUB</a></li>
  <li><a class="share btn-email">E-MAIL</a></li>
</ul>
```
If you don't want sharing button for some of the services, just delete the line with it. That simple is it.

Facebook, twitter, linkedin, google plus and email requires no configuration. They will use current page title and url to create sharing link. Only Github, if used, needs to know, where should link point. Github button contains no autodetection.

## Icons
Icons are not stored anywhere. It's used google favicon service, which can provide favicon for every website. Usage is simple, image source `http://www.google.com/s2/favicons?domain=twitter.com` will provide favicon for twitter. This means, that the incredible load will handle google server, not yours. And the best part is that icons are always up-to-date!

