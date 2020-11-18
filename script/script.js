// - Il n'y a plus assez de vin pour remplir une caisse de 12
// - Le poids restant est inferieur ou egal a 150


let attendu = [

    {
    bouteilleVin : 12,
    poisVin : 36,
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
        bouteillesVin :0,
        poisVin : 3,
        bouteillesSpiritueux :0,
        poisSpirituel:2,
    }
    
]
//caisse(27,3,13,2);
//console.log(attendu[2].bouteillesVin,attendu[2].poisVin,attendu[2].bouteillesSpiritueux,attendu[2].poisSpirituel);
for(let i=0; i<attendu.length; i++){
caisse(attendu[i].bouteillesVin,attendu[i].poisVin,attendu[i].bouteillesSpiritueux,attendu[i].poisSpirituel);
}


     

function caisse(nombreVin,poisVin,nombreSpirituel,poisSpirituel){
    totalVinPois = nombreVin * poisVin;
    totalSpirituelPois = nombreSpirituel * poisSpirituel;

    if(nombreVin==0 && nombreSpirituel ==0){
        console.log("veuiller entrer un vin ou un spirituel");
    }
    if(nombreVin < 12 && nombreSpirituel < 12){
        
    }
    if(nombreVin < 12 && nombreSpirituel <= 0 ){

    }
    if(nombreSpirituel <12 && nombreVin <=0){

    }
    if(nombreVin > 12 && nombreSpirituel > 12){

        if(totalVinPois > totalSpirituelPois){

            console.log( "j'ai "+Math.floor(nombreVin / 12)+"  caisse de 12 " );
            console.log( "dans la caisse de spiritueux il vas y avoir "+nombreVin %12+" bouteille de vin"+" ce nombre de bouteille de spiritueux "+ nombreSpirituel+" donc dans ta boite de spiritueux il a "+(nombreVin %12 + nombreSpirituel+" bouteille") );
            


        }else{
            nombreSpirituel % 12;
        }
    }else if(nombreVin > 0){ 
        totalVinPois*poisVin;
    }else if(nombreSpirituel>0){
        totalSpirituelPois * poisSpirituel;
    }
    
}

// Avec une liste de produits:

// [{ weight_pounds: 3, quantity: 14, department: "Wine" },
//  { weight_pounds: 15, quantity: 2, department: "Spirits" }]

// Retourne moi une liste de poids, considerant que si j'ai 12 bouteilles de vin, 
// mets les dans une caisse de 12 jusqu'a ce que soit:
// - Il n'y a plus assez de vin pour remplir une caisse de 12
// - Le poids restant est inferieur ou egal a 150

// Tests: 
// [{ weight_pounds: 3, quantity: 14, department: "Wine" },
//  { weight_pounds: 20, quantity: 2, department: "Spirits" }]
// // Retourne { poids: [82], produits_restant: [] }

// [{ weight_pounds: 3, quantity: 14, department: "Wine" },
//  { weight_pounds: 20, quantity: 10, department: "Spirits" }]
// // Retourne [ poids: [36, 206, produits_restant: [{ weight_pounds: 3, quantity: 2, department: "Wine" }, { ... "Spirits" }]

// [{ weight_pounds: 3, quantity: 50, department: "Wine" }]
// // [ {poids: [36, 36, 36, 36, 2], produits_restant: []}]