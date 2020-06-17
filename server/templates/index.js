export default function index(title,html,script,css){
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                name="description"
                content="Web site created using create-react-app"
                />
                <title>${title}</title>
                <style>${[...css].join('')}</style>
            </head>
            <body>
                <div id="root">
                    ${html}
                </div>    
                <script src="${script}"  type="text/javascript"></script>        
            </body>
            </html>`
}

