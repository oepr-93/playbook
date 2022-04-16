const user = {
    id:1,
    user: "oepr93",
    username: "oepr93",
    email: "oepr_redbull08@hotmail.com",
    twitts: 100,
    megusta: 20,
    seguidores: 50,
    seguidos: 20,
    fecha_unido: "",
    getuser: function(){
      return " Usuario: "+this.user +"\n Correo: " +this.email+"\n En twitter desde: "+this.fecha_unido;
    },
    getStats: function(){
      return ` Twitts ${this.twitts} \n Me gusta: ${this.megusta} \n Seguidores: ${this.seguidores} \n Seguidos: ${this.seguidos}`
    }
   }
    
    const trendingtopic = {
      id:109,
      hashtag: "#algo",
      tema: "deportes",
      numero_interacciones: 250,
      pais: "",
      fecha: "",
      gettrendingtopic: function(){
        return " Hashtag: "+this.hashtag +"\n Tema: " +this.tema;
      },
      getInfo: function(){
        return ` Hashtag: ${this.hashtag} \n Tema: ${this.tema} \n Interacciones: ${this.numero_interacciones} \n País: ${this.pais} \n Fecha del trending topic: ${this.fecha};`
      }
    }
    const hashtag = {
      id: 250,
      texto: "algo",
      numero_interacciones: 250,
      gethashtag: function(){
        return " Hashtag: #"+this.texto +"\n Número de interacciones: " +this.numero_interacciones;
      },
      
    }
    
    console.log("******************************** \n*****       Twitter        ***** \n********************************")
    console.log(user.getuser());
    console.log(user.getStats());
    console.log("********************************");
    console.log(trendingtopic.gettrendingtopic());
    console.log(trendingtopic.getInfo());
    console.log("********************************");
    console.log(hashtag.gethashtag());