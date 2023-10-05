const http=require("http");
const serveur=http.createServer((requete,response)=>{
response.setHeader("content-type","text/html");
response.write("<head><meta charset='utf8'</head>");
  if(requete.url==="/acceuil"){
        response.write("<h1>hello node</h1>");
  }
   response.end()
});
serveur.listen(3000,"localhost",()=>{
  console.log("pret a echoue les requetes au port 3000")
})