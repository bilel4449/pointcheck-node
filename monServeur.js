const http=require("http");
const serveur=http.createServer((requete,reponse)=>{
reponse.setHeader("content-type","text/html");
reponse.write("<head><meta charset='utf8'</head>");
  if(requete.url==="/acceuil"){
        reponse.write("<h1>hello node</h1>");
  }
   reponse.end()
});
serveur.listen(3000,"localhost",()=>{
  console.log("pret a echoue les requetes au port 3000")
})