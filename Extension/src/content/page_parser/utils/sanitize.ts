/*
  The code is copied from hm-app/src/resources/sanitize.ts.
  The config file 'hm-conf.ts' is generated by hm-server's "ant build".

 usage:
   const sanitized: string  = sanitizeHtml(HTMLStr)

 options:
   https://github.com/punkave/sanitize-html
*/



// import baseSanitizeHtml from 'npm:sanitize-html'; // sanitizeHtml as baseSanitizeHtml
// import {Sanitizer_Allow_Tags, Sanitizer_Allow_Attributes} from '../hm-conf.ts';

// interface HTMLOption {
//     allowedTags: string[];
//     allowedAttributes: any;
// }

// // allowed tags are defined on conf.py
// const defaultOption: HTMLOption = {
//     allowedTags: Sanitizer_Allow_Tags,
//     allowedAttributes: Sanitizer_Allow_Attributes,
// }


// export function sanitizeHtml(value: string): string {
//     return baseSanitizeHtml(value, defaultOption);
// }


export function sanitizeHtml(value: string): string {
    return baseSanitizeHtml(value, defaultOption);
}
