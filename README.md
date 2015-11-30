# Form Filler Browser extension

A convenient wrapper around [jquery-chancyforms](https://github.com/fusionbox/jquery-chancyforms).
Provides the ability to fill forms on the current page with input-type-appropriate dummy data.

Currently supports:
- Chrome >=40

## Install

~~~bash
git clone https://github.com/nolsto/form-filler
cd form-filler
npm install
./node_modules/.bin/webpack
~~~

In a Chrome window

1. navigate to `chrome://extensions`
2. select `Load unpacked extension...`
3. find and select the directory cloned from git (form-filler)

An extension button will be placed at the top of the browser. Click it to fill all form fields on any given page.
