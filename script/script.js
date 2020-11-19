// - Il n'y a plus assez de vin pour remplir une caisse de 12
// - Le poids restant est inferieur ou egal a 150


let attendu = [

    {
    bouteillesVin : 12,
    poisVin : 3,
    },

    {
        bouteillesSpiritueux :3,
        poisSpirituel:2,
    },
    {
        bouteillesVin :6,
        poisVin : 3,
        bouteillesSpiritueux :6,
        poisSpirituel:2,
    },
    {
        bouteillesVin :4,
        poisVin : 3,
        bouteillesSpiritueux :4,
        poisSpirituel:2,
    },
    {
        bouteillesVin :27,
        poisVin : 3,
        bouteillesSpiritueux :13,
        poisSpirituel:2,
    },
    {
        bouteillesVin :32,
        poisVin : 3,
        bouteillesSpiritueux :34,
        poisSpirituel:2,
    },
    {
        bouteillesVin :1000,
        poisVin : 3,
        bouteillesSpiritueux :2000,
        poisSpirituel:2,
    },
    {
        bouteillesVin :0,
        poisVin : 3,
        bouteillesSpiritueux :0,
        poisSpirituel:2,
    }
    
]

for(let i=0; i<attendu.length; i++){
caisse(attendu[i].bouteillesVin,attendu[i].poisVin,attendu[i].bouteillesSpiritueux,attendu[i].poisSpirituel);
}


     

function caisse(nombreVin,poisVin,nombreSpirituel,poisSpirituel){
    let totalPoisVin;
    let totalPoisSpirituel;
    if(nombreVin == undefined){
        nombreVin = 0;
    }
    if(poisVin == undefined){
        poisVin = 0;
    }
    if(nombreSpirituel == undefined){
        nombreSpirituel = 0;
    }
    if(poisSpirituel == undefined){
        poisSpirituel = 0;
    }
    totalPoisVin = nombreVin * poisVin;
    totalPoisSpirituel = nombreSpirituel * poisSpirituel;


    if(nombreVin==0 && nombreSpirituel ==0){
        console.log("veuiller entrer un vin ou un spirituel");
    }else if(nombreVin <= 12 && nombreSpirituel <= 0 ){
        console.log("cette commande rentre dans une boite de 12 bouteilles elle contien "+ nombreVin + " bouteille de vin");
    
    }else if(nombreSpirituel <12 && nombreVin <=0){
        console.log("cette commande contien "+ nombreSpirituel + " bouteille de Spirituel");
    }else if(nombreVin < 12 && nombreSpirituel < 12 && nombreVin + nombreVin <=12){
        console.log("cette commande rentre dans une boite de 12 bouteilles elle contien "+ nombreVin + " bouteille de vin et "+ nombreSpirituel +" bouteille de spiritueux");
    }

    if(nombreVin > nombreSpirituel){
        console.log( "j'ai "+Math.floor(nombreVin / 12)+" caisse de 12 de vin. Dans la caisse de spiritueux, il vas y avoir "+nombreVin %12+" bouteille de vin."+" Il y a "+ nombreSpirituel+" bouteille de spiritueux. Donc dans la boite de spiritueux il a "+(nombreVin %12 + nombreSpirituel+" bouteille") );
           
    }

    if(nombreSpirituel > nombreVin && nombreVin > 12){
        console.log("J'ai "+nombreSpirituel+" bouteille de spiritueux. Dans cette commande il y a "+nombreVin+" bouteilles de vin, Donc il y a "+Math.floor(nombreVin / 12)+" caisse de 12 de vin et "+nombreVin %12+ " bouteille de vin plus");
    }

    if(totalPoisVin > 150 || totalPoisSpirituel > 150 || totalPoisVin + totalPoisSpirituel > 150 ){
        console.log("cette commance pese plus de "+ (totalPoisVin + totalPoisSpirituel)+" livre veuillez mettre cette commande dans "+ Math.ceil((totalPoisVin + totalPoisSpirituel)/150)+" boite de 150");
    }
    
    
}

